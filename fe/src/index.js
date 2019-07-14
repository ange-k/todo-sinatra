import "./index.scss";
import axios from 'axios';

'use strict';

window.onload = () => {
  const element = document.querySelector("#page--index");

  axios.get('http://localhost:8080/todos') /* proxyの設定によりSinatraにアクセスが流れる */
  .then(function(response) {
    const data = response['data'];
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
}