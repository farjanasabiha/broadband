"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppButton = () => {
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
