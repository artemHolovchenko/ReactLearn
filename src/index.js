import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';
import ItemStatusFilter from './ItemStatusFilter';
import ItemFormAdd from './ItemFormAdd';
import './index.css';



class App extends React.Component{

  indexId = 100;
  state ={
    todoData : [
    this.createTodoItem('Drink Coffe'),
    this.createTodoItem('Make Awesome App'),
    this.createTodoItem('Have a lunch')
    ]

  }

  createTodoItem(label){
    return{
      label,
      important:false,
      done:false,
      id: this.indexId++

    }
  }
 // delete a task
  deletedItem = (id) =>{
    this.setState(({todoData})=>{

        const idx = todoData.findIndex((el) => el.id === id);  //get index for deleted records
        // todoData.splice(idx,1);   //delete records with index = idx its bad we dont change a mass

        const newArr = [...todoData.slice(0,idx),
        ...todoData.slice(idx+1)];

       
        return{
        todoData : newArr
        }
    })
  }

  // add new task
  newTask = (text) =>{
    const newItem = this.createTodoItem(text);
    

    this.setState(({todoData})=>{
      const newArr = [...todoData,
      newItem];
      return{
        todoData: newArr
      }
    })
  }

  togleProperty(arr,id,propName){
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem,[propName]: !oldItem[propName]};


    return[
    ...arr.slice(0,idx),
      newItem,
      ...arr.slice(idx+1)];

    
  }

  onToggleImportant = (id) =>{
    this.setState(({todoData})=>{
      return{
        todoData:this.togleProperty(todoData,id,"important")
      }
     })

  }

  onToggleDone = (id) =>{
    this.setState(({todoData})=>{
     return{
       todoData:this.togleProperty(todoData,id,"done")
     }
    })

  }

  render(){
    const {todoData} = this.state;
    const doneCount = todoData.filter((el)=>el.done).length;
    const todoCount = todoData.length - doneCount;
    return(
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={todoData} 
        onDeleted = {this.deletedItem}
        onToggleImportant = {this.onToggleImportant}
        onToggleDone = {this.onToggleDone}
        />
        <ItemFormAdd
        addTask = {this.newTask} />
      </div>
    );
    
  }
}








ReactDOM.render(<App />, document.getElementById('root'));