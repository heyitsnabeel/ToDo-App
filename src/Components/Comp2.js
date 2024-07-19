import React from "react";

const Comp2 = ({ todoItems,handlerDelete}) => {
  return (
    <>
      <center>
        <div className="col-md-7">
          <div className="row">
            <ul className="comp2-lst">
              {todoItems.map((item) => (
                <li key={item.id} className="comp2-lst">
                <div className="row">
                  <div className="col-md-5 ">
                    <span className="cntnt1">{item.name}</span>
                  </div>
                  <div className="col-md-4 ">
                    <span className="cntnt1 ">{item.dueDate}</span>
                  </div>
                  <div className="col-md-2 ">
                    <button type="button" class="btn btn-danger my-2 px-3" onClick={e=>handlerDelete(item.name)}>
                      Delete
                    </button>
                  </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </center>
    </>
  );
};

export default Comp2;
