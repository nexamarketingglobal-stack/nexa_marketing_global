/** Global Editorial Enterprise legal view: quiet, structured, locale-aware, and RTL-safe. */
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Globe2 } from "lucide-react";
import { languageOptions, type LanguageCode } from "@/lib/i18n";
import { legalLocales, type LegalPageKey } from "@/lib/legal";

const logoUrl = "/manus-storage/nexa-marketing-global-logo_35910d71.png";

const documentPaths: Array<{ key: LegalPageKey; path: string }> = [
  { key: "privacy", path: "/privacy" },
  { key: "terms", path: "/terms" },
  { key: "cookies", path: "/cookies" },
];

export default function LegalPage({ page }: { page: LegalPageKey }) {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const requested = new URLSearchParams(window.location.search).get("lang") as LanguageCode | null;
    const saved = window.localStorage.getItem("nexa-language") as LanguageCode | null;
    if (languageOptions.some((option) => option.code === requested)) return requested!;
    return languageOptions.some((option) => option.code === saved) ? saved! : "en";
  });

  const option = languageOptions.find((item) => item.code === language) ?? languageOptions[0];
  const locale = legalLocales[language];
  const legalDocument = locale.documents[page];
  const isRtl = option.dir === "rtl";
  const fontFamily = isRtl
    ? "'Noto Sans Arabic', Manrope, sans-serif"
    : language === "ja"
      ? "'Noto Sans JP', Manrope, sans-serif"
      : language === "zh"
        ? "'Noto Sans SC', Manrope, sans-serif"
        : "Manrope, sans-serif";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = option.dir;
    window.localStorage.setItem("nexa-language", language);
  }, [language, option.dir]);

  const changeLanguage = (value: string) => {
    const next = value as LanguageCode;
    setLanguage(next);
    window.history.replaceState({}, "", `${window.location.pathname}?lang=${next}`);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#0A0A0A]" style={{ fontFamily }}>
      <header className="border-b border-[#DDD9D2] bg-[#F7F5F2]">
        <div className="container flex h-[76px] items-center justify-between gap-4">
          <a href={`/?lang=${language}`} className="flex items-center gap-3" aria-label="Nexa Marketing Global home">
            <img src={logoUrl} alt="Nexa Marketing Global" className="h-11 w-11 rounded-full border border-[#0A0A0A]/15 object-contain" />
            <span><span className="block text-[15px] font-extrabold tracking-[-0.05em]">NEXA</span><span className="block text-[9px] font-bold tracking-[0.18em] text-[#C9141B]">MARKETING GLOBAL</span></span>
          </a>
          <div className="flex items-center gap-3">
            <label className="relative hidden h-10 items-center gap-2 border border-[#DDD9D2] bg-white px-3 text-xs font-bold text-[#333] sm:flex">
              <Globe2 className="h-4 w-4 text-[#C9141B]" /><span className="sr-only">{locale.language}</span>
              <select value={language} onChange={(event) => changeLanguage(event.target.value)} aria-label={locale.language} className="appearance-none bg-transparent pe-4 outline-none">
                {languageOptions.map((item) => <option key={item.code} value={item.code}>{item.nativeLabel}</option>)}
              </select><span className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-[10px]">⌄</span>
            </label>
            <a href={`/?lang=${language}`} className="inline-flex h-10 items-center gap-2 bg-[#0A0A0A] px-4 text-xs font-extrabold text-white transition-colors hover:bg-[#C9141B]">
              <ArrowLeft className="h-3.5 w-3.5" /> {locale.home}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-[#DDD9D2] bg-white">
          <div className="container py-14 sm:py-20">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9141B]">Nexa Marketing Global / {legalDocument.label}</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold leading-[0.94] tracking-[-0.07em]">{legalDocument.title}</h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#5D5D62]">{legalDocument.intro}</p>
            <p className="mt-7 border-s-2 border-[#C9141B] ps-4 text-xs font-bold leading-6 text-[#5D5D62]">{locale.updated}</p>
          </div>
        </section>

        <section className="container grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
          <aside className="h-fit border-y border-[#DDD9D2] lg:sticky lg:top-8">
            {documentPaths.map((item) => {
              const itemDocument = locale.documents[item.key];
              const active = item.key === page;
              return <a key={item.key} href={`${item.path}?lang=${language}`} className={`flex items-center justify-between border-b border-[#DDD9D2] py-4 text-sm font-extrabold transition-colors ${active ? "text-[#C9141B]" : "text-[#0A0A0A] hover:text-[#C9141B]"}`}>
                {itemDocument.label}<ArrowUpRight className="h-4 w-4" />
              </a>;
            })}
          </aside>

          <article className="max-w-3xl">
            <div className="border border-[#C9141B]/25 bg-[#C9141B]/[0.045] p-5 text-sm font-semibold leading-7 text-[#5D5D62]">
              {locale.draftNotice}
            </div>
            <div className="mt-10 space-y-10">
              {legalDocument.sections.map((section, index) => (
                <section key={section.heading} className="border-t border-[#DDD9D2] pt-6">
                  <div className="grid gap-4 sm:grid-cols-[72px_1fr] sm:gap-8">
                    <span className="text-sm font-extrabold text-[#C9141B]">0{index + 1}</span>
                    <div><h2 className="text-2xl font-extrabold tracking-[-0.045em]">{section.heading}</h2><p className="mt-4 text-[16px] font-medium leading-8 text-[#5D5D62]">{section.body}</p></div>
                  </div>
                </section>
              ))}
            </div>
            <div className="mt-12 border-s-2 border-[#0A0A0A] ps-5 text-sm font-bold leading-7 text-[#333]">{legalDocument.notice}</div>
          </article>
        </section>
      </main>

      <footer className="border-t border-[#DDD9D2] bg-[#0A0A0A] text-white"><div className="container flex flex-col gap-2 py-7 text-[11px] font-bold uppercase tracking-[0.1em] text-white/60 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Nexa Marketing Global</span><span>{legalDocument.label}</span></div></footer>
    </div>
  );
}
