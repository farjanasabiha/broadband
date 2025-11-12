"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const pathname = usePathname();

  // Handle initial page load
  useEffect(() => {
    if (initialLoad) {
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 800); // Start fade out earlier
      
      const hideTimer = setTimeout(() => {
        setLoading(false);
        setInitialLoad(false);
        setFadeOut(false);
      }, 1000); // Complete hide

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [initialLoad]);

  // Handle route changes
  useEffect(() => {
    if (!initialLoad) {
      setLoading(true);
      setFadeOut(false);
      
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 300);
      
      const hideTimer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [pathname, initialLoad]);

  if (!loading) return null;

  return (
    <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
