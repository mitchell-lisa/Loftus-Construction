export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Record", href: "/record" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function currentHref(pathname: string) {
  if (pathname === "/projects" || pathname.startsWith("/projects/")) return "/projects";
  return nav.find((item) => item.href === pathname)?.href ?? "";
}
