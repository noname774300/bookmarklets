// javascript:
(() => {
  const style = document.createElement("style");
  document.body.appendChild(style);
  style.sheet.insertRule("img, source { visibility: hidden !important; }");
  style.sheet.insertRule("* { background: none !important; }");
})();
