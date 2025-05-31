import React, { useState } from "react";
import Helmet from "react-helmet";

const WaitlistModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 "
        >
          ×
        </button>
        <div
          id="getWaitlistContainer"
          data-waitlist_id="28901"
        ></div>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
          />
          <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
        </Helmet>
      </div>
    </div>
  );
};

const JoinWaitlistButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300"
      >
        Join the Waitlist
      </button>
      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default JoinWaitlistButton;
