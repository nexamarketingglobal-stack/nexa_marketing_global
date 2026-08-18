/**
 * Editorial Tech Marketplace: phone-first affiliate discovery, product photography,
 * warm editorial surfaces, and a locale-aware interface without invented product claims.
 */
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, Globe2, Menu, X } from "lucide-react";
import ProductExplorer from "@/components/ProductExplorer";
import { languageOptions, type LanguageCode } from "@/lib/i18n";
import { storeCopy } from "@/lib/store";

const logoUrl = "/manus-storage/nexa-marketing-global-logo_35910d71.png";
const heroImageUrl = "/manus-storage/nexa-phone-hero_9f86612e.jpg";
const accessoriesImageUrl = "/manus-storage/nexa-mobile-accessories_f2ddaae4.jpg";
const lifestyleImageUrl = "/manus-storage/nexa-smartphone-life_7a727294.jpg";

export default function Home() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const requested = new URLSearchParams(window.location.search).get("lang") as LanguageCode | null;
    const saved = window.localStorage.getItem("nexa-language") as LanguageCode | null;
    if (languageOptions.some((option) => option.code === requested)) return requested!;
    return languageOptions.some((option) => option.code === saved) ? saved! : "en";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const languageOption = languageOptions.find((option) => option.code === language) ?? languageOptions[0];
  const content = storeCopy[language];
  const isRtl = languageOption.dir === "rtl";
  const fontFamily = isRtl
    ? "'Noto Sans Arabic', Manrope, sans-serif"
    : language === "ja"
      ? "'Noto Sans JP', Manrope, sans-serif"
      : language === "zh"
        ? "'Noto Sans SC', Manrope, sans-serif"
        : "Manrope, sans-serif";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = languageOption.dir;
    window.localStorage.setItem("nexa-language", language);
  }, [language, languageOption.dir]);

  const changeLanguage = (value: string) => {
    const next = value as LanguageCode;
    setLanguage(next);
    window.history.replaceState({}, "", `/?lang=${next}`);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#0A0A0A] selection:bg-[#C9141B] selection:text-white" style={{ fontFamily }}>
      <header className="sticky top-0 z-50 border-b border-[#DDD9D2] bg-[#F7F5F2]/95 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between gap-5">
          <a href={`/?lang=${language}`} className="flex items-center gap-3" aria-label="Nexa Marketing Global home">
            <img src={logoUrl} alt="Nexa Marketing Global" className="h-11 w-11 rounded-full border border-[#0A0A0A]/15 object-contain" />
            <span className="leading-none"><span className="block text-[15px] font-extrabold tracking-[-0.05em]">NEXA</span><span className="mt-1 block text-[9px] font-bold tracking-[0.18em] text-[#C9141B]">MARKETING GLOBAL</span></span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            <a href="#shop" className="text-[13px] font-bold transition-colors hover:text-[#C9141B]">{content.nav.shop}</a>
            <a href="#phones" className="text-[13px] font-bold transition-colors hover:text-[#C9141B]">{content.nav.phones}</a>
            <a href="#accessories" className="text-[13px] font-bold transition-colors hover:text-[#C9141B]">{content.nav.accessories}</a>
            <a href="#guides" className="text-[13px] font-bold transition-colors hover:text-[#C9141B]">{content.nav.guides}</a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <label className="relative flex h-10 items-center gap-2 border border-[#DDD9D2] bg-white px-3 text-xs font-bold text-[#333]">
              <Globe2 className="h-4 w-4 text-[#C9141B]" aria-hidden="true" /><span className="sr-only">{content.nav.language}</span>
              <select value={language} onChange={(event) => changeLanguage(event.target.value)} aria-label={content.nav.language} className="appearance-none bg-transparent pe-5 outline-none">
                {languageOptions.map((option) => <option key={option.code} value={option.code}>{option.nativeLabel}</option>)}
              </select><span className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-[10px]">⌄</span>
            </label>
            <a href="#guides" className="inline-flex h-10 items-center gap-2 bg-[#0A0A0A] px-4 text-xs font-extrabold text-white transition-colors hover:bg-[#C9141B]">{content.nav.contact}<ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>

          <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="inline-flex h-10 w-10 items-center justify-center border border-[#DDD9D2] bg-white lg:hidden" aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {mobileMenuOpen && <div className="border-t border-[#DDD9D2] bg-[#F7F5F2] px-4 py-5 lg:hidden"><nav className="mx-auto flex max-w-[1280px] flex-col gap-4" aria-label="Mobile navigation">
          {[{ href: "#shop", label: content.nav.shop }, { href: "#phones", label: content.nav.phones }, { href: "#accessories", label: content.nav.accessories }, { href: "#guides", label: content.nav.guides }].map((item) => <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="border-b border-[#DDD9D2] pb-3 text-sm font-extrabold">{item.label}</a>)}
          <label className="mt-1 flex items-center gap-2 text-sm font-bold"><Globe2 className="h-4 w-4 text-[#C9141B]" /><span>{content.nav.language}</span><select value={language} onChange={(event) => changeLanguage(event.target.value)} className="ms-auto bg-transparent text-sm outline-none">{languageOptions.map((option) => <option key={option.code} value={option.code}>{option.nativeLabel}</option>)}</select></label>
        </nav></div>}
      </header>

      <main>
        <section id="shop" className="border-b border-[#DDD9D2] bg-white">
          <div className="container grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.83fr_1.17fr] lg:items-center lg:gap-16 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9141B]"><span className="h-px w-9 bg-[#C9141B]" />{content.hero.eyebrow}</div>
              <h1 className="text-[clamp(3.2rem,6.8vw,6.3rem)] font-extrabold leading-[0.9] tracking-[-0.08em]">{content.hero.title}<br /><span className="text-[#C9141B]">{content.hero.accent}</span></h1>
              <p className="mt-7 max-w-xl text-[17px] font-medium leading-8 text-[#66676B] sm:text-[19px]">{content.hero.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#product-finder" className="inline-flex h-13 items-center justify-center gap-3 bg-[#C9141B] px-6 text-sm font-extrabold text-white transition-colors hover:bg-[#A90E15]">{content.hero.primary}<ArrowDownRight className="h-4 w-4" /></a><a href="#selection" className="inline-flex h-13 items-center justify-center gap-3 border border-[#0A0A0A] px-6 text-sm font-extrabold transition-colors hover:bg-[#0A0A0A] hover:text-white">{content.hero.secondary}</a></div>
              <p className="mt-7 border-s-2 border-[#C9141B] ps-4 text-sm font-semibold leading-6 text-[#66676B]">{content.hero.note}</p>
            </div>
            <div className="relative mx-auto w-full max-w-[760px]">
              <div className="absolute -end-3 -top-3 z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9141B]/30 bg-[#F7F5F2] text-center text-[10px] font-extrabold leading-4 tracking-[0.08em] text-[#C9141B] sm:-end-6 sm:-top-6 sm:h-24 sm:w-24">NEXA<br />PHONE<br />EDIT</div>
              <div className="border border-[#0A0A0A] bg-[#0A0A0A] p-2 shadow-[14px_14px_0_#C9141B] sm:p-3"><img src={heroImageUrl} alt="Modern smartphone with everyday charging accessories" className="aspect-video w-full object-contain" /></div>
              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 border-y border-[#DDD9D2] py-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#66676B]"><span>SMARTPHONE FIRST</span><span>EVERYDAY UTILITY</span><span>CURATED CATEGORIES</span></div>
            </div>
          </div>
        </section>

        <section id="phones" className="container py-16 sm:py-20">
          <div className="grid gap-8 border-b border-[#DDD9D2] pb-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end lg:gap-16">
            <div><p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9141B]">{content.categories.label}</p><h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.8rem)] font-extrabold leading-[1.01] tracking-[-0.06em]">{content.categories.title}</h2></div>
            <p className="max-w-2xl text-[16px] font-medium leading-8 text-[#66676B]">{content.hero.note}</p>
          </div>
          <div className="grid border-s border-t border-[#DDD9D2] sm:grid-cols-2 lg:grid-cols-5">
            {content.categories.items.map((item) => <a key={item.title} href="#accessories" className="group min-h-[235px] border-b border-e border-[#DDD9D2] bg-[#F7F5F2] p-5 transition-colors hover:bg-[#0A0A0A] hover:text-white sm:p-6"><span className="text-sm font-extrabold text-[#C9141B]">{item.number}</span><div className="my-10 h-px bg-[#DDD9D2] group-hover:bg-white/20" /><h3 className="text-[18px] font-extrabold tracking-[-0.04em]">{item.title}</h3><p className="mt-3 text-sm font-medium leading-6 text-[#66676B] group-hover:text-white/65">{item.description}</p><ArrowUpRight className="mt-5 h-4 w-4 text-[#C9141B]" /></a>)}
          </div>
        </section>

        <ProductExplorer language={language} />

        <section id="accessories" className="border-y border-[#DDD9D2] bg-[#0A0A0A] text-white">
          <div className="container grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16">
            <div className="relative"><div className="absolute -start-4 -top-4 h-full w-full border border-[#C9141B]" /><img src={accessoriesImageUrl} alt="Curated set of phone accessories" className="relative aspect-[4/3] w-full border border-white/10 object-contain" /></div>
            <div><p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#F14B51]">{content.essentials.label}</p><h2 className="mt-5 max-w-2xl text-[clamp(2.2rem,4.7vw,4.5rem)] font-extrabold leading-[0.96] tracking-[-0.065em]">{content.essentials.title}</h2><p className="mt-6 max-w-2xl text-[17px] font-medium leading-8 text-white/65">{content.essentials.body}</p></div>
          </div>
          <div className="container pb-16 sm:pb-20"><div className="grid border-s border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">{content.essentials.cards.map((card, index) => <article key={card.title} className="min-h-[245px] border-b border-e border-white/15 p-6 sm:p-7"><p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#F14B51]">0{index + 1} / {card.tag}</p><h3 className="mt-14 text-xl font-extrabold tracking-[-0.04em]">{card.title}</h3><p className="mt-4 text-sm font-medium leading-6 text-white/60">{card.description}</p></article>)}</div></div>
        </section>

        <section id="selection" className="container grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20">
          <div><p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9141B]">{content.approach.label}</p><h2 className="mt-5 max-w-2xl text-[clamp(2.1rem,4.2vw,4rem)] font-extrabold leading-[1] tracking-[-0.06em]">{content.approach.title}</h2><p className="mt-6 max-w-xl text-[17px] font-medium leading-8 text-[#66676B]">{content.approach.body}</p><a href="#guides" className="mt-8 inline-flex h-12 items-center gap-3 border border-[#0A0A0A] px-5 text-sm font-extrabold transition-colors hover:bg-[#0A0A0A] hover:text-white">{content.approach.action}<ArrowUpRight className="h-4 w-4" /></a></div>
          <div className="relative"><img src={lifestyleImageUrl} alt="Practical smartphone setup for work and travel" className="aspect-[3/2] w-full border border-[#DDD9D2] object-contain" /><div className="absolute -bottom-6 -start-6 max-w-[280px] border border-[#0A0A0A] bg-[#F7F5F2] p-5 shadow-[8px_8px_0_#C9141B]"><p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C9141B]">NEXA STANDARD</p><ul className="mt-4 space-y-3">{content.approach.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm font-bold"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9141B] text-white"><Check className="h-3 w-3" /></span>{point}</li>)}</ul></div></div>
        </section>

        <section id="guides" className="border-t border-[#DDD9D2] bg-white"><div className="container grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9141B]">{content.guide.label}</p><h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,4.6vw,4.5rem)] font-extrabold leading-[0.96] tracking-[-0.07em]">{content.guide.title}</h2></div><div className="border-s border-[#DDD9D2] ps-0 lg:ps-10"><p className="max-w-xl text-[17px] font-medium leading-8 text-[#66676B]">{content.guide.body}</p><a href="#shop" className="mt-8 inline-flex h-12 items-center gap-3 bg-[#C9141B] px-5 text-sm font-extrabold text-white transition-colors hover:bg-[#0A0A0A]">{content.guide.action}<ArrowUpRight className="h-4 w-4" /></a></div></div></section>
      </main>

      <footer className="border-t border-[#DDD9D2] bg-[#F7F5F2]"><div className="container grid gap-10 py-12 sm:grid-cols-[1.3fr_repeat(3,0.7fr)]"><div><div className="flex items-center gap-3"><img src={logoUrl} alt="Nexa Marketing Global" className="h-10 w-10 rounded-full border border-[#0A0A0A]/15 object-contain" /><span className="text-sm font-extrabold tracking-[-0.04em]">NEXA MARKETING GLOBAL</span></div><p className="mt-5 max-w-xs text-sm font-semibold leading-6 text-[#66676B]">{content.footer.tagline}</p></div><div><p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C9141B]">{content.footer.shop}</p><a href="#phones" className="mt-4 block text-sm font-bold hover:text-[#C9141B]">{content.nav.phones}</a><a href="#accessories" className="mt-3 block text-sm font-bold hover:text-[#C9141B]">{content.nav.accessories}</a></div><div><p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C9141B]">{content.footer.company}</p><a href="#selection" className="mt-4 block text-sm font-bold hover:text-[#C9141B]">{content.hero.secondary}</a><a href="#guides" className="mt-3 block text-sm font-bold hover:text-[#C9141B]">{content.nav.guides}</a></div><div><p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C9141B]">{content.footer.legal}</p><a href={`/privacy?lang=${language}`} className="mt-4 block text-sm font-bold hover:text-[#C9141B]">{content.footer.privacy}</a><a href={`/terms?lang=${language}`} className="mt-3 block text-sm font-bold hover:text-[#C9141B]">{content.footer.terms}</a><a href={`/cookies?lang=${language}`} className="mt-3 block text-sm font-bold hover:text-[#C9141B]">{content.footer.cookies}</a></div></div><div className="border-t border-[#DDD9D2]"><div className="container flex flex-col gap-2 py-5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#66676B] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Nexa Marketing Global.</span><span>{content.footer.rights}</span></div></div></footer>
    </div>
  );
}
