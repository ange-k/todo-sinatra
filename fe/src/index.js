import "./index.scss";
import axios from 'axios';

'use strict';

window.onload = () => {
  const element = document.querySelector("#page--index");

  axios.get('http://localhost:8080/hello') /* proxyの設定によりSinatraにアクセスが流れる */
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}