import "./index.scss";
import axios from 'axios';

'use strict';

window.onload = () => {
  const element = document.querySelector("#page--index");
  const mainElement = document.querySelector("#main");
  const template = document.querySelector("#template--task").content;

  const formatDateTime = (dateTimeStr) => {
    const dateTime = new Date(dateTimeStr);
    return `${dateTime.getFullYear()}/`
      + `${String(dateTime.getMonth()+1).padStart(2, '0')}/`
      + `${String(dateTime.getDate()).padStart(2, '0')} `
      + `${String(dateTime.getHours()).padStart(2, '0')}:`
      + `${String(dateTime.getMinutes()).padStart(2, '0')}:`
      + `${String(dateTime.getSeconds()).padStart(2, '0')}`;
  }

  axios.get('http://localhost:8080/todos') /* proxyの設定によりSinatraにアクセスが流れる */
  .then(function(response) {
    const data = response['data'];
    const fragment = document.createDocumentFragment();
    if(!data) return;
    data.forEach(todo => {
      template.querySelector("[name=title]").value = todo['title'];
      template.querySelector("[name=status]").value = todo['status'];
      template.querySelector("[name=user]").value = todo['user_name'];
      template.querySelector(".timestamp").innerText = formatDateTime(todo['updated_at']);

      const clone = document.importNode(template, true);
      fragment.appendChild(clone);
    }); 
    mainElement.appendChild(fragment);
  })
  .catch(function(error) {
    console.log(error);
  });
}