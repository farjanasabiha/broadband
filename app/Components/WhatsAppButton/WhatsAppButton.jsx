"use client";
import React, { useState, useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render on server side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999999,
      }}
    >
      <FloatingWhatsApp
        phoneNumber="+8801965300500"
        accountName="SyncIT"
        avatar="/syncIT-Image.png"
        statusMessage="24 / 7 Available"
        chatMessage="Hello 👋, how can we help you?"
        placeholder="Type a message..."
        allowEsc
        notification
        notificationSound
        notificationDelay={10}
        darkMode={true}
      />
    </div>
  );
};

export default WhatsAppButton;
