import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — How to Go Viral on TikTok" },
      {
        name: "description",
        content:
          "How we collect, use, and protect your personal information when you use our site and product.",
      },
      { property: "og:title", content: "Privacy Policy" },
      {
        property: "og:description",
        content: "Our privacy policy explaining how we handle your data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <Link to="/" className="text-tk-cyan hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/80">
        <p>
          <strong>Last Updated:</strong> April 21, 2026
        </p>

        <p>
          Your privacy is important to us. It is our policy to respect your privacy regarding
          any information we may collect from you across our website and other sites we own and
          operate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
          1. Information we collect
        </h2>
        <p>
          We only ask for personal information when we truly need it to provide a service to
          you. We collect it by fair and lawful means, with your knowledge and consent. We also
          let you know why we're collecting it and how it will be used.
        </p>
        <p>
          The types of data we collect may include your name, email address, and payment
          information (processed securely through third-party processors like Explodely).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
          2. Use of your information
        </h2>
        <p>We use the collected information for various purposes, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>
            To allow you to participate in interactive features of our service when you choose
            to do so
          </li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our service</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. Data retention</h2>
        <p>
          We only retain collected information for as long as necessary to provide you with
          your requested service. What data we store, we'll protect within commercially
          acceptable means to prevent loss and theft, as well as unauthorized access,
          disclosure, copying, use or modification.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Sharing of data</h2>
        <p>
          We don't share any personally identifying information publicly or with third-parties,
          except when required to by law, or with necessary service providers (such as payment
          processors) in order to fulfill your purchases and requests.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">5. Cookies</h2>
        <p>
          Our website uses "cookies" to collect information and improve our service. You have
          the option to either accept or refuse these cookies, and know when a cookie is being
          sent to your computer. If you choose to refuse our cookies, you may not be able to
          use some portions of our service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">6. Your rights</h2>
        <p>
          You are free to refuse our request for your personal information, with the
          understanding that we may be unable to provide you with some of your desired
          services. If you have any questions about how we handle user data and personal
          information, feel free to contact us.
        </p>

        <p className="mt-8 pt-8 border-t border-white/10">
          This policy is effective as of 2026. Operated by Maximize Digital (CNPJ:
          51.661.567/0001-40).
        </p>
      </div>
    </div>
  );
}