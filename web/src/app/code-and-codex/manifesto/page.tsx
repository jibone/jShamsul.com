import { Layout } from "@/components";
import Link from "next/link";

export default function CodeCodexManifestoPage() {
  return (
    <Layout page="code-codex">
      <div className="prose-custom">
        <h1>Code &amp; Codex Manifesto v1.0</h1>

        <p>
          <em>
            A field manual for understanding power, code,
            <br />
            and truth in the digital age.
          </em>
        </p>

        <hr />

        <p>We are living inside systems we did not design.</p>

        <p>
          Invisible digital architectures shape what we see, what we believe,
          and what we become. Algorithms decide what is visible. Platforms
          decide what is true. Power hides behind interfaces.
        </p>

        <p>Most people, they scroll. We observe.</p>

        <p>
          <strong>Code &amp; Codex</strong> exists for those who refuse to be
          passive users of the system. This is not a newsletter about tech
          trends, tools, or tutorials, this is a field manual. Not for escaping
          the system, but for moving through it with intent.
        </p>

        <p>
          We believe the goal is not disconnection. It is awareness, precision,
          and control. To use the system, without being used by it.
        </p>

        <p>Here are 5 basic tenets on how we operate:</p>

        <ul>
          <li>
            <strong>See clearly</strong>: Understand how algorithms, platforms,
            and incentives shape perceptions.
          </li>
          <li>
            <strong>Think independently</strong>: Resist false narratives,
            outrage cycles, and manufactured consensus.
          </li>
          <li>
            <strong>Build Intentionally</strong>: Create software, system, and
            ideas that do not blindly reinforce existing power.
          </li>
          <li>
            <strong>Consume consciously</strong>: Choose what enters your mind
            instead of outsourcing that choice to feeds.
          </li>
          <li>
            <strong>Move quietly</strong>: Not everything needs to be posted,
            shared, or optimised for visibility.
          </li>
        </ul>

        <p>
          To us, code is not just instruction, it is leverage. Writing is not
          just expression, it is signal. Attention is not free, it is the
          battlefield.
        </p>

        <p>
          <strong>Code &amp; Codex</strong> is written for the different kind of
          builder. Not the one chasing frameworks, not the one optimising for
          clicks. This newsletter is for the one who sees:
        </p>

        <ul>
          <li>The hidden structures behind the screen</li>
          <li>The narratives embedded in technology</li>
          <li>The tensions between truth and control</li>
        </ul>

        <p>
          This publication operates as a digital grimoire. A collection of
          signals hidden in essays, fragments of thought, and interpretations of
          the system we inhabit. Some entries will be clear, some will feel
          cryptic. That is intentional because not everything should be obvious.
        </p>

        <p>
          We believe that our writing is a form of resistance, that our code is
          a form of expression, and that meaning must be constructed, not
          consumed.
        </p>

        <p>
          We are not here to tell you what to think. We are here to help you see
          the system for what it is, and decide how you will exist within it.
        </p>

        <p>
          If you are one of those who question the feed, see through the
          interface, and understand that the system is not what it seems, then{" "}
          <strong>Code & Codex</strong> is for you.
        </p>

        <p>
          <em>Stay glitched, stay human.</em>
          <br />
          Jibone.
        </p>

        <p>
          <Link href="/code-and-codex">← Code &amp; Codex Essays.</Link>
        </p>
      </div>
    </Layout>
  );
}
