import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-black py-12 text-center text-muted-foreground border-t border-white/10 text-xs md:text-sm">
      <div className="max-w-4xl mx-auto px-6 leading-relaxed">
        <p className="mb-4">
          <strong>Disclaimer:</strong> The content of this product is strictly educational.
          Results obtained by applying the method may vary significantly among individuals,
          depending on factors such as dedication, execution, and consistency. We do not
          guarantee specific results or exact financial gains.
        </p>
        <p className="mb-4">
          Explodely.com is the authorized retailer for this site. Explodely is a registered
          trademark of Explodely LLC, a US-based company located at 1317 Edgewater Drive, Suite
          #4648, Orlando, FL, 32804, United States, and used with permission. Explodely's role
          as a retailer does not constitute an endorsement, approval, or review of this product
          or any claim, statement, or opinion used in the promotion of this product.
        </p>
        <p className="mb-6">
          If you are not completely satisfied with your purchase or need support for your
          order, please contact Explodely here:{" "}
          <a
            href="http://expldely.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tk-cyan hover:underline"
          >
            http://expldely.com/
          </a>
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 font-semibold text-foreground/70">
          <Link to="/terms" className="hover:text-tk-cyan transition-colors">
            Terms of Use
          </Link>
          <Link to="/privacy" className="hover:text-tk-cyan transition-colors">
            Privacy Policy
          </Link>
        </div>

        <p className="mb-2">
          Company: Maximize Digital | CNPJ (Brazilian Business ID): 51.661.567/0001-40
        </p>
        <p>&copy; 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}