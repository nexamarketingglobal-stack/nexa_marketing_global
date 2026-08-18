/**
 * Global Editorial Enterprise: quiet ink, crimson signal, editorial spacing,
 * and an RTL-aware international interface built around the Nexa brand seal.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Globe2,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { copy, languageOptions, metaLabels, type LanguageCode } from "@/lib/i18n";

const logoUrl = "/manus-storage/nexa-marketing-global-logo_35910d71.png";
const dashboardUrl = "/manus-storage/dashboard-mockup-dark_d76ea782.png";
const heroTextureUrl = "/manus-storage/hero-background-dark_89eb92d7.png";

export default function Home() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const requested = new URLSearchParams(window.location.search).get("lang") as LanguageCode | null;
    const saved = window.localStorage.getItem("nexa-language") as LanguageCode | null;
    if (languageOptions.some((option) => option.code === requested)) return requested!;
    return languageOptions.some((option) => option.code === saved) ? saved! : "en";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languageOption = languageOptions.find((option) => option.code === language) ?? languageOptions[0];
  const content = copy[language];
  const meta = metaLabels[language];
  const isRtl = languageOption.dir === "rtl";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = languageOption.dir;
    window.localStorage.setItem("nexa-language", language);
  }, [language, languageOption.dir]);

  const changeLanguage = (value: string) => {
    setLanguage(value as LanguageCode);
    setMobileMenuOpen(false);
  };

  const fontFamily = isRtl
    ? "'Noto Sans Arabic', Manrope, sans-serif"
    : language === "ja"
      ? "'Noto Sans JP', Manrope, sans-serif"
      : language === "zh"
        ? "'Noto Sans SC', Manrope, sans-serif"
        : "Manrope, sans-serif";

  return (
    <div
      className="min-h-screen bg-[#F7F5F2] text-[#0A0A0A] selection:bg-[#C9141B] selection:text-white"
      style={{ fontFamily }}
    >
      <header className="sticky top-0 z-50 border-b border-[#DDD9D2] bg-[#F7F5F2]/95 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-3" aria-label="Nexa Marketing Global home">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#0A0A0A]/15 bg-white">
              <img src={logoUrl} alt="Nexa Marketing Global" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block text-[15px] font-extrabold tracking-[-0.05em] text-[#0A0A0A]">NEXA</span>
              <span className="mt-1 block text-[9px] font-bold tracking-[0.18em] text-[#C9141B]">MARKETING GLOBAL</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            <a href="#platform" className="text-[13px] font-bold text-[#333] transition-colors hover:text-[#C9141B]">{content.nav.platform}</a>
            <a href="#workflow" className="text-[13px] font-bold text-[#333] transition-colors hover:text-[#C9141B]">{content.nav.workflow}</a>
            <a href="#insights" className="text-[13px] font-bold text-[#333] transition-colors hover:text-[#C9141B]">{content.nav.insights}</a>
            <a href="#contact" className="text-[13px] font-bold text-[#333] transition-colors hover:text-[#C9141B]">{content.nav.contact}</a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <label className="relative flex h-10 items-center gap-2 border border-[#DDD9D2] bg-white px-3 text-xs font-bold text-[#333]">
              <Globe2 className="h-4 w-4 text-[#C9141B]" aria-hidden="true" />
              <span className="sr-only">{content.nav.language}</span>
              <select
                value={language}
                onChange={(event) => changeLanguage(event.target.value)}
                aria-label={content.nav.language}
                className="appearance-none bg-transparent pe-5 outline-none"
              >
                {languageOptions.map((option) => <option key={option.code} value={option.code}>{option.nativeLabel}</option>)}
              </select>
              <span className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-[10px]">⌄</span>
            </label>
            <a href="#contact" className="inline-flex h-10 items-center gap-2 bg-[#0A0A0A] px-4 text-xs font-extrabold text-white transition-colors hover:bg-[#C9141B]">
              {content.nav.contact}<ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-[#DDD9D2] bg-white lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#DDD9D2] bg-[#F7F5F2] px-4 py-5 lg:hidden">
            <nav className="mx-auto flex max-w-[1280px] flex-col gap-4" aria-label="Mobile navigation">
              {[{ href: "#platform", label: content.nav.platform }, { href: "#workflow", label: content.nav.workflow }, { href: "#insights", label: content.nav.insights }, { href: "#contact", label: content.nav.contact }].map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="border-b border-[#DDD9D2] pb-3 text-sm font-extrabold">{item.label}</a>
              ))}
              <label className="mt-1 flex items-center gap-2 text-sm font-bold">
                <Globe2 className="h-4 w-4 text-[#C9141B]" />
                <span>{content.nav.language}</span>
                <select value={language} onChange={(event) => changeLanguage(event.target.value)} className="ms-auto bg-transparent text-sm outline-none">
                  {languageOptions.map((option) => <option key={option.code} value={option.code}>{option.nativeLabel}</option>)}
                </select>
              </label>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-[#DDD9D2]" id="platform">
          <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: `url('${heroTextureUrl}')`, backgroundPosition: "center", backgroundSize: "cover" }} />
          <div className="container relative py-14 sm:py-20 lg:py-24">
            <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(440px,0.9fr)] lg:gap-16">
              <div className="max-w-3xl">
                <div className="mb-7 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9141B]">
                  <span className="h-px w-9 bg-[#C9141B]" />
                  {content.hero.eyebrow}
                </div>
                <h1 className="max-w-3xl text-[clamp(2.8rem,6.4vw,6.1rem)] font-extrabold leading-[0.93] tracking-[-0.075em] text-[#0A0A0A]">
                  {content.hero.title}<br />
                  <span className="text-[#C9141B]">{content.hero.highlight}</span>
                </h1>
                <p className="mt-8 max-w-xl text-[17px] font-medium leading-8 text-[#5D5D62] sm:text-[19px]">{content.hero.body}</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="#workflow" className="inline-flex h-13 items-center justify-center gap-3 bg-[#C9141B] px-6 text-sm font-extrabold text-white transition-colors hover:bg-[#A90E15]">
                    {content.hero.primary}<ArrowDownRight className="h-4 w-4" />
                  </a>
                  <a href="#insights" className="inline-flex h-13 items-center justify-center gap-3 border border-[#0A0A0A] px-6 text-sm font-extrabold text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white">
                    {content.hero.secondary}
                  </a>
                </div>
                <p className="mt-7 max-w-lg border-s-2 border-[#C9141B] ps-4 text-sm font-semibold leading-6 text-[#5D5D62]">{content.hero.note}</p>
              </div>

              <div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
                <div className="absolute -end-5 -top-5 z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9141B]/30 bg-[#F7F5F2] text-center text-[10px] font-extrabold leading-4 tracking-[0.08em] text-[#C9141B] sm:-end-8 sm:-top-8 sm:h-24 sm:w-24">NEXA<br />GLOBAL<br />SYSTEM</div>
                <div className="border border-[#0A0A0A] bg-[#0A0A0A] p-2 shadow-[16px_16px_0_#C9141B] sm:p-3">
                  <img src={dashboardUrl} alt="Nexa affiliate operations dashboard" className="aspect-[16/10] w-full object-contain" />
                </div>
                <div className="mt-6 grid grid-cols-3 border-y border-[#DDD9D2] bg-[#F7F5F2]">
                  <div className="border-e border-[#DDD9D2] py-4 text-center"><span className="block text-lg font-extrabold tracking-[-0.05em]">4</span><span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#5D5D62]">{content.system.steps.length} {meta.stages}</span></div>
                  <div className="border-e border-[#DDD9D2] py-4 text-center"><span className="block text-lg font-extrabold tracking-[-0.05em]">8</span><span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#5D5D62]">{languageOptions.length} {meta.languages}</span></div>
                  <div className="py-4 text-center"><span className="block text-lg font-extrabold tracking-[-0.05em]">1</span><span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#5D5D62]">{meta.system}</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20" id="workflow">
          <div className="grid gap-10 border-b border-[#DDD9D2] pb-12 lg:grid-cols-[0.64fr_1.36fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9141B]">{content.system.eyebrow}</p>
              <h2 className="mt-5 text-[clamp(2rem,3.8vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">{content.system.title}</h2>
            </div>
            <p className="max-w-2xl self-end text-[17px] font-medium leading-8 text-[#5D5D62]">{content.system.body}</p>
          </div>

          <div className="grid border-s border-t border-[#DDD9D2] sm:grid-cols-2 lg:grid-cols-4">
            {content.system.steps.map((step) => (
              <article key={step.number} className="min-h-[260px] border-b border-e border-[#DDD9D2] bg-[#F7F5F2] p-6 sm:p-7">
                <span className="text-sm font-extrabold tracking-[-0.04em] text-[#C9141B]">{step.number}</span>
                <div className="my-12 h-px w-full bg-[#DDD9D2]" />
                <h3 className="text-xl font-extrabold tracking-[-0.04em]">{step.title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-[#5D5D62]">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#DDD9D2] bg-white" id="insights">
          <div className="container grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9141B]">{content.scope.eyebrow}</p>
              <h2 className="mt-5 text-[clamp(2rem,3.8vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">{content.scope.title}</h2>
              <p className="mt-6 max-w-md text-[17px] font-medium leading-8 text-[#5D5D62]">{content.scope.body}</p>
            </div>
            <div className="grid content-start border-s border-t border-[#DDD9D2] sm:grid-cols-2">
              {content.scope.items.map((item, index) => (
                <div key={item} className="flex min-h-32 items-start gap-4 border-b border-e border-[#DDD9D2] p-6">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9141B] text-white"><Check className="h-3.5 w-3.5" /></span>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C9141B]">0{index + 1}</p>
                    <p className="mt-2 text-base font-extrabold tracking-[-0.035em]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0A0A0A] text-white">
          <div className="container grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#F14B51]">
                <Sparkles className="h-4 w-4" /> {content.signal.label}
              </div>
              <h2 className="max-w-3xl text-[clamp(2.4rem,5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.07em]">{content.signal.title}</h2>
            </div>
            <div className="border-s border-white/20 ps-0 lg:ps-10">
              <p className="max-w-md text-[17px] font-medium leading-8 text-white/70">{content.signal.body}</p>
              <a href="#top" className="mt-8 inline-flex h-12 items-center gap-3 bg-[#C9141B] px-5 text-sm font-extrabold text-white transition-colors hover:bg-white hover:text-[#0A0A0A]">
                {content.signal.button}<ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F7F5F2]">
        <div className="container grid gap-10 py-12 sm:grid-cols-[1.3fr_repeat(3,0.7fr)]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Nexa Marketing Global" className="h-10 w-10 rounded-full border border-[#0A0A0A]/15 object-contain" />
              <span className="text-sm font-extrabold tracking-[-0.04em]">NEXA MARKETING GLOBAL</span>
            </div>
            <p className="mt-5 max-w-xs text-sm font-semibold leading-6 text-[#5D5D62]">{content.footer.tagline}</p>
          </div>
          <div><p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C9141B]">{content.footer.product}</p><p className="mt-4 text-sm font-bold">{content.nav.platform}</p><p className="mt-3 text-sm font-bold">{content.nav.workflow}</p></div>
          <div><p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C9141B]">{content.footer.company}</p><p className="mt-4 text-sm font-bold">{content.nav.insights}</p><p className="mt-3 text-sm font-bold">{content.nav.contact}</p></div>
          <div><p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C9141B]">{content.footer.legal}</p><p className="mt-4 text-sm font-bold">{content.footer.privacy}</p><p className="mt-3 text-sm font-bold">{content.footer.terms}</p><p className="mt-3 text-sm font-bold">{content.footer.cookies}</p></div>
        </div>
        <div className="border-t border-[#DDD9D2]"><div className="container flex flex-col gap-2 py-5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#5D5D62] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Nexa Marketing Global.</span><span>{content.footer.rights}</span></div></div>
      </footer>
    </div>
  );
}
