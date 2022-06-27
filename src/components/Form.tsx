import React, { useState } from "react";

function Form() {
  const initialFormData = {
    name: "",
    lastName: "",
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [formData, setFromData] = useState(initialFormData);
  const { name, lastName } = formData;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="name"
        onChange={(e) => handleChange(e)}
        value={name}
      />
      <br />
      <input
        type="text"
        name="lastName"
        onChange={(e) => handleChange(e)}
        value={lastName}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
