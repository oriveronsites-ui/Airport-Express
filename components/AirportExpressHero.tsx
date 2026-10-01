"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
] as const;

export function AirportExpressHero() {
  const [activeScene, setActiveScene] = useState(0);
  const [nextScene, setNextScene] = useState<number | null>(null);
  const [crossfadeActive, setCrossfadeActive] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      const enabled = !preference.matches;
      setMotionEnabled(enabled);
      if (!enabled) {
        setNextScene(null);
        setCrossfadeActive(false);
      }
    };

    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (!motionEnabled || paused || nextScene !== null) return;

    const timer = window.setTimeout(() => {
      setNextScene((activeScene + 1) % scenes.length);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [activeScene, motionEnabled, nextScene, paused]);

  const startCrossfade = () => {
    window.requestAnimationFrame(() => setCrossfadeActive(true));
  };

  const finishCrossfade = (propertyName: string) => {
    if (propertyName !== "opacity" || nextScene === null) return;
    setActiveScene(nextScene);
    setNextScene(null);
    setCrossfadeActive(false);
  };

  return (
    <section aria-labelledby="hero-title" className="hero">
      <div aria-hidden="true" className="hero__scenery">
        <div className={`hero__photo-layer is-active${crossfadeActive ? " is-fading" : ""}`}>
          <Image
            key={`scene-${activeScene}`}
            alt=""
            className="hero__photo"
            fill
            priority
            quality={86}
            sizes="100vw"
            src={scenes[activeScene].src}
            style={{ objectPosition: scenes[activeScene].position }}
          />
        </div>
        {nextScene !== null && (
          <div
            className={`hero__photo-layer${crossfadeActive ? " is-incoming" : ""}`}
            onTransitionEnd={(event) => finishCrossfade(event.propertyName)}
          >
            <Image
              key={`scene-next-${nextScene}`}
              alt=""
              className="hero__photo"
              fill
              loading="eager"
              onLoad={startCrossfade}
              quality={86}
              sizes="100vw"
              src={scenes[nextScene].src}
              style={{ objectPosition: scenes[nextScene].position }}
            />
          </div>
        )}
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
