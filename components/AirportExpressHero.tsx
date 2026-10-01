"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type TransitionEvent } from "react";
import { BookingLink } from "@/components/BookingLink";

const scenes = [
  {
    src: "/images/hero/san-francisco-bay.webp",
    label: "San Francisco Bay",
    city: "San Francisco",
    position: "center 61%",
  },
  {
    src: "/images/hero/golden-gate-bridge.webp",
    label: "Golden Gate",
    city: "San Francisco",
    position: "center 50%",
  },
  {
    src: "/images/hero/san-francisco-fog.webp",
    label: "San Francisco fog",
    city: "San Francisco",
    position: "center 45%",
  },
  {
    src: "/images/hero/san-francisco-twin-peaks.webp",
    label: "Twin Peaks",
    city: "San Francisco",
    position: "center 54%",
  },
  {
    src: "/images/hero/sfo-international-terminal.webp",
    label: "SFO",
    city: "San Francisco International",
    position: "62% 55%",
  },
] as const;

export function AirportExpressHero() {
  const [layerScenes, setLayerScenes] = useState<[number, number]>([0, 1]);
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const [decodedScene, setDecodedScene] = useState<number | null>(null);
  const [crossfadeActive, setCrossfadeActive] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [paused, setPaused] = useState(false);
  const activeScene = layerScenes[activeLayer];
  const incomingLayer = (1 - activeLayer) as 0 | 1;
  const nextScene = (activeScene + 1) % scenes.length;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      const enabled = !preference.matches;
      setMotionEnabled(enabled);
      if (!enabled) {
        setCrossfadeActive(false);
      }
    };

    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (!motionEnabled || paused || decodedScene !== nextScene || crossfadeActive) return;

    const timer = window.setTimeout(() => {
      setCrossfadeActive(true);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [crossfadeActive, decodedScene, motionEnabled, nextScene, paused]);

  const markDecoded = (image: HTMLImageElement, sceneIndex: number) => {
    const begin = () => {
      if (image.naturalWidth > 0) setDecodedScene(sceneIndex);
    };
    if (typeof image.decode === "function") {
      void image.decode().catch(() => undefined).then(begin);
      return;
    }
    begin();
  };

  const finishCrossfade = (event: TransitionEvent<HTMLDivElement>, layerIndex: 0 | 1) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "opacity" ||
      layerIndex !== incomingLayer ||
      !crossfadeActive
    ) return;
    setLayerScenes((current) => {
      const updated: [number, number] = [...current];
      updated[activeLayer] = (nextScene + 1) % scenes.length;
      return updated;
    });
    setActiveLayer(layerIndex);
    setDecodedScene(null);
    setCrossfadeActive(false);
  };

  return (
    <section aria-labelledby="hero-title" className="hero">
      <div aria-hidden="true" className="hero__scenery">
        {layerScenes.map((sceneIndex, layerIndex) => {
          const isActive = layerIndex === activeLayer;
          const isIncoming = motionEnabled && layerIndex === incomingLayer;
          return (
            <div
              className={`hero__photo-layer${isActive ? ` is-active${crossfadeActive ? " is-fading" : ""}` : ""}${isIncoming && crossfadeActive ? " is-incoming" : ""}`}
              key={`photo-layer-${layerIndex}`}
              onTransitionEnd={(event) => finishCrossfade(event, layerIndex as 0 | 1)}
            >
              <Image
                key={`scene-${sceneIndex}`}
                alt=""
                className="hero__photo"
                fill
                priority={isActive && sceneIndex === 0}
                loading={isActive || isIncoming ? "eager" : "lazy"}
                onLoad={(event) => markDecoded(event.currentTarget, sceneIndex)}
                quality={86}
                sizes="100vw"
                src={scenes[sceneIndex].src}
                style={{ objectPosition: scenes[sceneIndex].position }}
              />
            </div>
          );
        })}
        <div className="hero__shade" />
      </div>

      <div className="hero__scene-controls">
        <span aria-hidden="true" className="hero__scene-label">
          <span className="hero__scene-index">
            {String(activeScene + 1).padStart(2, "0")} <i>/</i> {String(scenes.length).padStart(2, "0")}
          </span>
          <span className="hero__scene-copy">
            <strong>{scenes[activeScene].label}</strong>
            <span>{scenes[activeScene].city}</span>
          </span>
        </span>
        {motionEnabled && (
          <button
            aria-label={paused ? "Play background slideshow" : "Pause background slideshow"}
            aria-pressed={paused}
            className="hero__motion-toggle"
            onClick={() => setPaused((wasPaused) => !wasPaused)}
            title={paused ? "Play background slideshow" : "Pause background slideshow"}
            type="button"
          >
            <span aria-hidden="true" className={`hero__motion-icon${paused ? " is-play" : ""}`}>
              <span />
            </span>
          </button>
        )}
      </div>

      <div className="hero__copy">
        <p className="eyebrow eyebrow--light">Airport Express · San Francisco</p>
        <h1 id="hero-title">Airport rides. Trips beyond.</h1>
        <p className="hero__lead">
          Airport and private rides throughout our approximately 60-mile service area. Confirm your
          destination with our team.
        </p>
        <div className="hero__actions">
          <BookingLink />
          <Link className="button button--hero-secondary" href="/where-we-go">
            Where we go <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div aria-hidden="true" className="hero__van-ground" />
      <div className="hero__van-wrap">
        <Image
          alt="White Airport Express van with the company logo and phone number on its side"
          className="hero__van"
          fill
          quality={92}
          sizes="(max-width: 760px) 100vw, (max-width: 1080px) 88vw, 68vw"
          src="/images/airport-express-van.webp"
        />
      </div>
    </section>
  );
}
