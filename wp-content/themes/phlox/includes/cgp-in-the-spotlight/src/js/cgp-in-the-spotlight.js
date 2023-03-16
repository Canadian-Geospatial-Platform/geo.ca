(function () {
  cgpGetSpotlightData();
})();

function cgpGetSpotlightData() {
  const contentContainer = document.querySelector('.cgp-in-the-spotlight-nrcan-feed');
  const url = contentContainer.getAttribute('data-rss-url');
  // const nrcanRSSURL = 'https://www.nrcan.gc.ca/xml/geogratis.xml';
  // const testRSSURL = `https://rss.art19.com/the-daily`;
  // const url = testRSSURL;

  fetch(url)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then((data) => {
      cgpShowSpotlightData(data, contentContainer);
    })
    .catch(function (err) {
      // There was an error
      cgpGetSpotlightError(err, contentContainer);
    });
}
function cgpShowSpotlightData(data, contentContainer) {
  let numItems = contentContainer.getAttribute('data-num-items');
  const allItems = data.querySelectorAll('item');
  const itemsArr = Array.from(allItems);
  let items = itemsArr.slice(0, numItems);
  let html = ``;
  html += `<ul class="list">`;
  items.forEach((el) => {
    html += `
      <li class="list-item">
        <a href="${el.querySelector('link').innerHTML}" target="_blank" rel="noopener">
          ${el.querySelector('title').innerHTML}
        </a>
      </li>
  `;
  });
  html += `</ul>`;
  contentContainer.insertAdjacentHTML('beforeend', html);
}

function cgpGetSpotlightError(err, contentContainer) {
  console.error(err);
  // let errMsg = `<p><span style="color: red;">Error from JavaScript fetch request to...</span><br />${err}</p>`;
  let errMsg = `<p>The NRCan news feed is not currently available</p>`;
  contentContainer.insertAdjacentHTML('beforeend', errMsg);
}
