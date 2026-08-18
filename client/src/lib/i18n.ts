// Global Editorial Enterprise — localized copy for Nexa's public landing page.

export const languageOptions = [
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", dir: "rtl" },
  { code: "es", label: "Spanish", nativeLabel: "Español", dir: "ltr" },
  { code: "fr", label: "French", nativeLabel: "Français", dir: "ltr" },
  { code: "de", label: "German", nativeLabel: "Deutsch", dir: "ltr" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português", dir: "ltr" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", dir: "ltr" },
  { code: "zh", label: "Chinese", nativeLabel: "简体中文", dir: "ltr" },
] as const;

export type LanguageCode = (typeof languageOptions)[number]["code"];

type Copy = {
  nav: { platform: string; workflow: string; insights: string; contact: string; language: string };
  hero: { eyebrow: string; title: string; highlight: string; body: string; primary: string; secondary: string; note: string };
  metrics: Array<{ value: string; label: string }>;
  system: { eyebrow: string; title: string; body: string; steps: Array<{ number: string; title: string; body: string }> };
  scope: { eyebrow: string; title: string; body: string; items: string[] };
  signal: { label: string; title: string; body: string; button: string };
  footer: { tagline: string; product: string; company: string; legal: string; privacy: string; terms: string; cookies: string; rights: string };
};

