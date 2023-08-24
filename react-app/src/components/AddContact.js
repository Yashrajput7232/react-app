import React from "react";

const AddContact=()=>
{
    return(
        <>
        <h1>Add Contact</h1>
        <div className="ui main">
            <div className="ui form">
                    <form>
                        <div  className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Enter Name"/>
                        </div>
                        <div  className="field"> 
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter email"/>
                        </div>
                        <button className="ui button blue"> AddContact </button>
                    </form>

                
            </div>

        </div>
        </>
    )
}
export default AddContact;