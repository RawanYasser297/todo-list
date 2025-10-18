import { theme } from "./scripts/theme";
import { handleNewListItem } from "./scripts/addNewListItem";
import { getUncompletedItemsNum } from "./scripts/itemsLeft";
import { handleClearCompletedItemsBtn } from "./scripts/clearCompleted";
import { initFilterButtons } from "./scripts/filters/handleFilterBtns";
import { styleStoredCompletedItems } from "./scripts/checkbox";

const start = () => {
  document.querySelectorAll("a").forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

 
  theme();
  initFilterButtons();
  handleNewListItem();
  handleClearCompletedItemsBtn();
  getUncompletedItemsNum();
  styleStoredCompletedItems();
};

start()