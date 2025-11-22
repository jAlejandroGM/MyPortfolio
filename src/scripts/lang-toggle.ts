export function initLangToggle(): void {
  const html = document.documentElement;
  const btn = document.getElementById("lang-toggle");
  btn?.addEventListener("click", () => {
    const currentLang = html.getAttribute("lang") === "es" ? "es" : "en";
    const newLang = currentLang === "es" ? "en" : "es";
    html.setAttribute("lang", newLang);
    const newPath = window.location.pathname.replace(
      /^\/(es|en)/,
      `/${newLang}`
    );
    window.location.pathname = newPath;
  });
}
