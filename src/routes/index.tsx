import { createFileRoute } from "@tanstack/react-router";
import {
  Rocket,
  TrendingUp,
  DollarSign,
  BookOpen,
  MessageCircle,
  Flame,
  Check,
  XCircle,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Zap,
  Star,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

const CHECKOUT_URL =
  "https://pay.mycheckoutt.com/019d73df-ab4e-722f-9e4e-fa31e684fbcb?ref=";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "How to Go Viral on TikTok — The Ultimate Growth System" },
      {
        name: "description",
        content:
          "Discover the exact strategies top TikTok creators use to get millions of views, build engaged communities, and turn short-form videos into a full-time income.",
      },
      { property: "og:title", content: "How to Go Viral on TikTok" },
      {
        property: "og:description",
        content:
          "The ultimate step-by-step system to grow on TikTok — algorithm decoded, viral strategies, and monetization playbook.",
      },
    ],
  }),
  component: Index,
});

function CtaButton({ size = "lg" }: { size?: "lg" | "xl" }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-gradient-btn text-white font-black rounded-2xl shadow-pink-glow hover:scale-105 transition-transform duration-300 ${
        size === "xl"
          ? "w-full max-w-md mx-auto px-8 py-6 text-2xl"
          : "w-full md:w-auto px-10 py-5 text-xl md:text-2xl animate-pulse"
      }`}
    >
      GET INSTANT ACCESS NOW
    </a>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <header className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-sm md:text-base text-tk-cyan font-semibold tracking-wide uppercase">
          The Ultimate System to Grow on TikTok
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
          How to <span className="text-gradient-brand">go viral</span> on TikTok
          <br className="hidden md:block" />
          and build a massive audience
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto font-light leading-relaxed">
          Discover the exact strategies top TikTok creators use to get millions of views, build
          engaged communities, and turn short-form videos into a full-time income.
        </p>

        <div className="mb-16">
          <CtaButton />
          <p className="mt-4 text-sm text-muted-foreground font-medium">
            Instant Access · 30-Day Guarantee · Secure Checkout
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
          {[
            ["1 Billion+", "Monthly Active Users"],
            ["95 mins", "Average Daily Use"],
            ["67%", "Higher Engagement vs. Instagram"],
            ["#1", "Most Downloaded App Worldwide"],
          ].map(([k, v]) => (
            <div key={v} className="p-4">
              <p className="text-3xl md:text-5xl font-black text-foreground mb-2">{k}</p>
              <p className="text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </header>

      {/* OPPORTUNITY */}
      <section className="bg-tk-darker py-20 px-4 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-tk-pink font-semibold tracking-wider uppercase mb-2">
              The Opportunity
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold">
              Why is TikTok the biggest opportunity right now?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Rocket,
                color: "tk-cyan",
                title: "Organic reach is INSANE",
                body: "Unlike Instagram or YouTube, the TikTok algorithm gives EVERY video a chance to go viral — even if you have zero followers. Your first video can reach 1 million views if the content is relevant.",
              },
              {
                Icon: TrendingUp,
                color: "tk-pink",
                title: "Fastest growing platform",
                body: "Over 1 billion monthly active users and growing. Attention is shifting to short-form video content faster than ever. Early adopters are building empires.",
              },
              {
                Icon: DollarSign,
                color: "tk-cyan",
                title: "Multiple revenue streams",
                body: "Creator Fund, brand partnerships, affiliate marketing, selling your own products, LIVE gifts, and more. Top creators earn $50k–$500k a month solely from TikTok.",
              },
            ].map(({ Icon, color, title, body }) => (
              <div
                key={title}
                className="bg-white/5 p-8 rounded-3xl border border-white/5 card-hover"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    color === "tk-cyan"
                      ? "bg-tk-cyan/10 text-tk-cyan"
                      : "bg-tk-pink/10 text-tk-pink"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALGORITHM */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-tk-cyan font-semibold tracking-wider uppercase mb-2">
            Algorithm Decoded
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold">
            How the TikTok algorithm really works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8">The 4 Main Ranking Signals</h3>
            <div className="space-y-6">
              {[
                ["Watch Time", "The #1 factor. TikTok measures the percentage of people who watch your video to the end. Higher watch rate = higher reach."],
                ["Engagement Rate", "Likes, comments, shares, and saves. Shares hold the HIGHEST weight — a shared video gets a 5x to 10x algorithm boost."],
                ["Relevance Signals", "Hashtags, sounds, captions, and on-screen text help TikTok categorize your content and show it to the right audience."],
                ["Posting Consistency", "The algorithm rewards creators who publish regularly. 1 to 3 times a day is ideal for maximum growth."],
              ].map(([title, body], i) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-white/5 rounded-full flex items-center justify-center text-tk-cyan font-bold text-xl border border-white/10">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{title}</h4>
                    <p className="text-muted-foreground text-sm">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-8">How Distribution Works</h3>
            <div className="relative border-l-2 border-white/10 ml-4 space-y-8 pb-4">
              {[
                ["1. Small Test Group", "(200–500 views)", "TikTok shows your video to a small group of users. If they watch, like, and share, it moves to the next tier.", "pink"],
                ["2. Expanded Reach", "(1k–10k views)", "Good performance in the first batch triggers wider distribution. This is where most viral videos start gaining traction.", "pink"],
                ["3. Wider Distribution", "(10k–100k views)", "If engagement stays high, TikTok pushes your content to an even larger audience across different regions.", "pink"],
                ["4. Viral Explosion", "(100k–10M+ views)", "Top-performing content hits the For You page of millions. This is where accounts blow up overnight.", "cyan"],
              ].map(([title, range, body, color]) => (
                <div key={title} className="relative pl-8">
                  <div
                    className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ${
                      color === "cyan"
                        ? "bg-tk-cyan shadow-cyan-glow"
                        : "bg-tk-pink shadow-pink-glow"
                    }`}
                  />
                  <h4 className="font-bold text-lg text-foreground">
                    {title}{" "}
                    <span
                      className={`font-normal text-sm ml-2 ${
                        color === "cyan" ? "text-tk-cyan" : "text-tk-pink"
                      }`}
                    >
                      {range}
                    </span>
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIRAL STRATEGIES */}
      <section className="bg-tk-darker py-24 px-4 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-tk-pink font-semibold tracking-wider uppercase mb-2">
              Viral Strategies
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold">
              10 proven strategies to go viral on TikTok
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["1. Hook them in the first second", "You have exactly 1 second to grab attention. Start with a bold claim, a question, or a visual pattern interrupt. Never start with 'Hey guys!' — that's an instant swipe."],
              ["2. Use trending sounds", "TikTok boosts videos using popular audio. Check the Discover page daily and use sounds BEFORE they peak. Early adoption means a bigger algorithmic boost."],
              ["3. Ideal video length", "For maximum reach: 15–30s for entertainment, 45–90s for educational content, and 2–3 mins for storytelling. Match length to content type."],
              ["4. Strategic hashtag use", "Use 3–5 relevant hashtags. Combine 1 broad (#fyp), 2 niche-specific, and 1–2 trending. Quality always beats quantity."],
              ["5. Create pattern interrupts", "Use text overlays, fast cuts, zoom effects, and scene changes every 2–3 seconds. Dynamic editing equals higher attention retention."],
              ["6. Duets and Stitches", "React to viral content in your niche. Duets and stitches leverage existing momentum and expose your content to established audiences instantly."],
              ["7. Post at peak times", "Best times: 7am–9am, 12pm–2pm, and 7pm–11pm in your target time zone. Tuesdays, Thursdays, and Fridays consistently perform best."],
              ["8. The 3-Second Rule", "If someone watches past 3 seconds, the probability of them watching the full video increases by 80%. Front-load the value."],
              ["9. Create series content", "Multi-part series ('Part 1 of 5') encourage follow-for-more behavior. Viewers follow you to see the next part — boosting all your content."],
              ["10. Engage in the first 30 mins", "Reply to all comments in the first 30 minutes after posting. Every reply counts as extra engagement."],
            ].map(([title, body]) => (
              <div key={title} className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h4 className="text-xl font-bold mb-2 text-tk-cyan">{title}</h4>
                <p className="text-muted-foreground text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT PLAN */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-tk-cyan font-semibold tracking-wider uppercase mb-2">
            Content Plan
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold">
            The best types of content that go viral
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              Icon: BookOpen,
              color: "cyan",
              title: "Educational / Tutorials",
              body: "Teach something valuable in under 60 seconds. 'How to...' and 'Did you know...' formats get consistently high save and share rates.",
              items: ["Quick tutorials", "Actionable tips", "Industry secrets", "Myth-busting"],
            },
            {
              Icon: MessageCircle,
              color: "pink",
              title: "Storytelling",
              body: "Personal stories with emotional appeal. Start with 'I can't believe this happened...' or 'Nobody talks about...' to spark curiosity.",
              items: ["Personal journeys", "Behind the scenes", "Before & after reveals", "A day in my life"],
            },
            {
              Icon: Flame,
              color: "cyan",
              title: "Trending Challenges",
              body: "Put your own spin on trending formats. Don't just copy — add your expertise, humor, or specific angle to stand out.",
              items: ["Dance trends", "Audio trends", "Format remixes", "Green screen reactions"],
            },
          ].map(({ Icon, color, title, body, items }) => (
            <div
              key={title}
              className={`bg-card p-8 rounded-3xl border border-white/10 transition-colors ${
                color === "cyan" ? "hover:border-tk-cyan" : "hover:border-tk-pink"
              }`}
            >
              <Icon
                className={`w-10 h-10 mb-6 ${color === "cyan" ? "text-tk-cyan" : "text-tk-pink"}`}
              />
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{body}</p>
              <ul className="space-y-3 text-sm font-medium text-foreground/80">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <Check
                      className={`w-4 h-4 ${color === "cyan" ? "text-tk-cyan" : "text-tk-pink"}`}
                    />{" "}
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* MONETIZATION */}
      <section className="bg-tk-darker py-24 px-4 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-tk-pink font-semibold tracking-wider uppercase mb-2">
              Monetization
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold">How top creators monetize TikTok</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Creator Fund", "$0.02 to $0.04 per 1k views", "Get paid directly by TikTok. Requires 10k followers and 100k views in the last 30 days."],
              ["Brand Sponsorships", "$200 to $20k / post", "Brands pay creators to promote products. Rates vary based on follower count and engagement."],
              ["Affiliate Marketing", "$1k to $50k / month", "Promote products with affiliate links. TikTok Shop integration makes this incredibly easy."],
              ["Selling Digital Products", "$5k to $100k / month", "Courses, ebooks, templates, presets. Use TikTok as free traffic for your online store."],
              ["LIVE Gifts and Coins", "$500 to $10k / stream", "Go LIVE and receive virtual gifts from viewers. Top creators make thousands per session."],
              ["Consulting and Coaching", "$2k to $25k / month", "Position yourself as an expert and sell coaching services. TikTok is the fastest way to build authority."],
            ].map(([title, price, body]) => (
              <div key={title} className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h4 className="text-lg font-bold text-foreground mb-1">{title}</h4>
                <p className="text-tk-cyan font-semibold mb-3">{price}</p>
                <p className="text-muted-foreground text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISTAKES */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-tk-pink font-semibold tracking-wider uppercase mb-2">
            Avoid These
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            7 costly mistakes destroying your growth
          </h2>
        </div>

        <div className="space-y-6">
          {[
            ["Posting without a hook", "Always script your first sentence. It must spark curiosity, shock, or promise value."],
            ["Ignoring analytics", "Check your metrics daily. Double down on content that drives high watch time and shares."],
            ["Being inconsistent", "Post at least once a day. The algorithm rewards consistency above almost anything else."],
            ["Using dead sounds", "Outdated trends hurt you. Only use sounds that are currently trending or timeless originals."],
            ["Over-promoting", "Follow the 80/20 rule: 80% value content, 20% promotional. Build trust before selling."],
            ["Poor video quality", "Good lighting + clean audio = professional feel. You don't need expensive gear — natural light works perfectly."],
            ["Not engaging with comments", "Reply to comments, create video replies, and build community. Engagement breeds more engagement."],
          ].map(([wrong, right]) => (
            <div key={wrong} className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4 mb-3">
                <XCircle className="w-6 h-6 text-tk-pink shrink-0 mt-1" />
                <p className="text-lg font-bold text-foreground">{wrong}</p>
              </div>
              <div className="flex items-start gap-4 pl-10">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">{right}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section className="py-24 px-4 bg-tk-darker border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-tk-pink font-bold tracking-widest uppercase mb-4 inline-block px-4 py-1 bg-tk-pink/10 rounded-full text-sm">
            Limited Access
          </h3>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to <span className="text-gradient-brand">skyrocket</span> your TikTok growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get the complete, step-by-step system that has helped thousands of creators go from 0
            to 100k+ followers in 90 days or less.
          </p>

          <div className="bg-card border border-tk-cyan/30 p-10 md:p-16 rounded-[2rem] shadow-cyan-glow relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-tk-pink to-tk-cyan" />

            <p className="text-xl text-muted-foreground font-semibold uppercase tracking-wider mb-2">
              Only
            </p>
            <div className="text-7xl font-black text-foreground mb-10 tracking-tighter">$47</div>

            <CtaButton size="xl" />

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-400" /> Secure Checkout
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" /> 30-Day Guarantee
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-tk-cyan" /> Instant Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-tk-cyan font-semibold tracking-wider uppercase mb-2">
            Testimonials
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold">What our students are saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "I went from 200 followers to 85k in 60 days using exactly these strategies. My first viral video hit 2.3 million views!",
              name: "Alex R.",
              handle: "@alexcreates",
              initial: "A",
              bg: "bg-tk-cyan text-background",
              handleColor: "text-tk-cyan",
            },
            {
              quote: "I was posting randomly for months with no results. After applying the engagement formula, my next video got 500k views.",
              name: "Maria L.",
              handle: "@marialiving",
              initial: "M",
              bg: "bg-tk-pink text-white",
              handleColor: "text-tk-pink",
            },
            {
              quote: "I'm now making $4,200 a month just from brand partnerships. This system completely changed my approach to content creation.",
              name: "Jordan T.",
              handle: "@jordanfit",
              initial: "J",
              bg: "bg-white text-background",
              handleColor: "text-muted-foreground",
            },
          ].map((t) => (
            <div key={t.name} className="bg-white/5 p-8 rounded-3xl border border-white/5">
              <div className="flex text-yellow-400 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 text-lg italic mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 font-bold text-xl rounded-full flex items-center justify-center ${t.bg}`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className={`text-sm ${t.handleColor}`}>{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
