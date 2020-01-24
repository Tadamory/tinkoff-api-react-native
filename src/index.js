//import http from 'http';

const click = (e) => {
  //http.get('https://api.twitter.com/1.1/statuses/home_timeline.json', res => {
  //  alert(res.statusCode);
  //});
  xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.twitter.com/1.1/statuses/home_timeline.json, false');
  xhr.send();
  alert(xhr.responseText);
};

document.querySelector('.btn').addEventListener('click', click);
