import "./index.scss";
import axios from 'axios';

'use strict';

window.onload = () => {
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

  const createTemplateCloneElement = (todo) => {
    template.querySelector("[name=title]").value = todo['title'];
    template.querySelector("[name=status]").value = todo['status'];
    template.querySelector("[name=user]").value = todo['user_name'];
    template.querySelector(".timestamp").innerText = formatDateTime(todo['updated_at']);

    return document.importNode(template, true);
  }

  //初期画面描画
  axios.get('/api/todos') /* proxyの設定によりSinatraにアクセスが流れる */
  .then(function(response) {
    const data = response['data'];
    const fragment = document.createDocumentFragment();
    if(!data) return;
    data.forEach(todo => {
      const clone = createTemplateCloneElement(todo);
      fragment.appendChild(clone);
    }); 
    mainElement.appendChild(fragment);
  })
  .catch(function(error) {
    console.log(error);
  });

  // 新規作成formのイベント
  document.querySelector("#new-todo-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const encodeFormData = new URLSearchParams(formData);

    axios.post(event.target.action, encodeFormData)
    .then((response) => {
      const fragment = document.createDocumentFragment();
      const todo = response['data'];
      const clone = createTemplateCloneElement(todo);
      fragment.appendChild(clone);
      mainElement.appendChild(fragment);
    });
  });
}