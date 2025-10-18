import { getActiveListItems} from "./filters/chosenFilterBtnStyle";
import { getData, saveToStorage } from "./helpers";
import { getUncompletedItemsNum } from "./itemsLeft";


const todoInput = document.querySelector(".form-input");
const todoBtn = document.querySelector(".todo-btn");

const addNewListItem = () => {
  const inputValue = todoInput.value;
  if (inputValue) {
    const item = {
    value: inputValue,
    isCompleted: false,
  };
  const getListItems = getData("listItems").key || [];
  console.log(getListItems);
  getListItems.push(item);
  saveToStorage("listItems", getListItems);
  getData("activeBtn",'completed') && saveToStorage("activeBtn", 'all');
  getActiveListItems()
  getUncompletedItemsNum();
  todoInput.value=''
  }
  
};

export const handleNewListItem = () => {
  todoBtn.addEventListener("click", addNewListItem);
};
