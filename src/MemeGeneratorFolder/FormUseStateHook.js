import React, { useState } from "react";
function FormUseStateHook() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [ contactData, setContactData ] = useState ( [] )
  

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [name]: value,
      };
    });

    // setInputData((prevInputData) => ({
    //   ...prevInputData,
    //   [name]: value,
    // }));
  }
  function handleSubmit(event){
      event.preventDefault();
        setContactData(prevContact=>[...prevContact, inputData])

  }
  const contacts = contactData.map((each) => (
    <h1 key={contact.firstName + contact.lastName}>
      {each.firstName} {each.lastName}
    </h1>
  ));
console.log(contactData);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="firstName" value={inputData.firstName} onChange={handleChange} />

        <input name="firstName" value={inputData.lastName} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Contact</button>
      </form>
      {contacts}
    </div>
  );
}
