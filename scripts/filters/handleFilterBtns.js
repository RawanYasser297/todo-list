//import { checkedItemStyle } from "../styleCheckedItem";
import { styleStoredCompletedItems } from "../checkbox";
import {
  getActiveListItems,
  handleBtnsEventListener,
} from "./chosenFilterBtnStyle";

const filterButtons = [
  { selector: ".all", filter: "all" },
  { selector: ".unCompleted", filter: "unCompleted" },
  { selector: ".filter.completed", filter: "completed" },
];

export const initFilterButtons = () => {
  filterButtons.forEach(({ selector, filter }) => {
    const btn = document.querySelector(selector);
    if (!btn) return;

    btn.addEventListener("click", (event) =>
      handleBtnsEventListener(event, filter)
    );
    btn.addEventListener("keydown", (event) => {
      if (event.key === "Enter") handleBtnsEventListener(event, filter);
    });
  });

  getActiveListItems();
  
};
