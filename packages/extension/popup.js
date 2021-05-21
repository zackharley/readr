const element = document.getElementById('add-article');

element.addEventListener('click', async () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const url = tabs[0].url;
    alert(url);
  });
});
