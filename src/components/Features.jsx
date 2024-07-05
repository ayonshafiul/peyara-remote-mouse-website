import React from "react";

const FEATURES = [
  {
    title: "Connectivity Features",
    features: [
      "Connect using WIFI",
      "Easy and effortless QRCode scanning",
      "Automatic server detection",
      "Fast device switching",
    ],
    image: "/img/home.png",
  },
  {
    title: "Touchpad Features",
    features: [
      "Single Tap",
      "Double Tap",
      "Right Click on Two Finger Tap",
      "Two Finger Scroll gesture",
      "Three Finger pan gesture to move",
    ],
    image: "/img/touchpad-2.png",
  },
  {
    title: "Keyboard Features",
    features: [
      "Input text using mobile keyboard",
      "Capital and lowercase letters supported",
      "Enter and Backspace key supported",
      "(Advanced keys coming soon)",
    ],
    image: "/img/keyboard.png",
  },
  {
    title: "Clipboard Features",
    features: [
      "Send Urls, text messages, notes from mobile to pc",
      "Share text from pc to mobile",
      "Instant copy to clipboard with a single click.",
    ],
    image: "/img/touchpad.png",
  },
  {
    title: "Media Features",
    features: [
      "Control media volume",
      "Play, pause, stop, skip to the previous or next track",
    ],
    image: "/img/touchpad.png",
  },
  {
    title: "Open Source and Zero Ads",
    features: [
      "Peyara Remote Mouse and Keyboard is free and open source",
      "Enjoy an ad-free experience.",
    ],
  },
];

export default function Features() {
  return (
    <div className="feature-wrapper">
      <h1 className="feature-text">Features</h1>
      {FEATURES.map((feature, idx) => {
        return (
          <div className="feature-container" key={idx}>
            <div>
              <h1>{feature.title}</h1>
              <ul>
                {feature.features.map((feat) => {
                  return <li className="feature-item">{feat}</li>;
                })}
              </ul>
            </div>
            {feature.image && (
              <img className="feature-img" src={feature.image} />
            )}
          </div>
        );
      })}
    </div>
  );
}
