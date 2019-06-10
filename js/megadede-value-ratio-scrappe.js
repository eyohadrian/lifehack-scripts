const LOAD_BUTTON_SELECTOR = ".onclick.load-more-icon";
const CONTAINER_SELECTOR = ".media-container-all";
const NAME_SELECTOR = ".media-title";
const VALUE_SELECTOR = ".value";
const MAX_LIST = 10;

const loadBtn = document.querySelector(LOAD_BUTTON_SELECTOR);
const media = document.querySelector(CONTAINER_SELECTOR);

const observer = new MutationObserver((mutations, observer) => mutations.forEach(mutation => {
  const btn = Array.from(mutation.addedNodes)
    .filter(el => el.className)
    .find(el => el.className.includes("onclick"));

  const results = Array.from(mutation.target.children)
    .filter(el => !el.className.includes("onclick"))
    .map(el => ({
      name: el.querySelector(NAME_SELECTOR).innerText,
      value: Number(el.querySelector(VALUE_SELECTOR).innerText)
    })).sort((a,b) => a.value > b.value ? -1 : 1).slice(0,MAX_LIST);

  if(btn) {
    btn.click();
  } else {
    console.log(results);
    observer.disconnect();
  }
}));

observer.observe(media, { childList: true });
loadBtn.click();