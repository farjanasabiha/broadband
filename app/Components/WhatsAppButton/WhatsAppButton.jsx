"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppButton = () => {
  return (
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
      notificationClassName=""
      darkMode={true}
      styles={{ right: "20px", bottom: "20px" }}
    />
  );
};
export default WhatsAppButton;
