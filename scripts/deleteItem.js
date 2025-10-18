import {getTasksList, saveToStorage } from "./helpers";
import { getUncompletedItemsNum } from "./itemsLeft";
import { renderListItems } from "./renderScreen";
const delBtns = ()=>document.querySelectorAll('.delete-btn')

const deleteItem=(index)=>{
    const listArr =getTasksList()
   listArr.splice(index, 1);
   saveToStorage('listItems',listArr) 
   renderListItems()
   getUncompletedItemsNum()
}

export const handleDeleteBtnListener = () => {

  delBtns().forEach((element,index)=> {
  element.addEventListener(
    "click",
    () => deleteItem(index)
  )})

  delBtns().forEach((btn,index)=> {
  btn.addEventListener(
    "keydown",
    (event) => event.key === "Enter" && (() => deleteItem(index))
  )})
}


