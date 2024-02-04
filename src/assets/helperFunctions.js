
export function openLink (link)  {
    window.location.href=link
}
export  function ToText(node) {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  }