import {
  getActiveBtnStyled,
  getActiveListItems,
} from "./filters/chosenFilterBtnStyle";
import { saveToStorage, getTasksList } from "./helpers";
import { getUncompletedItemsNum } from "./itemsLeft";
import { renderListItems } from "./renderScreen";

const btn = document.querySelector(".clear-btn");

const clearCompletedItems = () => {
  const data = getTasksList();
  const newListItem = data.filter((item) => !item.isCompleted);
  saveToStorage("listItems", newListItem);
  getUncompletedItemsNum();
  getActiveListItems()
};

export const handleClearCompletedItemsBtn = () => {
  btn.addEventListener("click", clearCompletedItems);

  // btn.addEventListener(
  //   "keydown",

  //   (event) => event.key === "Enter" && clearCompletedItems
  // );
};
