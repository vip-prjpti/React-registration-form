import './App.css';
import React, { useEffect, useState } from "react";
function Form() {

  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Fields are Mandatory!");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
    <div className='modal'>
      <pre>
        {flag ? (
          <h2 style={{textAlign:"center"}}>Hello {inputData.name}, You've registered successfully</h2>
        ) : (
          ""
        )}
      </pre>
      </div>
      <form  className="App" onSubmit={handleSubmit}>
        <div className='heading'>
          <h1>Registration form</h1>
        </div>
        <div className='form'>
        <div>
          <input
            type="text"
            placeholder="Enter your Name"
            value={inputData.name}
            name="name"
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your Email"
            value={inputData.email}
            name="email"
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your Password"
            value={inputData.password}
            name="password"
            onChange={handleData}
          />
        </div>
        <div className='submit'>
          <button type="submit">Submit</button>
        </div>
        </div>
      </form>
    </>
  );
}

export default Form;
