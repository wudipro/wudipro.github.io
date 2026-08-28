// Everything on the page lives here. Editing this one file covers almost every
// content change you will ever make — the components in src/components/ only
// lay it out.
//
// Fields that need an inline link, bold or italics (about, news, authors,
// venue) are HTML snippets; they are rendered with Astro's `set:html`.
//
// Every list below is optional: empty the array and its section disappears
// from the page. Reordering sections means moving the blocks in
// src/pages/index.astro.
//
// Profile content for Di Wu's academic homepage.

// Images are imported from src/assets/ rather than written as public/ paths,
// so Astro can compress them, convert to WebP and emit a srcset at build time.
// Swap the files in place and the build takes care of the rest.
import photo from "./assets/photo.jpg";

export const profile = {
  nameEn: "Di Wu",
  // Optional second name shown next to the English one in the masthead, meant
  // for a name in a non-Latin script (Chinese, Japanese, Korean, Greek,
  // Cyrillic…). Leave it empty and nothing renders.
  //
  // For Chinese specifically the template ships a font-subsetting script so
  // the characters load in the right serif rather than falling back to the
  // system font — see the "Chinese (or other CJK) name" section of the README.
  nameCn: "",
  // Each string is one line, so you control where the role wraps.
  role: ["Ph.D. in Computer Science", "Blockchain & Systems Security"],
  location: "Hangzhou, China",
  photo, // src/assets/photo.jpg; a grey placeholder shows if it fails to load
  links: [
    { label: "Email", href: "mailto:wu.di@zju.edu.cn" },
    { label: "Homepage", href: "https://wudi.pro/", newTab: true },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=Be9_oEwAAAAJ&hl=en&oi=sra",
      newTab: true,
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0007-4785-706X",
      newTab: true,
    },
  ],
};

export const about = [
  `I received my Ph.D. in Computer Science from
   <a href="https://zju.edu.cn/">Zhejiang University</a> in 2026, supervised by
   Prof. Wu Wen and <a href="https://jianliu.phd/">Prof. Jian Liu</a>. I was also fortunate to receive research
   guidance from <a href="https://xuechao2.github.io/">Prof. Xuechao Wang</a>.`,
  `I am currently seeking postdoctoral research opportunities in blockchain
   security, decentralized systems, and digital payment infrastructure.`,
  `<strong>Research interests:</strong> Decentralized systems; blockchain
   security; payment channels; DeFi security; cross-chain protocols; and
   digital payment infrastructure.`,
  `My research combines protocol analysis, empirical measurement, and systems
   security to uncover real-world threats and design secure, efficient digital
   payment infrastructure.`,
];

// Short, dated updates — new papers, talks, moves. Keep the newest first and
// the list short; three to six entries reads best. Empty the array to hide
// the section entirely.
export const news = [];

// `logo` and `url` are optional. `url` is the institution's homepage; it also
// feeds the structured-data block that tells search engines where you studied.
export const education = [
  // {
  //   org: "Zhejiang University",
  //   desc: "Ph.D. in Computer Science",
  //   role: "Supervisors: Prof. Wu Wen and Prof. Jian Liu",
  //   date: "2022–2026",
  //   url: "https://zju.edu.cn/",
  // },
];

// Published or accepted work. `abstract` and `bibtex` expand in place;
// everything in `links` becomes a button that opens in a new tab.
// All fields except `title` are optional.
export const publications = [
  {
    title: "On the Atomicity and Efficiency of Blockchain Payment Channels",
    authors:
      "<strong>Di Wu</strong>, Shoupeng Ren, Yuman Bai, Lipeng He, Jian Liu, " +
      "Wu Wen, Kui Ren, and Chun Chen",
    venue:
      "<em>34th USENIX Security Symposium (USENIX Security 25)</em>, " +
      "Seattle, WA, August 2025, pp. 4053–4072",
  },
  {
    title: "PIRANA: Faster Multi-query PIR via Constant-weight Codes",
    authors:
      "Jian Liu, Jingyu Li, <strong>Di Wu</strong>, and Kui Ren",
    venue:
      "<em>2024 IEEE Symposium on Security and Privacy (SP)</em>, " +
      "San Francisco, CA, May 2024, pp. 4315–4330",
  },
  {
    title: "LookAhead: Preventing DeFi Attacks via Unveiling Adversarial Contracts",
    authors:
      "Shoupeng Ren, Lipeng He, Tianyu Tu, <strong>Di Wu</strong>, Jian Liu, " +
      "Kui Ren, and Chun Chen",
    venue:
      "<em>FSE 2025 Research Papers</em>, Vol. 2, Association for Computing " +
      "Machinery, 2025, FSE083, pp. 1847–1869",
  },
];

// Work in circulation but not yet published. Same fields as `publications`;
// `meta` adds a status line, which is where "R&R at …" or "under review"
// belongs. Empty the array and the section disappears.
export const workingPapers = [
  {
    title:
      "Ordering Power is Sanctioning Power: Sanction Evasion-MEV and the " +
      "Limits of On-Chain Enforcement",
    authors:
      "<strong>Di Wu</strong>, Yuman Bai, Shoupeng Ren, Xinyu Zhang, Yiyue " +
      "Cao, Xuechao Wang, Wu Wen, and Jian Liu",
    meta: "Preprint, arXiv:2603.27739 [cs.CR], 2026",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2603.27739" },
    ],
  },
  {
    title:
      "Your Trust, Your Terms: A General Paradigm for Near-Instant " +
      "Cross-Chain Transfer",
    authors:
      "<strong>Di Wu</strong>, Jingyu Liu, Xuechao Wang, Jian Liu, Yingjie " +
      "Xue, Kui Ren, and Chun Chen",
    meta: "Preprint, arXiv:2403.15191 [cs.CR], 2024",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2403.15191" },
    ],
  },
];

// Ongoing research that does not yet have a circulating draft. Once a project
// produces one, move it up to `workingPapers`.
export const experience = [];

// Software, tools, datasets — anything you built that stands on its own.
export const projects = [];

// Grants, prizes, fellowships. Empty the array to hide the section.
export const awards = [
  // {
  //   org: "Three-time Outstanding Graduate Student Award",
  //   role: "Zhejiang University",
  //   date: "2022–2025",
  // },
];

// Courses taught or assisted. Empty the array to hide the section.
export const teaching = [
  // {
  //   org: "Blockchain and Digital Currency",
  //   role: "Teaching Assistant, Zhejiang University",
  //   date: "Fall 2022",
  // },
];

// Shown in the footer. Worth bumping whenever you edit the page — it tells a
// visitor whether they are reading something current.
export const lastUpdated = "August 2026";
