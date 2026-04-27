import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      zayn: 'Zayn Swaikat',
      home: 'Home Page',
      skills: 'My Skills',
      projects: 'My Projects',
      how: 'How I Build',
      connect: 'Connect With Me',
      download: 'Download My Resume',
      hey: "Hey, I'm",
      subtitle: 'Full-Stack & Flutter Developer',
      touch: 'Get In Touch',
      aboutme: 'About Me',
      p1: "I'm a 19-year-old Full-Stack and Flutter developer and an Information Technology student at Latakia University who believes great products are built where logic meets bold design.",
      p2: "I focus on building applications that don't just look clean, but feel right to use. For me, real impact comes from combining strong backend logic with intentional UI/UX design.",
      p3: "Alongside my university studies, I continuously improve through real-world projects and professional certifications. I earned the Meta Front-End Developer Professional Certificate and I'm currently advancing my backend and mobile development skills through the Meta Back-End Developer program and IBM's Developing Mobile Apps with Flutter specialization.",
      p4: "I build both web and mobile applications, focusing on interactive platforms, scalable systems, and user-centered experiences. I enjoy turning ideas into structured systems, from concept and flow design to full implementation.",
      highlight: "Once I set a goal, I go all in.",
      p5: "My long-term goal is to grow into a high-impact developer role in a leading company, where I can build meaningful products and keep pushing my limits.",
      langs: "Languages: Arabic (Fluent), English (Duolingo English Test: 125), German (B1).",
      techs: "Technologies I've been working with:",
      skillsData: {
        html: { name: "HTML5" },
        css: { name: "CSS3" },
        js: { name: "JavaScript (ES6+)" },
        react: { name: "React" },
        responsive: { name: "Responsive Design" },
        git: { name: "Git & GitHub" },
        vercel: { name: "Vercel Deployment" },
        python: { name: "Python" },
        django: { name: "Django" },
        mysql: { name: "MySQL" },
        cpp: { name: "C++ (OOP)" },
        java: { name: "Java" },
        dart: { name: "Dart" },
        flutter: { name: "Flutter" }
      },
      tags: {
        all: "All",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
        database: "Database",
        programming: "Programming",
        mobile: "Mobile"
      },
    GitHub: 'GitHub',
    LiveDemo: 'Live Demo',
    DownloadAPK: 'Download APK (Android)',
