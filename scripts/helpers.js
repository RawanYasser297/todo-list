/**
 * functions => ✅
 * 1- add [data-theme="light"] attribute to the body element ✅
 * 2-change from moon to the soon .✅
 * 3-addNewListItem
 * *on enter click , add item to todoList array .
 *  renderListItems - add list items to the dom , rerender after add ,remove new item
 * 4-set-get todo list from local storage funs
 * 5-handleCheckBox=> 
 * *1-(set this item in the storage as a completed item)fun, 
 * *2-add (.completed) to text (.todo-text), 
 * *3-add (checkbox.checked = true) to input type=check box 
 * 6-set completed items =()=>set completed items to list at the storage
 * 7-get completed items =()=>filter and return completed items from local storage
 * 8-(listItemsNum) = get Completed items() 
 * 9-get completed items =()=>filter and return uncompleted items from local storage
 * 10-filters, filter items('all','active','completed') =>{
 * all=>render (listItemsArr).
 * active=> render(get uncompleted itemsArr)
 * completed=>render(et completed items Arr)
 * }
 * 11-fun filterCompleted or not(completed:boolean)=>return array of items(completed/not)
 * *filter if completed =>filter isCompleted,if !completed =>filter isUnCompleted 
 *  12-Clear Completed=> delete all completed from database
 */

export const saveToStorage =(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}

export const getData =(key)=>{
    const data =localStorage.getItem(key)
    return {key:JSON.parse(data)} 
}

export const getTasksList=()=>{
    return getData('listItems').key
}

