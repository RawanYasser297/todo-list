import { handleDeleteBtnListener } from "./deleteItem";
import { getUncompletedItemsNum } from "./itemsLeft";
import { getTasksList } from "./helpers";
import { checkboxListener, styleStoredCompletedItems } from "./checkbox";

const listElement = document.querySelector(".todo-list");

/**
 * Renders todo list items
 * @param {"all" | "unCompleted" | "completed"} filter
 */
export const renderListItems = (filter = "all") => {
  const arr = getTasksList();

  // filter tasks based on mode
  const filtered = arr?.filter((item) => {
    if (filter === "unCompleted") return !item.isCompleted;
    if (filter === "completed") return item.isCompleted;
    return true; // "all"
  });

  // if no tasks → show empty state
  if (filtered?.length === 0) {
    listElement.innerHTML = `
      <li class="todo-empty">
        ${
          filter === "unCompleted"
            ? "<img class='todo-empty-img' src='../images/target.png' alt='' /> No active tasks!"
            : filter === "completed"
            ? "<img class='todo-empty-img' src='../images/checklist.png' alt='' /> No completed tasks yet!"
            : "<img class='todo-empty-img' src='../images/order.png' alt='' /> Your list is empty!"
        }
      </li>`;
    return;
  }

  // build HTML for filtered tasks
  let content = "";
  filtered?.forEach(
    (item,index) =>
      (content += `
      <li class="todo-item">
        <label class="task-label">
          <input type="checkbox" ${item?.isCompleted ? "checked" : ""}>
          <span class="todo-text">${item?.value}</span>
        </label>
        <button class="delete-btn" aria-label="Delete">✕</button>
      </li>`)
  );

  listElement.innerHTML = content;
  

  handleDeleteBtnListener();
  getUncompletedItemsNum();
  styleStoredCompletedItems()
  checkboxListener()
};
