export function initThemeToggle(): void {
  // Botón para alternar el tema
  const toggleBtn = document.querySelector<HTMLElement>("#theme-toggle");
  if (!toggleBtn) return;

  // Validar preferencia guardada: solo aceptar "dark" o "light"
  const stored = localStorage.getItem("theme");
  const storedTheme: "dark" | "light" | null =
    stored === "dark" || stored === "light" ? stored : null;

  // Preferencia del sistema (dark mode)
  const prefersDarkMql = window.matchMedia("(prefers-color-scheme: dark)");

  // Tema inicial: si hay preferencia guardada úsala; si no, usa la del sistema
  const isDark = storedTheme ? storedTheme === "dark" : prefersDarkMql.matches;
  document.documentElement.classList.toggle("dark", isDark);

  // Si NO hay preferencia del usuario, sincronizar con cambios del sistema
  if (!storedTheme) {
    prefersDarkMql.addEventListener("change", (e) => {
      document.documentElement.classList.toggle("dark", e.matches);
    });
  }

  // Alternar tema al hacer clic y persistir la preferencia del usuario
  toggleBtn.addEventListener("click", () => {
    const newIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  });
}
