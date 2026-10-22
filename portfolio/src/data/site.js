// Personal links and details used across the site. Keep this the single
// place to update a URL.
export const site = {
  name: "Sutheera Pitakpalin",
  shortName: "Sutheera",
  role: "Full stack developer",
  url: "https://sutheerap.vercel.app",
  links: {
    github: "https://github.com/SutheeraP",
    linkedin: "https://www.linkedin.com/in/sutheera-pitakpalin-9bb623285/",
    email: "s.pitakpalin@gmail.com",
  },
};

export const elsewhere = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Email", href: `mailto:${site.links.email}?subject=Just%20say%20hi` },
];
