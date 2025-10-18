const tasks =()=>document.querySelectorAll('.todo-item')
export const tasksFilter = (completed) => {
    if (completed) {
        tasks().forEach((task) => {
    if (!task.classList.contains("completedLi")) {
      task.style.display = "none"; // hide completed tasks
    }else{
        task.style.display = "flex"; // hide completed tasks
    }
  });
    }else{
        tasks().forEach((task) => {
    if (task.classList.contains("completedLi")) {
      task.style.display = "none"; // hide completed tasks
    }else{
        task.style.display = "flex"; // hide completed tasks
    }
  });
    }
  
};