// javascript:
(() => {
  const className = "__bookmarklets-toggle-some-images";
  const styles = document.querySelectorAll(`.${className}`);
  if (styles.length > 0) {
    styles.forEach((style) => style.remove());
    return;
  }
  const style = document.createElement("style");
  style.classList.add(className);
  document.body.appendChild(style);
  style.sheet.insertRule("img, source { visibility: hidden !important; }");
  style.sheet.insertRule("* { background: none !important; }");
})();
