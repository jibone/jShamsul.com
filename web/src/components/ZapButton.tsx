"use client";

import { useEffect } from "react";

export default function ZapButton({ noteId }: { noteId: string }) {
  useEffect(() => {
    // Dynamically load the nostr-zap script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/nostr-zap@latest";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <button
        data-npub="npub1pq3nweafwtwelmzmz2s9w0uafd68jm803m959r9wfghkhqdky3ys9feyc5"
        data-relays="wss://relay.damus.io,wss://relay.snort.social,wss://nostr.wine,wss://relay.nostr.band"
        data-note-id={noteId}
      >
        <span className="text-black font-medium hover:decoration-purple-300 underline underline-offset-2 decoration-2 decoration-purple-500">
          ⚡️ Zap me Sats ?
        </span>
      </button>
    </div>
  );
}
