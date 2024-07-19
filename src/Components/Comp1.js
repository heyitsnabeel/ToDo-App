import React, { useState } from 'react'

const Comp1 = ({handlerAdd}) => {

  const[itemName,setitemName] =useState("");
  const[itemDate,setitemDate] =useState("");

  const handlerName=(e)=>{
    setitemName(e.target.value)
  }
  const handlerDate=(e)=>{
    setitemDate(e.target.value)
  }

  const handleAddButtonClicked=()=>{
    handlerAdd(itemName,itemDate);
    setitemName("");
    setitemDate("");
  }

  return (
    <>
      <center>
        <div className="col-md-7">
          <h2>TO DO APP</h2>
          <div className="row">
            <div className="col-md-5 ">
              <input type="text" placeholder="Enter todo here" className="inp-1" onChange={handlerName}/>
            </div>
            <div className="col-md-4 ">
              <input type="date" className="inp-1" onChange={handlerDate}/>
            </div>
            <div className="col-md-2 ">
              <button type="button" class="btn btn-success px-4" onClick={handleAddButtonClicked}>
                Add
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  )
}

export default Comp1;
