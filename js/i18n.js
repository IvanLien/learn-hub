const PORTAL = {
  en: {
    'nav.title': 'Learn Hub',
    'nav.lang': '中文',
    'hero.badge': 'Interactive Learning Platform',
    'hero.h1a': 'Learn Smarter',
    'hero.h1b': 'With Interactive Demos',
    'hero.desc': 'Explore AI, math, design and more through hands-on experiences. Made for the whole family.',
    'modules.title': 'Learning Modules',
    'mod.ml.title': 'Machine Learning',
    'mod.ml.sub': 'AI & Data Science',
    'mod.ml.desc': 'Understand supervised, unsupervised, and reinforcement learning through 3 vivid real-world demos.',
    'mod.ml.btn': 'Open Module →',
    'mod.jp.title': 'Japanese Travel',
    'mod.jp.sub': 'Travel · Authentic · Slang',
    'mod.jp.desc': 'Essential travel phrases with authentic expressions, trendy slang, real audio, flashcard drills, and culture tips.',
    'mod.jp.btn': 'Open Module →',
    'mod.hanoi.title': 'Tower of Hanoi',
    'mod.hanoi.sub': 'Logic & Recursion',
    'mod.hanoi.desc': 'Explore recursion and exponential complexity through an interactive game. Up to 10 disks, with step-by-step guidance and math explained.',
    'mod.hanoi.btn': 'Open Module →',
    'mod.17gon.title': 'Regular 17-gon',
    'mod.17gon.sub': 'Geometry · Number Theory · Galois',
    'mod.17gon.desc': "Richmond's compass-and-straightedge construction of the regular heptadecagon, with full proofs: Gauss's criterion, Galois theory, Gaussian periods, and the explicit cos(2π/17) formula.",
    'mod.17gon.btn': 'Open Module →',
    'mod.calc.title': 'Calculus Basics',
    'mod.calc.sub': 'Mathematics',
    'mod.calc.desc': 'Visualize derivatives and integrals. Make calculus intuitive with animated graphs.',
    'mod.design.title': 'Design Fundamentals',
    'mod.design.sub': 'Visual Design',
    'mod.design.desc': 'Color theory, typography, layout — learn the principles behind great design.',
    'mod.prog.title': 'Programming Basics',
    'mod.prog.sub': 'Computer Science',
    'mod.prog.desc': 'Learn programming concepts through visual, interactive code exercises.',
    'nav.share': '📲 Share',
    'share.title': '📲 Install on Phone',
    'share.desc': 'Scan with your Android camera or WeChat. Open in Chrome, tap "Install" to add to home screen.',
    'share.copy': 'Copy',
    'share.note': 'Works fully offline once installed.',
    'badge.ready': '✓ Ready',
    'badge.soon': 'Coming Soon',
    'btn.soon': 'Coming Soon',
    'footer': 'A private family learning platform · Built with love',
  },
  zh: {
    'nav.title': '学习中心',
    'nav.lang': 'English',
    'hero.badge': '互动学习平台',
    'hero.h1a': '更聪明地学习',
    'hero.h1b': '通过互动演示',
    'hero.desc': '通过动手互动体验探索人工智能、数学、设计等内容。适合全家一起学习。',
    'modules.title': '学习模块',
    'mod.ml.title': '机器学习',
    'mod.ml.sub': '人工智能与数据科学',
    'mod.ml.desc': '通过三个生动的真实案例，理解监督学习、无监督学习和强化学习的核心本质。',
    'mod.ml.btn': '进入模块 →',
    'mod.jp.title': '日语速成',
    'mod.jp.sub': '旅行 · 地道表达 · 俚语',
    'mod.jp.desc': '旅行必备日语短语，含地道口语、流行俚语与真人发音，附闪卡练习与文化贴士。',
    'mod.jp.btn': '进入模块 →',
    'mod.hanoi.title': '汉诺塔',
    'mod.hanoi.sub': '逻辑与递归',
    'mod.hanoi.desc': '通过互动游戏理解递归思想与指数复杂度。最多十个圆盘，内含逐步引导与数学原理讲解。',
    'mod.hanoi.btn': '进入模块 →',
    'mod.17gon.title': '正十七边形',
    'mod.17gon.sub': '几何 · 数论 · 伽罗瓦理论',
    'mod.17gon.desc': '里士满尺规作图法逐步构造正十七边形，配合高斯判据、伽罗瓦理论与高斯周期的完整数学证明。',
    'mod.17gon.btn': '进入模块 →',
    'mod.calc.title': '微积分基础',
    'mod.calc.sub': '数学',
    'mod.calc.desc': '可视化导数和积分，通过动画图形让微积分变得直观易懂。',
    'mod.design.title': '设计基础',
    'mod.design.sub': '视觉设计',
    'mod.design.desc': '色彩理论、排版、布局——学习优秀设计背后的核心原则。',
    'mod.prog.title': '编程入门',
    'mod.prog.sub': '计算机科学',
    'mod.prog.desc': '通过视觉化、互动式编程练习学习编程概念，零基础友好。',
    'nav.share': '📲 分享',
    'share.title': '📲 扫码安装到手机',
    'share.desc': '用 Android 手机相机或微信扫一扫，在 Chrome 中打开后点「安装」即可添加到主屏幕。',
    'share.copy': '复制',
    'share.note': '安装后可完全离线使用，无需流量。',
    'badge.ready': '✓ 可用',
    'badge.soon': '即将推出',
    'btn.soon': '即将推出',
    'footer': '家庭私人学习平台 · 用心制作',
  }
};

let currentLang = localStorage.getItem('edu-lang') || 'zh';

function t(key) { return (PORTAL[currentLang] || {})[key] || key; }

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('edu-lang', currentLang);
  applyLang();
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', applyLang)
  : applyLang();
