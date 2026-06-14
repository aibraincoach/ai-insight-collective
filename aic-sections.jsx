/* Lowdown homepage — sections below the forest */
const { useState: useStateS } = React;

const AIC_INK = "#1d1d1f";
const AIC_SUB = "#6e6e73";
const AIC_LINE = "#e5e5e5";

/* ── SWAP THESE: real Stripe payment links + scheduling link ── */
const STRIPE_LINKS = {
  see: "#pricing",  // TODO: Stripe payment link — See ($99/mo + $1,000 setup)
  know: "#pricing", // TODO: Stripe payment link — Know ($149/mo + $2,000 setup)
  act: "#pricing",  // TODO: Stripe payment link — Act ($249/mo + $3,000 setup)
  intro: "#pricing", // TODO: Stripe payment link — Intro ($50/mo grandfathered)
};
const SCHEDULING_LINK = "#"; // TODO: real scheduling link (Cal.com / Calendly)

function formatMostRecentMonday() {
  const d = new Date();
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function Eyebrow({ children, light }) {
  return <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: light ? "rgba(255,255,255,0.55)" : AIC_SUB, margin: 0 }}>{children}</p>;
}

/* ══════════ PAIN SELECTOR ══════════ */
const PAIN_TABS = [
  {
    tab: "My ad spend isn't paying off",
    headline: "You spent $4,800 on ads last month.",
    subline: "Google drove 19 inquiries. Facebook drove 4. The dashboard shows you exactly where to shift.",
    rx: "Move $2,000 from Facebook to Google. You'll get four times the inquiries for the same spend.",
  },
  {
    tab: "People visit but don't convert",
    headline: "1,140 people hit your pricing page.",
    subline: "11 became clients. Every step of that drop-off is visible, fixable, and tracked.",
    rx: "Your pricing page is your biggest leak. Shorter form, clearer ask, 30% more conversions.",
  },
  {
    tab: "I don't know where customers come from",
    headline: "Referrals drive 34% of your revenue.",
    subline: "Instagram is costing you. Google is working. Now you know where to put next month's budget.",
    rx: "Double down on referrals. Kill the Instagram spend. Reallocate to Google before next quarter.",
  },
];

