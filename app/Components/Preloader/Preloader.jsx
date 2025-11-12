"use client";

import React, { useEffect, useState } from "react";
import "./preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Handle initial page load only
  useEffect(() => {
    // Start fade out after content is loaded
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1000); // Show loader for 1 second
    
    // Complete hide after fade animation (0.4s transition + buffer)
    const hideTimer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Total: 1s display + 0.4s fade + 0.1s buffer

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []); // Empty dependency array - runs only once on mount

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
