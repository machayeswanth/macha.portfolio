// App constants

export const SITE_CONFIG = {
  name: "Macha Yeswanth",
  description: "Bachelor's in Computer Science student at MITS College | DevOpsEngineer | Cloud Computing Enthusiast | Ai Enthusiast",
  url: "https://machayeswanth.com",
  ogImage: "/images/nikhila/og-image.png",
  links: {
    email: "machayeswanth013@gmail.com",
    github: "https://github.com/machayeswanth",
    linkedin: "https://linkedin.com/in/macha-yeswanth/",
    phone: "+91 9000740420"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};
