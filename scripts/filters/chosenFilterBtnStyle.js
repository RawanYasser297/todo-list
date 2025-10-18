import { getData, saveToStorage } from "../helpers";
import { renderListItems } from "../renderScreen";
import { tasksFilter } from "../tasksFilter";

const btnsNodeList = () => document.querySelectorAll(".filter");

const setActiveBtnStyleToStorage = (btn) => {
  btn.classList.contains("all") && 
    saveToStorage("activeBtn", "all");
  btn.classList.contains("unCompleted") &&
    saveToStorage("activeBtn", "unCompleted");
  btn.classList.contains("completed") &&
    saveToStorage("activeBtn", "completed");
};


export const getActiveBtnStyled = () => {
  const getValue = getData("activeBtn").key;
  btnsNodeList().forEach((btn) => {
    btn.classList.remove("active");
    if (btn.classList.contains(getValue)) {
      btn.classList.add("active");
    }
  });
};

export const getActiveListItems = () => {
  const getValue = getData("activeBtn").key;
  if (getValue === 'all') renderListItems("all");
  if (getValue === 'active') renderListItems("unCompleted");
  if (getValue === 'completed') renderListItems("completed");
  
  getActiveBtnStyled();
};



export const handleBtnsEventListener = (event, filter) => {
  btnsNodeList().forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  setActiveBtnStyleToStorage(event.target);

  // render based on filter passed in
  renderListItems(filter);
};
