import { Layout } from "@/components";

export default function Connect() {
  return (
    <Layout page="connect">
      <div className="prose-custom">
        <h1>Connect.</h1>
        <p>These are ways to get in touch,</p>
        <p>
          I am fairly active on Twitter (now known as X). Follow, mention, or DM
          me, my account is{" "}
          <a href="https://twitter.com/jibone" target="_blank">
            @jibone
          </a>{" "}
        </p>
        <p>
          I am also reachable via email:{" "}
          <strong>jibone `at` jshamsul.com</strong>
        </p>
        <p>I am not active in any other social media platforms.</p>
      </div>
    </Layout>
  );
}
