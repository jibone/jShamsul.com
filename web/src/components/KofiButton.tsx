"use client";

import { useState } from "react";

export default function KofiButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <span className="text-black font-medium hover:decoration-purple-300 underline underline-offset-2 decoration-2 decoration-purple-500">
          ☕️ Buy me ko-fi ?
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal container */}
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-4 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Ko-fi iframe */}
            <div className="w-full pt-5">
              <iframe
                id="kofiframe"
                src="https://ko-fi.com/jibone/?hidefeed=true&widget=true&embed=true&preview=true"
                className="w-full p-2"
                height="712"
                title="jibone"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
