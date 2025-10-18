import { getTasksList, saveToStorage } from "./helpers";
import { getUncompletedItemsNum } from "./itemsLeft";

const checkboxInputs = () => document.querySelectorAll('[type="checkbox"]');

const styleCompletedLabel = (targetedCheckboxInput) => {
  const parentLabel = targetedCheckboxInput.parentNode;
  console.log(parentLabel);
  const targetedText = parentLabel.children[1];
  console.log(targetedText);
  targetedCheckboxInput.checked
    ? targetedText.classList.add("completed")
    : targetedText.classList.remove("completed");
};

const handelCheckboxInput = (event, index) => {
  const getStoredListItem = getTasksList();
  const targetedCheckboxInput = event.target;
  styleCompletedLabel(targetedCheckboxInput);
  //add to storage
  console.log(getStoredListItem);
  const list = getStoredListItem.map((item, itemIndex) =>
    index === itemIndex ? { ...item, isCompleted: !item.isCompleted } : item
  );
  saveToStorage("listItems", list);
  getUncompletedItemsNum()
};

export const checkboxListener = () => {
  checkboxInputs().forEach((btn, index) => {
    btn.addEventListener("click", (event) => handelCheckboxInput(event, index));
    btn.addEventListener("keydown", (event) =>event.key === "Enter" && handelCheckboxInput(event, index));
  });
};

export const styleStoredCompletedItems = () => {
  checkboxInputs().forEach((btn, index) => {
    styleCompletedLabel(btn);
  });
};
