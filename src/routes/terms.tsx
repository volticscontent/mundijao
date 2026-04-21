import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — How to Go Viral on TikTok" },
      {
        name: "description",
        content:
          "Terms and conditions governing your use of our website and product.",
      },
      { property: "og:title", content: "Terms of Use" },
      {
        property: "og:description",
        content: "Terms and conditions for using our site and product.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <Link to="/" className="text-tk-cyan hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/80">
        <p>
          <strong>Last Updated:</strong> April 21, 2026
        </p>

        <p>
          Welcome to our website. By accessing or using our product and site, you agree to be
          bound by these Terms of Use and all applicable laws and regulations. If you do not
          agree with any of these terms, you are prohibited from using or accessing this site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information
          or software) on this website for personal, non-commercial transitory viewing only.
          This is the grant of a license, not a transfer of title, and under this license you
          may not:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Modify or copy the materials;</li>
          <li>
            Use the materials for any commercial purpose, or for any public display (commercial
            or non-commercial);
          </li>
          <li>
            Attempt to decompile or reverse engineer any software contained on the website;
          </li>
          <li>Remove any copyright or other proprietary notations from the materials;</li>
          <li>
            Transfer the materials to another person or "mirror" the materials on any other
            server.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. Disclaimer</h2>
        <p>
          The materials on our website are provided on an 'as is' basis. We make no warranties,
          expressed or implied, and hereby disclaim and negate all other warranties including,
          without limitation, implied warranties or conditions of merchantability, fitness for
          a particular purpose, or non-infringement of intellectual property or other violation
          of rights.
        </p>
        <p>
          Further, we do not warrant or make any representations concerning the accuracy,
          likely results, or reliability of the use of the materials on its website or
          otherwise relating to such materials or on any sites linked to this site. The results
          shown in testimonials are meant as a showcase of what the best, most motivated users
          have done and should not be taken as average or typical results.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. Limitations</h2>
        <p>
          In no event shall we or our suppliers be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business interruption)
          arising out of the use or inability to use the materials on our website, even if we
          or an authorized representative has been notified orally or in writing of the
          possibility of such damage.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
          4. Revisions and Errata
        </h2>
        <p>
          The materials appearing on our website could include technical, typographical, or
          photographic errors. We do not warrant that any of the materials on its website are
          accurate, complete, or current. We may make changes to the materials contained on
          its website at any time without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">5. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws
          of Brazil, specifically in relation to Maximize Digital (registered under CNPJ
          51.661.567/0001-40), and you irrevocably submit to the exclusive jurisdiction of the
          courts in that location.
        </p>
      </div>
    </div>
  );
}