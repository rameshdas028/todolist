import React, { Component } from "react";
import "./Todolist.css";
import Itemlist from "./Itemlist";
class Todolist extends Component{
    constructor(){
        super();
        this.state={
            item:[],
            currentItem:{
                text:"",
                key:""
            }
        }
    }
    handleInput = e =>{
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    addItem = e => {
        e.preventDefault();
        const newItem=this.state.currentItem;
        // let newItems;
        if(newItem.text!==""){
          const  newItems=[...this.state.item,newItem];
          this.setState({
              item:newItems,
              currentItem:{
                  text:"",
                  key:""
              }
          });
        }
    }
    deleteItem =key=>{
        const filterItem=this.state.item.filter(item=>item.key!==key);
        this.setState({
            item:filterItem,
        });
    }
    setUpdate=(text,key)=>{
        const newItem=this.state.item;
        newItem.map(item=>{
            if(item.key===key){
                item.text=text;
            }
        console.log(newItem)  
        this.setState({
            item:newItem
        });    
        });
    }
    render(){
        return(
            <div className="to-do-body">
                <div>
                    <form className="to-do-form" onSubmit={this.addItem}> 
                      <input type="text" 
                      placeholder="Enter text"
                      value={this.state.currentItem.text}
                      onChange={this.handleInput}
                      />
                      <button type="submit">Add</button>
                    </form>
                </div>
                <Itemlist item={this.state.item} 
                trash={this.deleteItem}
                setUpdate={this.setUpdate}
                />
            </div>
        );
    }
}
export default Todolist;