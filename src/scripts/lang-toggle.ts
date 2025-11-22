export function initLangToggle(): void {
  const html = document.documentElement;
  const btn = document.getElementById("lang-toggle");
  btn?.addEventListener("click", () => {
    const currentLang = html.getAttribute("lang") === "en" ? "en" : "es";
    let newPath = "";
    if (currentLang === "en") {
      newPath = window.location.pathname.replace(/^\/en(\/|$)/, "/");
    } else {
      newPath =
        "/en" +
        (window.location.pathname === "/" ? "" : window.location.pathname);
    }
    window.location.pathname = newPath;
  });
}
