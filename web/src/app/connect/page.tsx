import { Layout } from "@/components";
import ZapButton from "@/components/ZapButton";
import KofiButton from "@/components/KofiButton";

export async function generateMetadata() {
  return {
    title: "Connect with J. Shamsul (@jibone)",
    description: "Find out where to connect with Jibone on various platforms.",
  };
}

export default function Connect() {
  return (
    <Layout page="connect">
      <div className="prose-custom">
        <h1>Let&rsquo;s Connect.</h1>

        <p>Listed below are the platforms where I&rsquo;m somewhat active.</p>

        <p>
          Occasionally, you&rsquo;ll see me posting on <strong>Nostr</strong>,{" "}
          <strong>Farcaster</strong>, <strong>Bluesky</strong>,{" "}
          <strong>Discord</strong> and <strong>Twitter/X</strong>. I read
          comments and reply on these platforms when I can.
        </p>

        <ul>
          <li>
            <strong>Nostr:</strong>
            <pre>
              npub1pq3nweafwtwelmzmz2s9w0uafd68jm803m959r9wfghkhqdky3ys9feyc5
            </pre>
          </li>

          <li>
            <strong>Farcaster:</strong> <pre>@jiboneus</pre>
          </li>

          <li>
            <strong>Bluesky:</strong> <pre>@jibone.bsky.social</pre>
          </li>

          <li>
            <strong>Twitter/X:</strong> <pre>@jibone</pre>
          </li>

          <li>
            <strong>Discord:</strong> <pre>jibone</pre>
          </li>
        </ul>

        <p>
          I also sometimes post notes on Substack:{" "}
          <a href="https://jibone.substack.com" target="_blank">
            jibone.substack.com
          </a>
        </p>

        <p>
          If you stumble across a version of me elsewhere — with a similar name
          or handle — it&rsquo;s likely a <em>ghost account from the past</em>{" "}
          (dormant account) or a <em>digital impostor</em>.
        </p>

        <p>These are the only spaces I currently inhabit.</p>

        <p>For longer messages or thoughtful replies, you can email me at:</p>
        <pre>jibone [at] jshamsul.com</pre>

        <p>
          I believe in value for value, not paywalls. If you find anything I
          create helpful or even a little entertaining, I&rsquo;d appreciate a{" "}
          <strong>tip via Ko-fi</strong>, or feel free to{" "}
          <strong>Zap me some sats ⚡️</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-fit space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4">
            <KofiButton />
          </div>

          <div className="w-fit space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4">
            <ZapButton noteId="" />
          </div>
        </div>

        <p>
          Thank you for reading,
          <br />
          <strong>Jibone</strong>
        </p>
      </div>
    </Layout>
  );
}
