console.log('Spotlight!');

function reqListener() {
  console.log(this.responseText);
}

const oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.nrcan.gc.ca/xml/geogratis.xml');
oReq.send();
