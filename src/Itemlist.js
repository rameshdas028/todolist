import React from "react";
import "./Itemlist.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faTrash } from '@fortawesome/free-solid-svg-icons'
import FlipMove from "react-flip-move";
function Itemlist(props){
    const totalItem=props.item;
    const newTotalItem=totalItem.map(item=>{
        return (<div className="eachItem" key={item.key}>
            <p>
               <input value={item.text} onChange={e=>{
                   props.setUpdate(e.target.value,item.key)
               }}/>
                <span>
                    <FontAwesomeIcon  className="icon"
                    icon={faTrash} 
                    onClick={()=>props.trash(item.key)}
                    />
                </span>
            </p>
        </div>);
    });

    return(
        <div>

            <FlipMove duration={300} easing="ease-in-out">
            {newTotalItem}
            </FlipMove>
        </div>
    );    
}
export default Itemlist;