export const copy: Record<LanguageCode, Copy> = {
  en: {
    nav: { platform: "Platform", workflow: "Workflow", insights: "Insights", contact: "Contact", language: "Language" },
    hero: {
      eyebrow: "Affiliate growth infrastructure",
      title: "Run affiliate marketing with",
      highlight: "operational clarity.",
      body: "Nexa brings content planning, publishing, competitor signals, and performance review into one disciplined growth system.",
      primary: "Explore the platform",
      secondary: "View the workflow",
      note: "Built for global operators, from first post to repeatable performance.",
    },
    metrics: [{ value: "05", label: "Connected channels" }, { value: "24/7", label: "Workflow visibility" }, { value: "01", label: "Operating system" }],
    system: {
      eyebrow: "The operating system",
      title: "A measured path from content to commercial signal.",
      body: "Every stage is designed to turn scattered publishing activity into a controlled, repeatable operating rhythm.",
      steps: [
        { number: "01", title: "Set the direction", body: "Define the audience, offer category, language, and channel priority before production starts." },
        { number: "02", title: "Create with context", body: "Build platform-ready posts, visuals, and video concepts from a single editorial brief." },
        { number: "03", title: "Publish with cadence", body: "Coordinate approved content around a sustainable schedule across your selected channels." },
        { number: "04", title: "Read the signal", body: "Review competitor patterns, content response, and commercial opportunities before the next cycle." },
      ],
    },
    scope: {
      eyebrow: "Designed for the work",
      title: "The core tools, without the operational noise.",
      body: "A structured surface for decisions that matter: what to publish, where to distribute it, and what to improve next.",
      items: ["Content operations", "Multi-channel publishing", "Competitor intelligence", "Product opportunity review", "Search visibility", "Performance reporting"],
    },
    signal: { label: "Ready when you are", title: "Build a repeatable affiliate engine.", body: "Start with a clear operating model, then connect the tools and channels that support your market.", button: "Start the conversation" },
    footer: { tagline: "Affiliate growth infrastructure for global operators.", product: "Platform", company: "Company", legal: "Legal", privacy: "Privacy", terms: "Terms", cookies: "Cookies", rights: "All rights reserved." },
  },
  ar: {
    nav: { platform: "المنصة", workflow: "منهج العمل", insights: "الرؤى", contact: "تواصل", language: "اللغة" },
    hero: {
      eyebrow: "بنية نمو للتسويق بالعمولة",
      title: "أدر التسويق بالعمولة",
      highlight: "بوضوح تشغيلي.",
      body: "تجمع Nexa تخطيط المحتوى والنشر وإشارات المنافسين ومراجعة الأداء داخل نظام نمو واحد ومنضبط.",
      primary: "استكشف المنصة",
      secondary: "شاهد منهج العمل",
      note: "مصمم للمشغلين العالميين؛ من أول منشور إلى أداء قابل للتكرار.",
    },
    metrics: [{ value: "05", label: "قنوات متصلة" }, { value: "24/7", label: "رؤية لسير العمل" }, { value: "01", label: "نظام تشغيل واحد" }],
    system: {
      eyebrow: "نظام التشغيل",
      title: "مسار محسوب من المحتوى إلى الإشارة التجارية.",
      body: "تُصمَّم كل مرحلة لتحويل النشر المتقطع إلى إيقاع تشغيلي منضبط وقابل للتكرار.",
      steps: [
        { number: "01", title: "حدد الاتجاه", body: "حدد الجمهور وفئة العرض واللغة وأولوية القناة قبل بدء الإنتاج." },
        { number: "02", title: "أنشئ بسياق", body: "ابنِ منشورات ومرئيات وأفكار فيديو جاهزة للمنصات من موجز تحريري واحد." },
        { number: "03", title: "انشر بإيقاع", body: "نسّق المحتوى المعتمد وفق جدول مستدام عبر قنواتك المختارة." },
        { number: "04", title: "اقرأ الإشارة", body: "راجع أنماط المنافسين واستجابة المحتوى والفرص التجارية قبل الدورة التالية." },
      ],
    },
    scope: {
      eyebrow: "مصمم للعمل الفعلي",
      title: "الأدوات الأساسية، بلا ضوضاء تشغيلية.",
      body: "مساحة منظمة للقرارات المهمة: ماذا تنشر، وأين توزعه، وما الذي تحسّنه تالياً.",
      items: ["عمليات المحتوى", "النشر متعدد القنوات", "ذكاء المنافسين", "مراجعة فرص المنتجات", "الظهور في البحث", "تقارير الأداء"],
    },
    signal: { label: "جاهز عندما تكون جاهزاً", title: "ابنِ محرك تسويق بالعمولة قابل للتكرار.", body: "ابدأ بنموذج تشغيلي واضح، ثم صِل الأدوات والقنوات التي تدعم سوقك.", button: "ابدأ المحادثة" },
    footer: { tagline: "بنية نمو للتسويق بالعمولة للمشغلين العالميين.", product: "المنصة", company: "الشركة", legal: "قانوني", privacy: "الخصوصية", terms: "الشروط", cookies: "ملفات الارتباط", rights: "جميع الحقوق محفوظة." },
  },
  es: {
    nav: { platform: "Plataforma", workflow: "Flujo", insights: "Información", contact: "Contacto", language: "Idioma" },
    hero: { eyebrow: "Infraestructura para afiliados", title: "Gestiona el marketing de afiliados con", highlight: "claridad operativa.", body: "Nexa reúne planificación de contenido, publicación, señales competitivas y revisión de rendimiento en un sistema de crecimiento disciplinado.", primary: "Explorar la plataforma", secondary: "Ver el flujo", note: "Creado para operadores globales, desde la primera publicación hasta el rendimiento repetible." },
    metrics: [{ value: "05", label: "Canales conectados" }, { value: "24/7", label: "Visibilidad del flujo" }, { value: "01", label: "Sistema operativo" }],
    system: { eyebrow: "El sistema operativo", title: "Un camino medido del contenido a la señal comercial.", body: "Cada fase convierte una publicación dispersa en un ritmo operativo controlado y repetible.", steps: [{ number: "01", title: "Define la dirección", body: "Establece audiencia, categoría, idioma y prioridad de canal." }, { number: "02", title: "Crea con contexto", body: "Desarrolla contenido listo para cada plataforma desde un único brief." }, { number: "03", title: "Publica con ritmo", body: "Coordina contenido aprobado en un calendario sostenible." }, { number: "04", title: "Lee la señal", body: "Revisa respuesta, competencia y oportunidades antes del siguiente ciclo." }] },
    scope: { eyebrow: "Diseñado para el trabajo", title: "Herramientas esenciales, sin ruido operativo.", body: "Un espacio estructurado para decidir qué publicar, dónde distribuirlo y qué mejorar.", items: ["Operaciones de contenido", "Publicación multicanal", "Inteligencia competitiva", "Revisión de productos", "Visibilidad en búsqueda", "Reportes de rendimiento"] },
    signal: { label: "Cuando estés listo", title: "Construye un motor de afiliados repetible.", body: "Empieza con un modelo operativo claro y conecta las herramientas adecuadas.", button: "Iniciar conversación" },
    footer: { tagline: "Infraestructura de crecimiento para afiliados globales.", product: "Plataforma", company: "Empresa", legal: "Legal", privacy: "Privacidad", terms: "Términos", cookies: "Cookies", rights: "Todos los derechos reservados." },
  },
  fr: {
    nav: { platform: "Plateforme", workflow: "Processus", insights: "Analyses", contact: "Contact", language: "Langue" },
    hero: { eyebrow: "Infrastructure de croissance affiliée", title: "Pilotez l'affiliation avec", highlight: "une clarté opérationnelle.", body: "Nexa réunit planification de contenu, publication, signaux concurrentiels et analyse des performances dans un système de croissance structuré.", primary: "Découvrir la plateforme", secondary: "Voir le processus", note: "Conçu pour les opérateurs internationaux, du premier post à une performance répétable." },
    metrics: [{ value: "05", label: "Canaux connectés" }, { value: "24/7", label: "Visibilité du flux" }, { value: "01", label: "Système opérationnel" }],
    system: { eyebrow: "Le système opérationnel", title: "Un chemin mesuré du contenu au signal commercial.", body: "Chaque étape transforme une publication dispersée en rythme maîtrisé et répétable.", steps: [{ number: "01", title: "Définir la direction", body: "Définissez audience, catégorie, langue et priorité de canal." }, { number: "02", title: "Créer avec contexte", body: "Créez du contenu prêt à diffuser depuis un brief éditorial unique." }, { number: "03", title: "Publier avec cadence", body: "Coordonnez le contenu approuvé dans un calendrier durable." }, { number: "04", title: "Lire le signal", body: "Analysez concurrence, réponse et opportunités avant le cycle suivant." }] },
    scope: { eyebrow: "Conçu pour l'action", title: "Les outils essentiels, sans bruit opérationnel.", body: "Un espace structuré pour décider quoi publier, où le diffuser et quoi améliorer.", items: ["Opérations de contenu", "Publication multicanale", "Veille concurrentielle", "Analyse produits", "Visibilité recherche", "Rapports de performance"] },
    signal: { label: "Quand vous êtes prêt", title: "Construisez un moteur d'affiliation répétable.", body: "Partez d'un modèle opérationnel clair et connectez les bons outils.", button: "Démarrer la conversation" },
    footer: { tagline: "Infrastructure d'affiliation pour opérateurs internationaux.", product: "Plateforme", company: "Entreprise", legal: "Légal", privacy: "Confidentialité", terms: "Conditions", cookies: "Cookies", rights: "Tous droits réservés." },
  },
  de: {
    nav: { platform: "Plattform", workflow: "Ablauf", insights: "Einblicke", contact: "Kontakt", language: "Sprache" },
    hero: { eyebrow: "Affiliate-Wachstumsinfrastruktur", title: "Steuern Sie Affiliate-Marketing mit", highlight: "operativer Klarheit.", body: "Nexa vereint Content-Planung, Veröffentlichung, Wettbewerbsdaten und Performance-Review in einem strukturierten Wachstumssystem.", primary: "Plattform entdecken", secondary: "Ablauf ansehen", note: "Für globale Teams – vom ersten Beitrag bis zu wiederholbarer Leistung." },
    metrics: [{ value: "05", label: "Verbundene Kanäle" }, { value: "24/7", label: "Workflow-Transparenz" }, { value: "01", label: "Betriebssystem" }],
    system: { eyebrow: "Das Betriebssystem", title: "Ein messbarer Weg von Content zu kommerziellen Signalen.", body: "Jede Phase verwandelt verstreute Veröffentlichungen in einen kontrollierten Rhythmus.", steps: [{ number: "01", title: "Richtung setzen", body: "Zielgruppe, Kategorie, Sprache und Kanalpriorität festlegen." }, { number: "02", title: "Mit Kontext erstellen", body: "Plattformfertige Inhalte aus einem redaktionellen Brief entwickeln." }, { number: "03", title: "Mit Takt veröffentlichen", body: "Freigegebene Inhalte in einem nachhaltigen Kalender koordinieren." }, { number: "04", title: "Signale lesen", body: "Wettbewerb, Resonanz und Chancen vor dem nächsten Zyklus prüfen." }] },
    scope: { eyebrow: "Für die Praxis entwickelt", title: "Kernwerkzeuge ohne operatives Rauschen.", body: "Ein strukturierter Raum für die wichtigen Entscheidungen.", items: ["Content-Operationen", "Multichannel-Publishing", "Wettbewerbsanalyse", "Produktchancen", "Suchsichtbarkeit", "Performance-Reporting"] },
    signal: { label: "Wenn Sie bereit sind", title: "Bauen Sie eine wiederholbare Affiliate-Engine.", body: "Starten Sie mit einem klaren Betriebsmodell und verbinden Sie die passenden Tools.", button: "Gespräch starten" },
    footer: { tagline: "Affiliate-Wachstumsinfrastruktur für globale Teams.", product: "Plattform", company: "Unternehmen", legal: "Rechtliches", privacy: "Datenschutz", terms: "Bedingungen", cookies: "Cookies", rights: "Alle Rechte vorbehalten." },
  },
  pt: {
    nav: { platform: "Plataforma", workflow: "Fluxo", insights: "Insights", contact: "Contato", language: "Idioma" },
    hero: { eyebrow: "Infraestrutura de crescimento afiliado", title: "Gerencie o marketing de afiliados com", highlight: "clareza operacional.", body: "A Nexa reúne planejamento de conteúdo, publicação, sinais competitivos e revisão de desempenho em um sistema de crescimento disciplinado.", primary: "Explorar a plataforma", secondary: "Ver o fluxo", note: "Feito para operadores globais, do primeiro post ao desempenho repetível." },
    metrics: [{ value: "05", label: "Canais conectados" }, { value: "24/7", label: "Visibilidade do fluxo" }, { value: "01", label: "Sistema operacional" }],
    system: { eyebrow: "O sistema operacional", title: "Um caminho medido do conteúdo ao sinal comercial.", body: "Cada etapa transforma publicações dispersas em um ritmo controlado e repetível.", steps: [{ number: "01", title: "Defina a direção", body: "Defina público, categoria, idioma e prioridade de canal." }, { number: "02", title: "Crie com contexto", body: "Desenvolva conteúdo pronto para a plataforma a partir de um brief." }, { number: "03", title: "Publique com ritmo", body: "Coordene conteúdo aprovado em um calendário sustentável." }, { number: "04", title: "Leia o sinal", body: "Revise concorrência, resposta e oportunidades antes do próximo ciclo." }] },
    scope: { eyebrow: "Feito para o trabalho", title: "Ferramentas essenciais, sem ruído operacional.", body: "Um espaço estruturado para decidir o que publicar, onde distribuir e o que melhorar.", items: ["Operações de conteúdo", "Publicação multicanal", "Inteligência competitiva", "Revisão de produtos", "Visibilidade de busca", "Relatórios de desempenho"] },
    signal: { label: "Quando estiver pronto", title: "Construa um motor de afiliados repetível.", body: "Comece com um modelo operacional claro e conecte as ferramentas certas.", button: "Iniciar conversa" },
    footer: { tagline: "Infraestrutura de crescimento para afiliados globais.", product: "Plataforma", company: "Empresa", legal: "Legal", privacy: "Privacidade", terms: "Termos", cookies: "Cookies", rights: "Todos os direitos reservados." },
  },
  ja: {
    nav: { platform: "プラットフォーム", workflow: "ワークフロー", insights: "インサイト", contact: "お問い合わせ", language: "言語" },
    hero: { eyebrow: "アフィリエイト成長インフラ", title: "アフィリエイトマーケティングを", highlight: "明確に運用する。", body: "Nexaは、コンテンツ計画、配信、競合シグナル、パフォーマンスレビューを一つの成長システムに統合します。", primary: "プラットフォームを見る", secondary: "ワークフローを見る", note: "最初の投稿から再現可能な成果まで、グローバルな運用者のために設計されています。" },
    metrics: [{ value: "05", label: "接続チャネル" }, { value: "24/7", label: "ワークフロー可視性" }, { value: "01", label: "運用システム" }],
    system: { eyebrow: "運用システム", title: "コンテンツから商業シグナルまでの測定可能な道筋。", body: "各段階で分散した投稿を、管理可能で再現性のある運用リズムへ変換します。", steps: [{ number: "01", title: "方向性を定める", body: "対象、カテゴリー、言語、チャネル優先度を決めます。" }, { number: "02", title: "文脈を持って作る", body: "一つの編集ブリーフから各プラットフォーム向けのコンテンツを作成します。" }, { number: "03", title: "リズムよく公開する", body: "承認済みコンテンツを持続可能な計画で調整します。" }, { number: "04", title: "シグナルを読む", body: "次のサイクル前に競合、反応、機会を確認します。" }] },
    scope: { eyebrow: "実務のための設計", title: "運用ノイズのない、必要なツール。", body: "何を公開し、どこで配信し、何を改善するかを判断する構造化された場所です。", items: ["コンテンツ運用", "マルチチャネル配信", "競合インテリジェンス", "商品機会レビュー", "検索可視性", "パフォーマンスレポート"] },
    signal: { label: "準備ができたら", title: "再現可能なアフィリエイトエンジンを構築。", body: "明確な運用モデルから始め、適切なツールを接続します。", button: "相談を始める" },
    footer: { tagline: "グローバル運用者のためのアフィリエイト成長インフラ。", product: "プラットフォーム", company: "会社", legal: "法務", privacy: "プライバシー", terms: "利用規約", cookies: "Cookie", rights: "All rights reserved." },
  },
  zh: {
    nav: { platform: "平台", workflow: "工作流", insights: "洞察", contact: "联系我们", language: "语言" },
    hero: { eyebrow: "联盟增长基础设施", title: "以", highlight: "运营清晰度管理联盟营销。", body: "Nexa 将内容规划、发布、竞品信号和效果复盘整合到一个严谨的增长系统中。", primary: "探索平台", secondary: "查看工作流", note: "为全球运营者打造，从第一篇内容到可重复的业绩。" },
    metrics: [{ value: "05", label: "已连接渠道" }, { value: "24/7", label: "工作流可见性" }, { value: "01", label: "运营系统" }],
    system: { eyebrow: "运营系统", title: "从内容到商业信号的可衡量路径。", body: "每一个阶段都会将零散发布转化为可控、可重复的运营节奏。", steps: [{ number: "01", title: "确定方向", body: "先定义受众、品类、语言和渠道优先级。" }, { number: "02", title: "基于上下文创作", body: "从统一的编辑简报生成适用于各平台的内容。" }, { number: "03", title: "按节奏发布", body: "在可持续的日程中协调已批准内容。" }, { number: "04", title: "读取信号", body: "在下一周期前审阅竞品、反馈和商业机会。" }] },
    scope: { eyebrow: "为实际工作而设计", title: "核心工具，没有运营噪音。", body: "帮助你决定发布什么、在哪里分发以及下一步改进什么。", items: ["内容运营", "多渠道发布", "竞品情报", "产品机会评审", "搜索可见性", "效果报告"] },
    signal: { label: "准备就绪时", title: "构建可重复的联盟增长引擎。", body: "从清晰的运营模型开始，再连接适合你的工具与渠道。", button: "开始沟通" },
    footer: { tagline: "面向全球运营者的联盟增长基础设施。", product: "平台", company: "公司", legal: "法律", privacy: "隐私", terms: "条款", cookies: "Cookie", rights: "版权所有。" },
  },
};

export const metaLabels: Record<LanguageCode, { stages: string; languages: string; system: string }> = {
  en: { stages: "stages", languages: "languages", system: "system" },
  ar: { stages: "مراحل", languages: "لغات", system: "نظام" },
  es: { stages: "etapas", languages: "idiomas", system: "sistema" },
  fr: { stages: "étapes", languages: "langues", system: "système" },
  de: { stages: "Phasen", languages: "Sprachen", system: "System" },
  pt: { stages: "etapas", languages: "idiomas", system: "sistema" },
  ja: { stages: "ステージ", languages: "言語", system: "システム" },
  zh: { stages: "阶段", languages: "语言", system: "系统" },
};