function PainSelector() {
  const [active, setActive] = useStateS(0);
  const t = PAIN_TABS[active];
  return (
    <section data-screen-label="Pain Selector" style={{ background: "#fff", padding: "96px 24px 88px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow>Pick your problem</Eyebrow>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem,4.6vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: AIC_INK, margin: "16px 0 0" }}>What's keeping you up?</h2>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: AIC_SUB }}>The dashboard is built around the questions owners actually ask.</p>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 36 }}>
          {PAIN_TABS.map((p, i) => (
            <button
              key={p.tab}
              onClick={() => setActive(i)}
              style={{
                borderRadius: 100, padding: "11px 22px", fontSize: 13.5, fontWeight: 500, cursor: "pointer",
                background: i === active ? AIC_INK : "#fff",
                color: i === active ? "#fff" : AIC_INK,
                border: "1px solid " + (i === active ? AIC_INK : AIC_LINE),
                transition: "background 0.25s, color 0.25s, border-color 0.25s",
              }}
            >{p.tab}</button>
          ))}
        </div>

        {/* Active panel */}
        <div key={active} style={{ marginTop: 44, padding: "44px 36px", border: "1px solid " + AIC_LINE, borderRadius: 20, textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.6rem,3.4vw,2.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em", color: AIC_INK, margin: 0 }}>{t.headline}</h3>
          <p style={{ marginTop: 14, fontSize: 15.5, lineHeight: 1.65, color: AIC_SUB, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>{t.subline}</p>
          <p style={{ marginTop: 26, display: "inline-block", background: "#f5f5f7", borderRadius: 12, padding: "16px 24px", fontSize: 15, fontWeight: 500, lineHeight: 1.55, color: AIC_INK, maxWidth: 560 }}>{t.rx}</p>
        </div>

        {/* Nudge */}
        <p style={{ marginTop: 40, fontSize: 14.5, color: AIC_SUB }}>That answer above? That's a sample briefing. You'd get one every Monday without opening a single dashboard.</p>
        <a href="#pricing" style={{ display: "inline-block", textDecoration: "none", marginTop: 18, borderRadius: 100, background: AIC_INK, color: "#fff", fontSize: 14, fontWeight: 600, padding: "13px 28px", cursor: "pointer" }}>Get Lowdown</a>
      </div>
    </section>
  );
}

/* ══════════ THE MONDAY LOWDOWN ══════════ */
const BRIEF_INSIGHTS = [
  "Your LinkedIn is outperforming Google this week — by a lot. Consider posting more case studies.",
  "Two inquiries came from the downtown feature article. It's still circulating. Don't let it die.",
  "Your pricing page lost 41% of visitors before they reached the form. This needs fixing now.",
];

function MondayLowdown() {
  return (
    <section id="briefings" data-screen-label="The Monday Lowdown" style={{ background: "#1d1d1f", padding: "96px 24px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
        {/* Copy */}
        <div>
          <Eyebrow light>Monday · 6:00 AM · Every week</Eyebrow>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.2rem,5vw,3.8rem)", lineHeight: 1.02, letterSpacing: "-0.02em", color: "#fff", margin: "18px 0 0" }}>
            The Monday Lowdown
          </h2>
          <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.6)", maxWidth: 380 }}>Your AI briefing lands every Monday at 6 AM. No charts. No dashboards. Just what to know.</p>
        </div>

        {/* Email mock */}
        <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 40px 100px -20px rgba(0,0,0,0.6)" }}>
          <div style={{ padding: "18px 22px", borderBottom: "1px solid " + AIC_LINE }}>
            <p style={{ fontSize: 12, color: AIC_SUB, margin: 0 }}>From: <span style={{ color: AIC_INK, fontWeight: 500 }}>Lowdown &lt;brief@aiinsight.us&gt;</span></p>
            <p style={{ fontSize: 14.5, fontWeight: 600, color: AIC_INK, margin: "7px 0 0" }}>Your Monday Lowdown — {formatMostRecentMonday()}</p>
          </div>
          <div style={{ padding: "20px 22px" }}>
            <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: AIC_SUB, margin: 0 }}>This week's three things</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 6 }}>
              {BRIEF_INSIGHTS.map((ins, i) => (
                <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: i < 2 ? "1px solid #f2f2f2" : "none" }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#f5f5f7", color: AIC_INK, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#3a3a3c", margin: 0 }}>{ins}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 22px", borderTop: "1px solid " + AIC_LINE, fontSize: 11, color: AIC_SUB }}>
            <span>Lowdown · aiinsight.us</span>
            <span>Every Monday, 6 AM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════ PRICING ══════════
   Tier amounts are the only dollar values that should appear on the homepage. */
const TIERS = [
  {
    name: "See", tagline: "Your numbers, finally in one place.", price: "$99/mo", setup: "$1,000 setup",
    desc: "Connect your POS, website, and ad accounts into one executive dashboard. Stop switching between four tools to understand one business.",
    features: ["Executive dashboard", "3 data connectors", "Monthly summary report", "Priority support — a real human, same day."],
  },
  {
    name: "Know", tagline: "What the numbers mean.", price: "$149/mo", setup: "$2,000 setup", popular: true,
    desc: "Everything in See, plus The Monday Lowdown — three plain-English insights in your inbox every week.",
    features: ["Everything in See", "Unlimited connectors", "The Monday Lowdown", "Opportunity alerts", "Priority support — a real human, same day."],
  },
  {
    name: "Act", tagline: "What to do about it.", price: "$249/mo", setup: "$3,000 setup",
    desc: "Everything in Know, plus prescriptive AI that tells you exactly where to move budget, which campaigns to cut, and what to change this week.",
    features: ["Everything in Know", "Prescriptive AI recommendations", "Per-location dashboards", "Executive AI chatbot", "Priority support — a real human, same day."],
  },
];

function PricingSection() {
  return (
    <section id="pricing" data-screen-label="Pricing" style={{ background: "#fff", padding: "96px 24px 80px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow>No contracts. No per-seat fees.</Eyebrow>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.2rem,5vw,3.8rem)", lineHeight: 1.02, letterSpacing: "-0.02em", color: AIC_INK, margin: "16px 0 0" }}>
          Setup once.<br />Know everything.
        </h2>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: AIC_SUB }}>A setup fee, then a flat monthly. That's it. No surprises.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 52, textAlign: "left" }}>
          {TIERS.map((t) => (
            <div key={t.name} className="card-anim" style={{ position: "relative", border: t.popular ? "2px solid " + AIC_INK : "1px solid " + AIC_LINE, borderRadius: 20, padding: "30px 28px", display: "flex", flexDirection: "column", background: "#fff" }}>
              {t.popular && (
                <span style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: AIC_INK, color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", borderRadius: 100, padding: "5px 14px", whiteSpace: "nowrap" }}>Most popular</span>
              )}
              <p style={{ fontSize: 17, fontWeight: 700, color: AIC_INK, margin: 0 }}>{t.name}</p>
              <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 16, color: AIC_SUB, margin: "4px 0 0" }}>{t.tagline}</p>
              <p style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em", color: AIC_INK, margin: "20px 0 0", lineHeight: 1 }}>{t.price}</p>
              <p style={{ fontSize: 13, color: AIC_SUB, margin: "6px 0 0" }}>{t.setup}</p>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: AIC_SUB, margin: "18px 0 0" }}>{t.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 26px", display: "flex", flexDirection: "column", gap: 10 }}>
                {t.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13.5, color: "#3a3a3c" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={AIC_INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true"><path d="M5 13 L9 17 L19 7"></path></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={STRIPE_LINKS[t.name.toLowerCase()]} style={{ display: "block", textAlign: "center", textDecoration: "none", marginTop: "auto", borderRadius: 100, padding: "12px 0", fontSize: 13.5, fontWeight: 600, cursor: "pointer", width: "100%", background: t.popular ? AIC_INK : "#fff", color: t.popular ? "#fff" : AIC_INK, border: "1px solid " + (t.popular ? AIC_INK : "#c7c7cc") }}>Get started</a>
            </div>
          ))}
        </div>

        {/* Intro grandfather offer */}
        <div style={{ marginTop: 44, padding: "28px 32px", border: "1px dashed " + AIC_LINE, borderRadius: 20, maxWidth: 720, marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, color: AIC_INK, margin: 0 }}>Intro — $50/mo, locked for life</p>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: AIC_SUB, margin: "6px 0 0", maxWidth: 420 }}>Everything in Know, at $50/mo forever. For the first 15 businesses only. After that, standard pricing applies.</p>
            </div>
            <a href={STRIPE_LINKS.intro} style={{ display: "inline-block", textAlign: "center", textDecoration: "none", borderRadius: 100, padding: "11px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer", background: AIC_INK, color: "#fff", whiteSpace: "nowrap" }}>Claim Intro →</a>
          </div>
        </div>

        <p style={{ marginTop: 36, fontSize: 13.5, color: AIC_SUB }}>Every plan includes the website rebuild. Wired into your site within 24 hours. Cancel anytime.</p>
      </div>
    </section>
  );
}

/* ══════════ CTA ══════════ */
function CTASection() {
  return (
    <section data-screen-label="CTA" style={{ background: "#f5f5f7", padding: "110px 24px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.2rem,5.4vw,4rem)", lineHeight: 1.06, letterSpacing: "-0.02em", color: AIC_INK, margin: 0 }}>
          You're spending money on ads.<br />
          You don't know what's working.<br />
          <em style={{ fontStyle: "italic", color: "#86868b" }}>We fix that.</em>
        </h2>
        <p style={{ marginTop: 22, fontSize: 16, lineHeight: 1.6, color: AIC_SUB, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>Wired into your site within 24 hours. Your first Monday Lowdown lands the morning after you go live.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <a href="#pricing" style={{ display: "inline-block", textDecoration: "none", borderRadius: 100, background: AIC_INK, color: "#fff", fontSize: 14.5, fontWeight: 600, padding: "14px 30px", cursor: "pointer" }}>Book a demo</a>
          <a href="#pricing" style={{ display: "inline-block", textDecoration: "none", borderRadius: 100, background: "transparent", color: AIC_INK, fontSize: 14.5, fontWeight: 500, padding: "13px 26px", border: "1px solid #c7c7cc", cursor: "pointer" }}>See pricing</a>
        </div>
        <p style={{ marginTop: 36, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", color: "#86868b" }}>NO ANNUAL CONTRACTS · CANCEL ANYTIME · PRIORITY SUPPORT</p>
      </div>
    </section>
  );
}

/* ══════════ FOOTER ══════════ */
const FOOT_COLS = [
  { h: "Product", links: ["Dashboard", "The Monday Lowdown", "Pricing"] },
  { h: "Company", links: ["About", "Contact"] },
  { h: "Legal", links: ["Privacy", "Terms", "Security"] },
];

function LowdownFooter() {
  return (
    <footer data-screen-label="Footer" style={{ background: "#1d1d1f", padding: "64px 24px 36px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "space-between" }}>
          <div style={{ maxWidth: 300 }}>
            <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em", color: "#fff", margin: 0 }}>Lowdown</p>
            <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.55)" }}>Business intelligence for owners who'd rather decide than dig through spreadsheets.</p>
          </div>
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            {FOOT_COLS.map((c) => (
              <div key={c.h}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0 }}>{c.h}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 14 }}>
                  {c.links.map((l) => (
                    <a key={l} href="#" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 48, paddingTop: 22 }}>
          <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.4)", margin: 0 }}>© 2026 AI Insight Collective, Inc. · A Delaware company. · Lowdown is a product of AI Insight Collective, Inc.</p>
          <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.65)", margin: 0 }}>aiinsight.us</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { PainSelector, MondayLowdown, PricingSection, CTASection, LowdownFooter, STRIPE_LINKS, SCHEDULING_LINK });
