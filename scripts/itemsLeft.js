// import { getData } from "./helpers";

// const span=document.querySelector('.items-left--num');
// export const getUncompletedItemsNum=()=>{
// const arr=getData('listItems').key

// console.log(arr.length)
// span.textContent=arr.length
// }

import { getData } from "./helpers";

const span = document.querySelector(".items-left--num");

export const getUncompletedItemsNum = () => {
  const arr = getData("listItems").key || [];

  // Filter only uncompleted items
  const uncompleted = arr.filter(item => !item.isCompleted);

  span.textContent = uncompleted.length;
};
