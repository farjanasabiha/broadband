"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const pathname = usePathname();

  // Handle initial page load
  useEffect(() => {
    if (initialLoad) {
      const timer = setTimeout(() => {
        setLoading(false);
        setInitialLoad(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [initialLoad]);

  // Handle route changes
  useEffect(() => {
    if (!initialLoad) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [pathname, initialLoad]);

  if (!loading) return null;

  return (
    <div className="preloader-overlay">
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
