const click = () => {
  //const xhr = new XMLHttpRequest();
  //xhr.open('GET', 'https://api.twitter.com/1.1/statuses/home_timeline.json, false');
  //xhr.send();
  //alert(xhr.responseText);
  appendData('Hello!');
};

const appendData = (data) => {
	const container = document.getElementById('data');
  const p = document.createElement('p');
  const text = document.createTextNode(data);
  p.append(text);
  container.append(p);
};

const start = () => {
  document.querySelector('.btn').addEventListener('click', click);
};

start();
