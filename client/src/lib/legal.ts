// Operational legal drafts for the current public site. Review before formal adoption.
import type { LanguageCode } from "@/lib/i18n";

export type LegalPageKey = "privacy" | "terms" | "cookies";

type Section = { heading: string; body: string };
type DocumentCopy = { label: string; title: string; intro: string; sections: Section[]; notice: string };

export type LegalLocale = {
  home: string;
  language: string;
  updated: string;
  draftNotice: string;
  documents: Record<LegalPageKey, DocumentCopy>;
};

export const legalLocales: Record<LanguageCode, LegalLocale> = {
  en: {
    home: "Back to Nexa", language: "Language", updated: "Last updated: 18 August 2026",
    draftNotice: "Operational draft for the current public site. Review with qualified legal counsel before formal adoption or before collecting personal data.",
    documents: {
      privacy: {
        label: "Privacy", title: "Privacy Notice", intro: "This notice explains how Nexa Marketing Global handles information on its current public website.",
        sections: [
          { heading: "Current data handling", body: "The current site does not provide user accounts, checkout, a working contact form, or an active email subscription service. Do not submit personal information through a page feature unless Nexa clearly identifies the collection purpose and destination." },
          { heading: "Preferences and technical services", body: "The site stores your selected display language in your browser's local storage so the interface can remember your preference. Hosting, security, and aggregate analytics services may process technical request data such as device, browser, IP-related logs, and page activity under their own applicable notices." },
          { heading: "Future changes", body: "Before Nexa enables lead capture, affiliate tracking, payments, or customer support tools, this notice must be updated to identify the data collected, purpose, lawful basis where required, retention period, recipients, and available choices." },
        ],
        notice: "Questions about this notice should be directed to Nexa through an officially published contact channel once available.",
      },
      terms: {
        label: "Terms", title: "Terms of Use", intro: "These terms govern access to the Nexa Marketing Global public website and its educational, informational, and promotional content.",
        sections: [
          { heading: "Information, not a guarantee", body: "The site describes affiliate-marketing operations and automation concepts for general information. It does not promise earnings, sales, rankings, availability, or a particular commercial result. You remain responsible for your business decisions and for compliance with platform, advertising, affiliate-network, and local requirements." },
          { heading: "Permitted use", body: "You may browse and share public content for lawful personal or business evaluation. Do not interfere with the site, attempt unauthorized access, copy protected materials as your own, or use the site in a manner that harms Nexa, its services, or other visitors." },
          { heading: "Third-party services", body: "Any future links to merchants, affiliate networks, tools, or social platforms are controlled by those third parties. Their terms, privacy notices, offers, tracking methods, and availability apply independently of Nexa." },
        ],
        notice: "Nexa may revise these terms as the product and site evolve. Continued use after publication of a revised version means you should review the updated terms.",
      },
      cookies: {
        label: "Cookies", title: "Cookie & Local Storage Notice", intro: "This notice explains the limited browser-storage practices used by the current public site.",
        sections: [
          { heading: "Functional preference", body: "Nexa stores your selected interface language in local storage. This functional preference helps the site open in the language you selected and is not used to build an advertising profile." },
          { heading: "Hosting and analytics", body: "The hosting or analytics environment may use strictly necessary technical storage or similar technologies to secure delivery, measure aggregate use, and maintain service reliability. Nexa does not currently operate a marketing-cookie or retargeting program through this public page." },
          { heading: "Your controls", body: "You can remove local storage and cookies through your browser settings. Removing them may reset language preferences and other browser-level choices. If new optional cookies are introduced, Nexa should request consent where required before activating them." },
        ],
        notice: "This notice must be updated before optional advertising, remarketing, affiliate attribution, or customer-data cookies are activated.",
      },
    },
  },
  ar: {
    home: "العودة إلى Nexa", language: "اللغة", updated: "آخر تحديث: 18 أغسطس 2026",
    draftNotice: "مسودة تشغيلية للموقع العام بصورته الحالية. راجعها مع مستشار قانوني مؤهل قبل اعتمادها رسمياً أو قبل بدء جمع بيانات شخصية.",
    documents: {
      privacy: {
        label: "الخصوصية", title: "إشعار الخصوصية", intro: "يوضح هذا الإشعار كيفية تعامل Nexa Marketing Global مع المعلومات على موقعها العام بصورته الحالية.",
        sections: [
          { heading: "معالجة البيانات الحالية", body: "لا يقدم الموقع حالياً حسابات مستخدمين أو دفعاً أو نموذج تواصل يعمل أو خدمة اشتراك بريدية مفعّلة. لا ترسل معلومات شخصية عبر أي ميزة في الصفحة ما لم تحدد Nexa بوضوح غرض الجمع والجهة التي ستتلقى البيانات." },
          { heading: "التفضيلات والخدمات التقنية", body: "يحفظ الموقع لغة العرض المختارة في التخزين المحلي للمتصفح حتى يتذكر تفضيلك. وقد تعالج خدمات الاستضافة والأمان والتحليلات المجمعة بيانات طلبات تقنية، مثل معلومات الجهاز والمتصفح وسجلات مرتبطة بعنوان IP ونشاط الصفحات، وفق إشعاراتها الخاصة المعمول بها." },
          { heading: "التغييرات المستقبلية", body: "قبل تفعيل جمع العملاء المحتملين أو تتبع العمولة أو المدفوعات أو أدوات دعم العملاء، يجب تحديث هذا الإشعار لبيان البيانات المجمعة والغرض والأساس النظامي عند الحاجة ومدة الاحتفاظ والجهات المستلمة والخيارات المتاحة." },
        ],
        notice: "تُوجَّه الاستفسارات بشأن هذا الإشعار إلى Nexa عبر قناة تواصل رسمية منشورة عند توفرها.",
      },
      terms: {
        label: "الشروط", title: "شروط الاستخدام", intro: "تنظم هذه الشروط الوصول إلى موقع Nexa Marketing Global العام ومحتواه التعليمي والمعلوماتي والترويجي.",
        sections: [
          { heading: "معلومات وليست ضماناً", body: "يشرح الموقع عمليات ومفاهيم أتمتة التسويق بالعمولة لأغراض معلوماتية عامة. لا يقدم وعداً بالأرباح أو المبيعات أو الترتيب أو الإتاحة أو نتيجة تجارية محددة. تظل مسؤولاً عن قرارات عملك وعن الالتزام بسياسات المنصات والإعلانات وشبكات العمولة والمتطلبات المحلية." },
          { heading: "الاستخدام المسموح", body: "يجوز لك تصفح المحتوى العام ومشاركته لتقييم شخصي أو تجاري مشروع. لا تتدخل في الموقع أو تحاول الوصول غير المصرح به أو تنسب المواد المحمية لنفسك أو تستخدم الموقع بطريقة تضر Nexa أو خدماتها أو زوارها." },
          { heading: "خدمات الأطراف الثالثة", body: "تخضع أي روابط مستقبلية للتجار أو شبكات العمولة أو الأدوات أو منصات التواصل إلى تحكم هذه الأطراف. تسري شروطهم وإشعارات خصوصيتهم وعروضهم وطرق التتبع لديهم وإتاحتها بشكل مستقل عن Nexa." },
        ],
        notice: "قد تعدّل Nexa هذه الشروط مع تطور المنتج والموقع. يعني استمرار الاستخدام بعد نشر نسخة منقحة أنه ينبغي مراجعة الشروط المحدثة.",
      },
      cookies: {
        label: "ملفات الارتباط", title: "إشعار ملفات الارتباط والتخزين المحلي", intro: "يوضح هذا الإشعار ممارسات تخزين المتصفح المحدودة المستخدمة في الموقع العام بصورته الحالية.",
        sections: [
          { heading: "تفضيل وظيفي", body: "تحفظ Nexa لغة الواجهة المختارة في التخزين المحلي. يساعد ذلك الموقع على الفتح باللغة التي اخترتها ولا يستخدم لبناء ملف إعلاني عنك." },
          { heading: "الاستضافة والتحليلات", body: "قد تستخدم بيئة الاستضافة أو التحليلات تخزيناً تقنياً ضرورياً أو تقنيات مشابهة لتأمين التسليم وقياس الاستخدام المجمع والحفاظ على موثوقية الخدمة. لا تدير Nexa حالياً برنامج ملفات ارتباط تسويقية أو إعادة استهداف من خلال هذه الصفحة العامة." },
          { heading: "خياراتك", body: "يمكنك إزالة التخزين المحلي وملفات الارتباط من إعدادات المتصفح. قد يؤدي ذلك إلى إعادة ضبط تفضيل اللغة وخيارات المتصفح الأخرى. إذا أضيفت ملفات ارتباط اختيارية مستقبلاً، فينبغي أن تطلب Nexa الموافقة عند الحاجة قبل تفعيلها." },
        ],
        notice: "يجب تحديث هذا الإشعار قبل تفعيل ملفات ارتباط اختيارية للإعلان أو إعادة التسويق أو إسناد العمولة أو بيانات العملاء.",
      },
    },
  },
  es: {
    home: "Volver a Nexa", language: "Idioma", updated: "Última actualización: 18 de agosto de 2026",
    draftNotice: "Borrador operativo para el sitio público actual. Revíselo con asesoría legal cualificada antes de adoptarlo formalmente o recopilar datos personales.",
    documents: {
      privacy: { label: "Privacidad", title: "Aviso de privacidad", intro: "Este aviso explica cómo Nexa Marketing Global trata la información en su sitio público actual.", sections: [{ heading: "Tratamiento actual", body: "El sitio actual no ofrece cuentas, pagos, formulario de contacto activo ni suscripción de correo operativa. No envíe información personal mediante una función de la página hasta que Nexa identifique claramente el propósito y destino de la recopilación." }, { heading: "Preferencias y servicios técnicos", body: "El sitio guarda el idioma elegido en el almacenamiento local del navegador. Los servicios de alojamiento, seguridad y analítica agregada pueden tratar datos técnicos de solicitud conforme a sus propios avisos." }, { heading: "Cambios futuros", body: "Antes de activar captación de clientes, seguimiento de afiliados, pagos o soporte, este aviso deberá identificar los datos, el propósito, la retención, los destinatarios y las opciones disponibles." }], notice: "Las preguntas deben dirigirse a Nexa mediante un canal oficial cuando esté disponible." },
      terms: { label: "Términos", title: "Términos de uso", intro: "Estos términos regulan el acceso al sitio público de Nexa Marketing Global y a su contenido informativo.", sections: [{ heading: "Información, no garantía", body: "El sitio describe conceptos de afiliación y automatización con fines informativos. No garantiza ingresos, ventas, posiciones ni resultados comerciales. Usted sigue siendo responsable de sus decisiones y del cumplimiento aplicable." }, { heading: "Uso permitido", body: "Puede consultar y compartir contenido público para evaluación lícita. No interfiera con el sitio, no intente acceso no autorizado ni utilice materiales protegidos como propios." }, { heading: "Servicios de terceros", body: "Los futuros enlaces a comerciantes, redes de afiliados, herramientas o plataformas sociales estarán sujetos a las condiciones y avisos de esos terceros." }], notice: "Nexa puede actualizar estos términos a medida que evolucione el sitio." },
      cookies: { label: "Cookies", title: "Aviso de cookies y almacenamiento local", intro: "Este aviso explica las prácticas limitadas de almacenamiento del navegador utilizadas por el sitio público actual.", sections: [{ heading: "Preferencia funcional", body: "Nexa almacena el idioma de la interfaz en el almacenamiento local para recordar su elección; no se utiliza para crear un perfil publicitario." }, { heading: "Alojamiento y analítica", body: "El entorno de alojamiento o analítica puede usar almacenamiento técnico necesario para una entrega segura, uso agregado y fiabilidad. Nexa no opera actualmente cookies de marketing o retargeting en esta página." }, { heading: "Sus controles", body: "Puede eliminar el almacenamiento local y las cookies desde su navegador. Si se añaden cookies opcionales, Nexa debe solicitar consentimiento cuando sea necesario." }], notice: "Este aviso debe actualizarse antes de activar cookies de publicidad, atribución o datos de clientes." },
    },
  },
  fr: {
    home: "Retour à Nexa", language: "Langue", updated: "Dernière mise à jour : 18 août 2026",
    draftNotice: "Projet opérationnel pour le site public actuel. Faites-le valider par un conseil juridique qualifié avant toute adoption formelle ou collecte de données personnelles.",
    documents: {
      privacy: { label: "Confidentialité", title: "Avis de confidentialité", intro: "Cet avis explique comment Nexa Marketing Global traite les informations sur son site public actuel.", sections: [{ heading: "Traitement actuel", body: "Le site actuel ne propose ni comptes, ni paiement, ni formulaire de contact actif, ni abonnement e-mail opérationnel. N'envoyez pas de données personnelles tant que Nexa n'indique pas clairement la finalité et la destination de la collecte." }, { heading: "Préférences et services techniques", body: "Le site conserve la langue sélectionnée dans le stockage local du navigateur. L'hébergement, la sécurité et l'analytique agrégée peuvent traiter des données techniques selon leurs propres avis." }, { heading: "Évolutions futures", body: "Avant d'activer la collecte de prospects, le suivi d'affiliation, les paiements ou le support, cet avis devra préciser les données, finalités, destinataires, durée de conservation et choix disponibles." }], notice: "Les questions doivent être adressées à Nexa par un canal officiel lorsqu'il sera publié." },
      terms: { label: "Conditions", title: "Conditions d'utilisation", intro: "Ces conditions régissent l'accès au site public de Nexa Marketing Global et à son contenu informatif.", sections: [{ heading: "Information, sans garantie", body: "Le site décrit des concepts d'affiliation et d'automatisation à titre informatif. Il ne garantit aucun revenu, vente, classement ou résultat commercial. Vous restez responsable de vos décisions et de votre conformité." }, { heading: "Utilisation autorisée", body: "Vous pouvez consulter et partager le contenu public pour une évaluation légitime. N'interférez pas avec le site, ne tentez pas d'accès non autorisé et ne vous appropriez pas les contenus protégés." }, { heading: "Services tiers", body: "Les futurs liens vers marchands, réseaux d'affiliation, outils ou plateformes sociales relèveront des conditions et avis de ces tiers." }], notice: "Nexa peut réviser ces conditions à mesure que le site évolue." },
      cookies: { label: "Cookies", title: "Avis cookies et stockage local", intro: "Cet avis explique les pratiques limitées de stockage navigateur utilisées par le site public actuel.", sections: [{ heading: "Préférence fonctionnelle", body: "Nexa enregistre la langue choisie dans le stockage local afin de mémoriser votre préférence. Elle n'est pas utilisée pour créer un profil publicitaire." }, { heading: "Hébergement et analytique", body: "L'environnement d'hébergement ou d'analytique peut utiliser un stockage technique nécessaire à la livraison sécurisée, aux statistiques agrégées et à la fiabilité. Nexa n'exploite pas actuellement de cookies marketing ou de reciblage sur cette page." }, { heading: "Vos contrôles", body: "Vous pouvez supprimer le stockage local et les cookies dans votre navigateur. Si des cookies facultatifs sont ajoutés, Nexa devra demander le consentement lorsque requis." }], notice: "Cet avis doit être mis à jour avant l'activation de cookies publicitaires, d'attribution ou de données clients." },
    },
  },
  de: {
    home: "Zurück zu Nexa", language: "Sprache", updated: "Zuletzt aktualisiert: 18. August 2026",
    draftNotice: "Betrieblicher Entwurf für die aktuelle öffentliche Website. Vor einer formellen Annahme oder der Erhebung personenbezogener Daten durch qualifizierten Rechtsbeistand prüfen lassen.",
    documents: {
      privacy: { label: "Datenschutz", title: "Datenschutzhinweis", intro: "Dieser Hinweis erläutert den Umgang von Nexa Marketing Global mit Informationen auf der aktuellen öffentlichen Website.", sections: [{ heading: "Aktuelle Datenverarbeitung", body: "Die aktuelle Website bietet keine Konten, Zahlungen, aktive Kontaktformulare oder E-Mail-Anmeldung. Übermitteln Sie keine personenbezogenen Daten, bevor Nexa Zweck und Ziel der Erhebung eindeutig nennt." }, { heading: "Präferenzen und technische Dienste", body: "Die Website speichert die gewählte Sprache im lokalen Speicher des Browsers. Hosting-, Sicherheits- und aggregierte Analysedienste können technische Anfragedaten nach ihren eigenen Hinweisen verarbeiten." }, { heading: "Zukünftige Änderungen", body: "Vor Lead-Erfassung, Affiliate-Tracking, Zahlungen oder Support muss dieser Hinweis Daten, Zweck, Empfänger, Aufbewahrung und Auswahlmöglichkeiten nennen." }], notice: "Fragen sind über einen offiziell veröffentlichten Nexa-Kontaktkanal zu richten." },
      terms: { label: "Bedingungen", title: "Nutzungsbedingungen", intro: "Diese Bedingungen regeln den Zugriff auf die öffentliche Nexa Marketing Global Website und ihre Informationsinhalte.", sections: [{ heading: "Information, keine Garantie", body: "Die Website beschreibt Affiliate- und Automatisierungskonzepte zu Informationszwecken. Sie garantiert keine Einnahmen, Verkäufe, Rankings oder geschäftlichen Ergebnisse. Sie bleiben für Entscheidungen und Compliance verantwortlich." }, { heading: "Zulässige Nutzung", body: "Sie dürfen öffentliche Inhalte rechtmäßig ansehen und teilen. Stören Sie die Website nicht, versuchen Sie keinen unbefugten Zugang und verwenden Sie geschützte Materialien nicht als eigene." }, { heading: "Dienste Dritter", body: "Zukünftige Links zu Händlern, Affiliate-Netzwerken, Tools oder sozialen Plattformen unterliegen den Bedingungen und Hinweisen dieser Dritten." }], notice: "Nexa kann diese Bedingungen mit der Entwicklung der Website anpassen." },
      cookies: { label: "Cookies", title: "Hinweis zu Cookies und lokalem Speicher", intro: "Dieser Hinweis erläutert die begrenzten Browser-Speicherpraktiken der aktuellen öffentlichen Website.", sections: [{ heading: "Funktionale Präferenz", body: "Nexa speichert die gewählte Sprache lokal, damit die Website Ihre Präferenz merkt. Dies dient nicht der Erstellung eines Werbeprofils." }, { heading: "Hosting und Analyse", body: "Die Hosting- oder Analyseumgebung kann notwendige technische Speicherung für sichere Auslieferung, aggregierte Nutzung und Zuverlässigkeit verwenden. Nexa betreibt derzeit kein Marketing- oder Retargeting-Cookie-Programm auf dieser Seite." }, { heading: "Ihre Kontrolle", body: "Sie können lokalen Speicher und Cookies über Ihren Browser löschen. Bei optionalen Cookies muss Nexa, soweit erforderlich, vorher eine Einwilligung einholen." }], notice: "Dieser Hinweis muss vor der Aktivierung von Werbe-, Attributions- oder Kundendaten-Cookies aktualisiert werden." },
    },
  },
  pt: {
    home: "Voltar à Nexa", language: "Idioma", updated: "Última atualização: 18 de agosto de 2026",
    draftNotice: "Rascunho operacional para o site público atual. Revise com assessoria jurídica qualificada antes da adoção formal ou da coleta de dados pessoais.",
    documents: {
      privacy: { label: "Privacidade", title: "Aviso de privacidade", intro: "Este aviso explica como a Nexa Marketing Global trata informações em seu site público atual.", sections: [{ heading: "Tratamento atual", body: "O site atual não oferece contas, pagamentos, formulário de contato ativo ou assinatura de e-mail funcional. Não envie dados pessoais até que a Nexa identifique claramente a finalidade e o destino da coleta." }, { heading: "Preferências e serviços técnicos", body: "O site armazena o idioma selecionado no armazenamento local do navegador. Hospedagem, segurança e análise agregada podem tratar dados técnicos conforme seus próprios avisos." }, { heading: "Mudanças futuras", body: "Antes de ativar captação de leads, rastreamento de afiliados, pagamentos ou suporte, este aviso deverá identificar dados, finalidade, destinatários, retenção e escolhas." }], notice: "Perguntas devem ser direcionadas à Nexa por um canal oficial quando disponível." },
      terms: { label: "Termos", title: "Termos de uso", intro: "Estes termos regem o acesso ao site público da Nexa Marketing Global e ao seu conteúdo informativo.", sections: [{ heading: "Informação, não garantia", body: "O site descreve conceitos de afiliação e automação para fins informativos. Não garante receita, vendas, classificações ou resultados comerciais. Você continua responsável por suas decisões e conformidade." }, { heading: "Uso permitido", body: "Você pode consultar e compartilhar conteúdo público para avaliação lícita. Não interfira no site, não tente acesso não autorizado e não use materiais protegidos como se fossem seus." }, { heading: "Serviços de terceiros", body: "Futuros links para comerciantes, redes de afiliados, ferramentas ou plataformas sociais estarão sujeitos aos termos e avisos desses terceiros." }], notice: "A Nexa pode revisar estes termos conforme o site evoluir." },
      cookies: { label: "Cookies", title: "Aviso de cookies e armazenamento local", intro: "Este aviso explica as práticas limitadas de armazenamento do navegador usadas pelo site público atual.", sections: [{ heading: "Preferência funcional", body: "A Nexa armazena o idioma escolhido localmente para lembrar sua preferência e não para criar um perfil de publicidade." }, { heading: "Hospedagem e análise", body: "O ambiente de hospedagem ou análise pode usar armazenamento técnico necessário para entrega segura, uso agregado e confiabilidade. A Nexa não opera hoje cookies de marketing ou retargeting nesta página." }, { heading: "Seus controles", body: "Você pode remover armazenamento local e cookies no navegador. Se cookies opcionais forem adicionados, a Nexa deverá solicitar consentimento quando necessário." }], notice: "Este aviso deve ser atualizado antes de ativar cookies de publicidade, atribuição ou dados de clientes." },
    },
  },
  ja: {
    home: "Nexa に戻る", language: "言語", updated: "最終更新日: 2026年8月18日",
    draftNotice: "現在の公開サイト向けの運用ドラフトです。正式な採用や個人データ収集の前に、資格のある法律専門家による確認を受けてください。",
    documents: {
      privacy: { label: "プライバシー", title: "プライバシーに関するお知らせ", intro: "このお知らせは、現在の Nexa Marketing Global 公開サイトにおける情報の取扱いを説明します。", sections: [{ heading: "現在の取扱い", body: "現在のサイトには、ユーザーアカウント、決済、稼働中の問い合わせフォーム、メール購読サービスはありません。Nexa が収集目的と送信先を明確に示すまで、ページ機能を通じて個人情報を送信しないでください。" }, { heading: "設定と技術サービス", body: "サイトは選択した表示言語をブラウザのローカルストレージに保存します。ホスティング、セキュリティ、集計分析サービスは、それぞれの通知に従って技術的なリクエストデータを処理する場合があります。" }, { heading: "将来の変更", body: "リード取得、アフィリエイト追跡、決済、サポートを有効にする前に、このお知らせはデータ、目的、保持、受領者、選択肢を明記する必要があります。" }], notice: "質問は、公式の連絡手段が公開された後に Nexa へお送りください。" },
      terms: { label: "利用規約", title: "利用規約", intro: "これらの規約は Nexa Marketing Global の公開サイトおよび情報コンテンツへのアクセスを定めます。", sections: [{ heading: "情報であり保証ではありません", body: "サイトはアフィリエイトと自動化の概念を情報提供目的で説明します。収益、売上、順位、商業的結果を保証しません。意思決定と適用規則への準拠は利用者の責任です。" }, { heading: "許可される利用", body: "適法な評価のために公開コンテンツを閲覧・共有できます。サイトを妨害したり、不正アクセスを試みたり、保護された資料を自分のものとして使用したりしてはいけません。" }, { heading: "第三者サービス", body: "将来の加盟店、アフィリエイトネットワーク、ツール、SNSへのリンクは、それら第三者の規約と通知に従います。" }], notice: "Nexa はサイトの進化に合わせて規約を改定することがあります。" },
      cookies: { label: "Cookie", title: "Cookie とローカルストレージに関するお知らせ", intro: "このお知らせは、現在の公開サイトで使用する限定的なブラウザ保存の方法を説明します。", sections: [{ heading: "機能上の設定", body: "Nexa は選択言語をローカルストレージに保存し、設定を記憶します。広告プロファイルの作成には使用しません。" }, { heading: "ホスティングと分析", body: "ホスティングまたは分析環境は、安全な配信、集計利用、信頼性のために必要な技術保存を使用する場合があります。Nexa は現在このページでマーケティングまたはリターゲティング Cookie を運用していません。" }, { heading: "利用者の管理", body: "ブラウザ設定からローカルストレージと Cookie を削除できます。任意 Cookie を追加する場合、必要に応じて Nexa は事前に同意を求めます。" }], notice: "広告、アトリビューション、顧客データ Cookie を有効にする前に、このお知らせを更新する必要があります。" },
    },
  },
  zh: {
    home: "返回 Nexa", language: "语言", updated: "最后更新：2026 年 8 月 18 日",
    draftNotice: "这是适用于当前公开网站的运营草案。在正式采用或收集个人数据之前，请由合格的法律顾问审核。",
    documents: {
      privacy: { label: "隐私", title: "隐私声明", intro: "本声明说明 Nexa Marketing Global 如何处理其当前公开网站上的信息。", sections: [{ heading: "当前数据处理", body: "当前网站不提供账户、付款、可用联系表单或正在运行的邮件订阅服务。在 Nexa 明确说明收集目的和数据去向之前，请勿通过页面功能提交个人信息。" }, { heading: "偏好和技术服务", body: "网站会在浏览器本地存储中保存您选择的显示语言。托管、安全和汇总分析服务可能会根据其自身声明处理技术请求数据。" }, { heading: "未来变更", body: "在启用潜在客户收集、联盟跟踪、付款或支持之前，本声明必须说明数据、目的、接收方、保留期限和可用选择。" }], notice: "如有疑问，请在官方联系方式发布后通过该渠道联系 Nexa。" },
      terms: { label: "条款", title: "使用条款", intro: "这些条款规范对 Nexa Marketing Global 公开网站及其信息内容的访问。", sections: [{ heading: "信息而非保证", body: "网站以信息目的描述联盟营销和自动化概念，不保证收入、销售、排名或任何商业结果。您仍需对自己的决策和合规负责。" }, { heading: "允许的使用", body: "您可以为合法评估浏览和分享公开内容。不得干扰网站、尝试未经授权的访问，或将受保护材料作为自己的内容使用。" }, { heading: "第三方服务", body: "未来指向商家、联盟网络、工具或社交平台的链接将受这些第三方的条款和声明约束。" }], notice: "Nexa 可随着网站的发展修订这些条款。" },
      cookies: { label: "Cookie", title: "Cookie 和本地存储声明", intro: "本声明说明当前公开网站使用的有限浏览器存储做法。", sections: [{ heading: "功能偏好", body: "Nexa 在本地存储中保存您选择的界面语言，以记住您的偏好；不会用于建立广告画像。" }, { heading: "托管和分析", body: "托管或分析环境可能使用保障安全交付、汇总使用和服务可靠性所必需的技术存储。Nexa 目前不在此页面运行营销或再营销 Cookie 计划。" }, { heading: "您的控制", body: "您可以在浏览器设置中删除本地存储和 Cookie。如将来添加可选 Cookie，Nexa 应在需要时先征得同意。" }], notice: "在启用广告、归因或客户数据 Cookie 之前，必须更新本声明。" },
    },
  },
};
