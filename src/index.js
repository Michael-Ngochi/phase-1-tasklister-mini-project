document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelector("#tasks");
  const form = document.querySelector("#create-task-form");
  const formInput = document.querySelector("#new-task-description");

  let taskArray = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formInput.value.trim() !== "") {
      taskArray.push(formInput.value.trim());
      showTasks();
      formInput.value = ""; 
    }
  });

  function showTasks() {
    taskList.innerHTML = "";
    taskArray.forEach((task) => {
      let li = document.createElement("li");
      li.textContent = task;
      taskList.appendChild(li);
    });
  }

  showTasks();
});