projectsData: {
  himaths: {
    name: "HI Maths",
    description: "A mobile educational application built with Flutter and Django backend. Features user authentication, student data integration from Google Sheets, personalized dashboards, and structured educational content for high school students. Designed with a clean UI and smooth user experience for daily academic use."
  },
  dawwerha: {
    name: "Dawwerha",
    description: "A full-stack marketplace platform built with React and Django REST Framework. Features secure JWT authentication, image uploads, protected routes, admin moderation, and a responsive RTL Arabic interface. Deployed on Vercel and Render for a polished user experience."
  },
  sukoon: {
    name: "Sukoon Medical Center",
    description: "A comprehensive medical platform built with React and Django. Manages patient, doctor, and HR accounts, appointments, doctor evaluations, and delivers a clean, professional UI for both patients and staff."
  },
  fresh: {
    name: "Fresh Market",
    description: "A full-stack e-commerce platform built with React and Django. Supports product management, order handling, user accounts, and a fully responsive interface for seamless shopping."
  },
  dailyscore: {
    name: "Daily Score",
    description: "Track daily wellbeing and finances with this local-first React app. Features mood, nutrition, hydration, satisfaction, and behavior tracking, plus CSV export and intuitive dashboards with weekly and monthly trends."
  },
  barber: {
    name: "The Kings Barbers",
    description: "A modern barbershop website built with React. Highlights services, smooth navigation, and brand identity with easy WhatsApp contact and booking access."
  },
  code: {
    name: "CODE",
    description: "A React-based number guessing game inspired by Mastermind. Includes bot opponent mode, feedback for correct digits, sound effects, confetti celebrations, and a visual history of guesses."
  },
  sudoku: {
    name: "Sudoku Solver",
    description: "Solve Sudoku puzzles instantly with this React web app using a backtracking algorithm. Designed with an intuitive and clean UI for seamless interaction."
  },
  coffee: {
    name: "Coffeehub",
    description: "A responsive React SPA showcasing a coffee shop website. Features animated hero, menu carousel, interactive map, and feedback pages for a polished, engaging UI."
  },
  weather: {
    name: "Weather Scope",
    description: "A lightweight React app providing local weather forecasts, alerts, and news. Uses modular components, responsive layouts, and local JSON data for a fast, clean experience."
  }
},
howData: {
  step1: {
    title: "Understand the Idea",
    description: "Every project starts with logic. I break ideas down step by step using mind maps and focus on deeply understanding the user before writing a single line of code."
  },
  step2: {
    title: "Design the Flow",
    description: "I visualize the structure, explore references, and shape UI and UX together. Clarity, hierarchy, and ease of use guide every decision."
  },
  step3: {
    title: "Build Clean Structure",
    description: "Clean architecture and reusable components matter. I follow the DRY principle and write code that's scalable, maintainable, and collaboration-friendly."
  },
  step4: {
    title: "Refine the Experience",
    description: "The difference between good and great lives in the details. Micro-interactions, polish, user feedback, and continuous refinement."
  }
},
contact: {
  title: "Let's Connect",
  subtitle: "Got an idea, a project, or just want to chat? Hit me up!",
  links: {
    email: "Email",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    github: "GitHub"
  }
}
    }
  },
  ar: {
  translation: {
    zayn: 'زين سويقات',
      home: 'الصفحة الرئيسية',
      skills: 'مهاراتي',
      projects: 'مشاريعي',
      how: 'كيف اقوم بالتطوير',
      connect: 'تواصل معي',
      download: 'تنزيل سيرتي الذاتية',
      hey: 'مرحباً، أنا',
      subtitle: 'مطور Full-Stack و Flutter',
      touch: 'تواصل معي',
      aboutme: 'نبذة عني',
      p1: "أنا مطور برمجيات متكاملة وتطبيقات Flutter أبلغ من العمر 19 عاماً، وطالب في تخصص الهندسة المعلوماتية في جامعة اللاذقية، أؤمن بأن أفضل المنتجات تُبنى عند التقاء المنطق مع التصميم الجريء.",
      p2: "أركّز على تطوير تطبيقات لا تبدو أنيقة فحسب، بل تمنح المستخدم تجربة استخدام سلسة ومريحة. بالنسبة لي، التأثير الحقيقي يأتي من الدمج بين منطق خلفي قوي وتصميم واجهات وتجربة مستخدم مدروسة بعناية.",
      p3: "إلى جانب دراستي الجامعية، أعمل باستمرار على تطوير مهاراتي من خلال المشاريع الواقعية والشهادات الاحترافية. حصلت على شهادة Meta الاحترافية في تطوير الواجهات الأمامية، وأعمل حاليًا على تعزيز مهاراتي في تطوير الأنظمة الخلفية وتطبيقات الموبايل عبر برنامج Meta لتطوير الـ Back-End وتخصص IBM في تطوير تطبيقات Flutter.",
      p4: "أطوّر تطبيقات ويب وموبايل، مع التركيز على المنصات التفاعلية، والأنظمة القابلة للتوسع، والتجارب المتمحورة حول المستخدم. أستمتع بتحويل الأفكار إلى أنظمة منظمة، بدءاً من الفكرة وتصميم التدفق، وصولاً إلى التنفيذ الكامل.",
      highlight: "عندما أضع هدفاً، أكرّس له كل ما لدي.",
      p5: "هدفي على المدى البعيد هو التطور إلى دور مؤثر في مجال تطوير البرمجيات ضمن شركة رائدة، حيث أتمكن من بناء منتجات ذات قيمة حقيقية والاستمرار في تجاوز حدودي.",
      langs: "اللغات: العربية (متحدث أصلي)، الإنجليزية: بطلاقة C1 (اختبار Duolingo: 125)، الألمانية (B1).",
      techs: "التقنيات التي أعمل بها:",
      skillsData: {
        html: { name: "HTML5" },
        css: { name: "CSS3" },
        js: { name: "جافاسكريبت (ES6+)" },
        react: { name: "React" },
        responsive: { name: "تصميم متجاوب" },
        git: { name: "Git و GitHub" },
        vercel: { name: "نشر عبر Vercel" },
        python: { name: "Python" },
        django: { name: "Django" },
        mysql: { name: "MySQL" },
        cpp: { name: "++C (برمجة كائنية)" },
        java: { name: "Java" },
        dart: { name: "Dart" },
        flutter: { name: "Flutter" }
      },
      tags: {
        all: "الكل",
        frontend: "الواجهة الأمامية",
        backend: "الواجهة الخلفية",
        tools: "أدوات",
        database: "قواعد البيانات",
        programming: "لغات البرمجة",
        mobile: "تطوير الموبايل"
    },
    GitHub: 'GitHub',
    LiveDemo: 'عرض مباشر',
    DownloadAPK: 'تحميل APK (أندرويد)',
projectsData: {
  himaths: {
    name: "HI Maths",
    description: "تطبيق تعليمي للموبايل تم تطويره باستخدام Flutter وDjango. يوفّر نظام تسجيل دخول، تكامل مع بيانات الطلاب عبر Google Sheets، لوحات تحكم مخصصة، ومحتوى دراسي منظم لطلاب المرحلة الثانوية، مع واجهة نظيفة وتجربة استخدام سلسة."
  },
  dawwerha: {
    name: "دوّرها",
    description: "منصة سوق إلكتروني متكاملة مبنية باستخدام React وDjango REST Framework. تتضمن مصادقة آمنة عبر JWT، رفع صور، حماية للمسارات، نظام إشراف إداري، وواجهة عربية متجاوبة تدعم RTL."
  },
  sukoon: {
    name: "مركز سكون الطبي",
    description: "منصة طبية متكاملة مبنية باستخدام React وDjango، لإدارة حسابات المرضى والأطباء والموارد البشرية، مع نظام مواعيد وتقييم للأطباء وواجهة احترافية وسهلة الاستخدام."
  },
  fresh: {
    name: "فريش ماركت",
    description: "منصة تجارة إلكترونية متكاملة باستخدام React وDjango، تدعم إدارة المنتجات، الطلبات، حسابات المستخدمين، وواجهة متجاوبة لتجربة تسوق سلسة."
  },
  dailyscore: {
    name: "التقييم اليومي",
    description: "تطبيق React لتتبع الحالة اليومية والصحة والعادات، يشمل المزاج، التغذية، الترطيب، الرضا والسلوك، مع إمكانية تصدير البيانات وتحليلات أسبوعية وشهرية."
  },
  barber: {
    name: "صالون الملوك",
    description: "موقع حديث لصالون حلاقة مبني باستخدام React، يبرز الخدمات وهوية العلامة مع تنقل سلس وإمكانية التواصل والحجز بسهولة."
  },
  code: {
    name: "لعبة CODE",
    description: "لعبة تخمين أرقام مبنية باستخدام React مستوحاة من Mastermind، تتضمن نمط اللعب ضد الذكاء الاصطناعي، مؤثرات صوتية، احتفالات بصرية، وسجل مرئي للمحاولات."
  },
  sudoku: {
    name: "حلال السودوكو",
    description: "تطبيق ويب لحل ألغاز السودوكو باستخدام خوارزمية Backtracking، مع واجهة بسيطة وسهلة الاستخدام."
  },
  coffee: {
    name: "Coffeehub",
    description: "موقع SPA تفاعلي لمقهى باستخدام React، يتضمن واجهة متحركة، قائمة منتجات، خريطة تفاعلية وصفحات تواصل."
  },
  weather: {
    name: "نشرة الطقس",
    description: "تطبيق React خفيف لعرض حالة الطقس المحلية والتنبيهات، يعتمد على مكونات منظمة وواجهة متجاوبة لتجربة سريعة ونظيفة."
  }
},
howData: {
  step1: {
    title: "فهم الفكرة",
    description: "كل مشروع يبدأ بالمنطق. أقوم بتفكيك الفكرة خطوة بخطوة باستخدام خرائط ذهنية، مع التركيز على فهم المستخدم بعمق قبل كتابة أي سطر برمجي."
  },
  step2: {
    title: "تصميم التدفق",
    description: "أقوم بتصوّر بنية التطبيق، أستكشف أمثلة مرجعية، وأصمّم تجربة المستخدم والواجهة معًا. الوضوح، وتسلسل المعلومات، وسهولة الاستخدام هي أساس كل قرار."
  },
  step3: {
    title: "بناء هيكل نظيف",
    description: "الهندسة النظيفة وإعادة استخدام المكونات أمران أساسيان. ألتزم بمبدأ DRY وأكتب شيفرة قابلة للتوسع وسهلة الصيانة والعمل الجماعي."
  },
  step4: {
    title: "تحسين التجربة",
    description: "الفرق بين الجيد والممتاز يكمن في التفاصيل. التفاعلات الدقيقة، اللمسات النهائية، ملاحظات المستخدم، والتحسين المستمر."
  }
},
contact: {
  title: "تواصل معي",
  subtitle: "لديك فكرة، مشروع، أو حتى رغبة في الدردشة؟ لا تتردد بالتواصل معي!",
  links: {
    email: "البريد الإلكتروني",
    linkedin: "لينكد إن",
    whatsapp: "واتساب",
    instagram: "إنستغرام",
    github: "غيت هاب"
  }
}
  },
}
};

const saved = localStorage.getItem('ds_lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: saved,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

function applyDir(lang) {
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
  }
}

applyDir(saved);

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('ds_lang', lng);
  applyDir(lng);
});

export default i18n;