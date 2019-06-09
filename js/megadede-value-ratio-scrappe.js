const loadBtn = document.querySelector(".onclick.load-more-icon");
const load = () => loadBtn.click();
const media = document.querySelector(".media-container-all");


const observer = new MutationObserver((mutations, observer) => mutations.forEach(mutation => {
  const btn = Array.from(mutation.addedNodes)
    .filter(el => el.className)
    .find(el => el.className.includes("onclick"));

  const result = Array.from(mutation.target.children)
    .filter(el => !el.className.includes("onclick"))
    .map(el => {
      const value = Number(el.querySelector(".value").innerText);
      const name = el.querySelector(".media-title").innerText;
      return {name, value}
    }).sort((a,b) => a.value > b.value ? -1 : 1).slice(0,10);

  if(btn) {
    btn.click();
  } else {
    console.log(result);
    observer.disconnect();
  }
}));

observer.observe(media, { attributes: true, childList: true, characterData: true });
load();