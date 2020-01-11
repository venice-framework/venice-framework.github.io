let inViewId = 1;
const main = (tagName) => $('main').getElementsByTagName(tagName);
const create = (tagName) => document.createElement(tagName);
const yPos = (element) => element.getBoundingClientRect().y;
const getSelectedA = () => $(`a[data-id="${inViewId}"`);

const mainLinks = main('a');
for (i = 0; i < mainLinks.length; i++) { 
  mainLinks[i].target = '_blank';
}

const h2s = Array.from(main('h2'));
const toc = $('#toc ul');
const firstH2 = h2s[0];

h2s.forEach((h2, idx) => {
  const li = create('li');
  const a = create('a');
  a.href = '#' + h2.id;

  let title = h2.innerHTML;
  a.innerHTML = title;
  h2.dataset.id = idx + 1;      
  a.dataset.id = idx + 1;
  li.appendChild(a);
  toc.appendChild(li);
});

const toggleToc = () => {
  if (yPos(firstH2) > 200) {
    toc.classList.remove('fadein');        
    toc.classList.add('fadeout');
  } else {
    toc.classList.remove('fadeout');        
    toc.classList.add('fadein');
    toc.classList.remove('hidden');
  }
}
toggleToc();    

let debounce = null;

window.onscroll = () => {
  if (debounce) clearTimeout(debounce);
  debounce = setTimeout(() => {
    toggleToc();
    for (let i = 0; i < h2s.length; i++) {
      const h2 = h2s[i];

      if (yPos(h2) > 200) {
        const prevSelectedA = getSelectedA();
        prevSelectedA && prevSelectedA.classList.remove('selected');
        inViewId = h2.dataset.id - 1;
        getSelectedA().classList.add('selected');
        return;
      }
    }
  }, 50);
}