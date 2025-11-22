export function initThemeToggle(): void {
  const toggleBtn = document.querySelector<HTMLElement>("#theme-toggle");
  if (!toggleBtn) return;

  const stored = localStorage.getItem("theme");
  const storedTheme: "dark" | "light" | null =
    stored === "dark" || stored === "light" ? stored : null;

  const prefersDarkMql = window.matchMedia("(prefers-color-scheme: dark)");

  const isDark = storedTheme ? storedTheme === "dark" : prefersDarkMql.matches;
  document.documentElement.classList.toggle("dark", isDark);

  if (!storedTheme) {
    prefersDarkMql.addEventListener("change", (e) => {
      document.documentElement.classList.toggle("dark", e.matches);
    });
  }

  toggleBtn.addEventListener("click", () => {
    const newIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  });
}
