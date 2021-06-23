import React from 'react'

function ContactCard(props){
    const st = {
        color: "#fff",
        backgroundColor:"orange"
    }
    return (
      <div style={st}>
        <img src={props.contact.imageUrl} width={100} height={100} alt={"My ima"}/>
        <h3>{props.contact.name}</h3>
        <p>Phone: {props.contact.phone}</p>
        <p>Email: {props.contact.email}</p>
      </div>
    );

}
export default ContactCard;