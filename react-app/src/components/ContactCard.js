import React from "react";

const ContactCard=(props)=>
{
    
    const {id ,name ,email}=props.contact
    return(

        <>
        <div className="item">
            <div className="item">
                <div className="header">id: {id}</div>
                <div className="header">name: {name}</div>
                <div className="header">email: {email}</div>
            </div>
                <i className="trash alternate outline icon"></i>
            
        </div>
        </>
    )

}
export default ContactCard;