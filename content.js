// URLが"https://qiita.com/*"の時は実行しない
if (!location.href.match(/https:\/\/qiita.com\//)) {
  // 画面が遷移するたびに実行
  window.addEventListener("load", function () {
    spanPre();
    setNoTranslate(isIgnoreElement());
  });
}

// preタグがあったら、spanタグで囲む
function spanPre() {
  const pre_elements = document.getElementsByTagName("pre");
  for (let i = 0; i < pre_elements.length; i++) {
    const pre = pre_elements[i];
    const span = document.createElement("span");
    span.innerHTML = pre.innerHTML;
    pre.parentNode.replaceChild(span, pre);

    //spanタグにtranslate属性を追加
    span.setAttribute("translate", "no");
  }
}

function isIgnoreElement() {
  //tag名がcodeの要素を取得
  const code_elements = document.getElementsByTagName("code");
  //h1~h3の要素を取得
  const h_elements = document.querySelectorAll("h1, h2, h3");
  //preタグの要素を取得
  const pre_elements = document.getElementsByTagName("pre");

  /**
   * GitHub
   */
  //tag名がcode-sampleの要素を取得
  const code_sample_elements = document.getElementsByClassName("code-sample");
  //class名"octotree-sidebar"の要素を取得
  const octotree_sidebar_elements =
    document.getElementsByClassName("octotree-sidebar");
  //strong要素を取得
  const strong_elements = document.getElementsByTagName("strong");
  //class名"author"の要素を取得
  const author_elements = document.getElementsByClassName("author");
  //classが"UnderlineNav-body"の要素を取得
  const UnderlineNav_body_elements =
    document.getElementsByClassName("UnderlineNav-body");
  //title要素がある要素を取得
  const title_elements = document.querySelectorAll("[title]");
  //row要素が”rowheader”の要素を取得
  const rowheader_elements = document.querySelectorAll("[role='rowheader']");
  //navタグの要素を取得
  const nav_elements = document.getElementsByTagName("nav");
  //classがpagehead-actionsの要素を取得
  const pagehead_actions_elements =
    document.getElementsByClassName("pagehead-actions");
  //classがBox-bodyの要素を取得
  const Box_body_elements = document.getElementsByClassName("Box-body");

  ///flutter.dev
  //classがcode-excerpt__codeの要素を取得
  const code_excerpt__code_elements =
    document.getElementsByClassName("code-excerpt__code");

  //すべての要素をリターン
  return Array.from(code_elements)
    .concat(Array.from(code_sample_elements))
    .concat(Array.from(h_elements))
    .concat(Array.from(octotree_sidebar_elements))
    .concat(Array.from(strong_elements))
    .concat(Array.from(author_elements))
    .concat(Array.from(UnderlineNav_body_elements))
    .concat(Array.from(title_elements))
    .concat(Array.from(rowheader_elements))
    .concat(Array.from(nav_elements))
    .concat(Array.from(pagehead_actions_elements))
    .concat(Array.from(Box_body_elements))
    .concat(Array.from(code_excerpt__code_elements))
    .concat(Array.from(pre_elements));
}

// 取得した要素にtranslate属性を追加
function setNoTranslate(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("translate", "no");
  }
}
