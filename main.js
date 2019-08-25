const API_URL = "https://api.sympla.com.br/public/v3/events";

fetch(API_URL, {
    method: 'GET',
    headers: {
      "s_token": "d0750f54e88d664128e4f19b7b6369418c9258c538c319029bda6e659bf260fc"
    }})
  .then(response => response.text())
  .then(result => {
    // Aqui, estamos pegando o resultado da requisição e parseando em JSON, 
    // para que fique mais fácil e amigável, tratarmos esses dados.
    const data = JSON.parse(result);
  });
    // console.log(data);