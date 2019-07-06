import "./index.scss";
import axios from 'axios';

'use strict';

window.onload = () => {
  const element = document.querySelector("#page--index");

  axios.get('http://localhost:4567/hello')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}