export function openLink(link: string): void  {
  window.location.href = link;
}

export function ToText(node: string): string {
  const tag = document.createElement('div');
  tag.innerHTML = node as unknown as string;
  const text = tag.innerText;
  return text;
}




