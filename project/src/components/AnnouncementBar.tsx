import React from "react";

const AnnouncementBar = () => (
  <div className="w-full bg-black text-pink-400 py-1 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap text-center text-sm font-medium">
      The Audiory is not live yet. You can just have a demo or Join waitlist to get notified when it will be live.
    </div>
    <style>
      {`
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}
    </style>
  </div>
);

export default AnnouncementBar;