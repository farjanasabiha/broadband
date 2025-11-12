"use client";
import React, { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";

export default function TranslationProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render a loading state on server side to prevent hydration mismatch
  if (!isClient) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
