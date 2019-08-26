const API_URL = "https://api.sympla.com.br/public/v3/events";

const proxyurl = "http://127.0.0.1:5500/"; //https://cors-anywhere.herokuapp.com/";

fetch(API_URL, {
  method: 'GET',
  mode: 'cors',
  headers: {
    "s_token": "d0750f54e88d664128e4f19b7b6369418c9258c538c319029bda6e659bf260fc"
    }
})
  .then(response => response.text())
  .then(result => {
    // const data = JSON.parse(result)
    console.log(result);
  });

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.sympla.com.br/public/v3/events")
// xhr.setRequestHeader('s_token', 'd0750f54e88d664128e4f19b7b6369418c9258c538c319029bda6e659bf260fc');
// // xhr.setRequestHeader('Access-Control-Allow-Origin', 'disable');
// // xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
// xhr.withCredentials = true;

// xhr.send();
