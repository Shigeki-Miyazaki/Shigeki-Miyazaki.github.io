(function () {
  const lang = document.documentElement.lang === "ja" ? "ja" : "en";
  const current = document.body.dataset.page || "index";

  // [ファイル名, 英語ラベル, 日本語ラベル]
  const pages = [
    ["index", "Home", "ホーム"],
    ["publications", "Publications", "論文"],
    ["talks", "Talks", "発表"],
    ["notes", "Notes", "ノート"],
    ["cv", "CV", "経歴"]
  ];

  const nav = pages.map(function ([file, en, ja]) {
    const active = file === current ? ' class="active"' : "";
    return `<a href="${file}.html"${active}>${lang === "ja" ? ja : en}</a>`;
  }).join("");

  // 現在の言語は太字、もう一方は同じページへのリンク
  const langLink = function (code, label) {
    return code === lang
      ? `<span class="current">${label}</span>`
      : `<a href="../${code}/${current}.html">${label}</a>`;
  };

  document.getElementById("site-header").innerHTML = `
    <div class="header-inner">
      <div class="header-top">
        <a class="site-name" href="index.html">Shigeki Miyazaki</a>
        <div class="language-switch">
          ${langLink("en", "EN")}<span class="separator">/</span>${langLink("ja", "JP")}
        </div>
      </div>
      <nav class="site-nav">${nav}</nav>
    </div>`;

  // MathJax(\( ... \) で数式を書く)
  window.MathJax = {
    tex: { inlineMath: [["\\(", "\\)"]] },
    svg: { fontCache: "global" }
  };
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
  document.head.appendChild(script);
})();
