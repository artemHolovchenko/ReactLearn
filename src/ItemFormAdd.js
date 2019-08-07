import React from 'react';
import './ItemFormAdd.css'

class ItemFormAdd extends React.Component{

    state ={
        label: ' '
    }
    Change = (e) =>{
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
   this.props.addTask(this.state.label);
   this.setState({
       label: ''
   })

    }
    render(){
        return(
            <form className = "item-add-form d-flex"
            onSubmit = {this.onSubmit}>

                <input type="text" 
                       className="form-control" 
                       onChange ={this.Change}
                       placeholder ="Type a new Task"
                       value = {this.state.label}/>
               <button className ="btn btn-outline-secondary">
                           Add
                </button> 
            </form>
        )
    }
}


export default ItemFormAdd;