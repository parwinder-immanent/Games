import React from 'react';
import './Register.css';
import axios from "axios";
export default function RegisterForms() {
    const handleSubmitClick = async (event) => {
        event.preventDefault()
        console.log(event.target)
        const formControlsCollection = event.target.elements;
        const username = formControlsCollection.userName.value;
        const age = formControlsCollection.age.value;
        const email= formControlsCollection.email.value;
        const password = formControlsCollection.password.value;
        // console.log(` my email id is ${email} `);
        console.log(`${username} is ${age} years old and email:${email} and password:${password}.`)
        // do something with `name`
        // create request payload
        const payload = {
            "username": username,
            "age": age
        }
        //const requestOptions = {
            //method: 'POST',
           // headers: { 'Content-Type': 'application/json' },
            //body: JSON.stringify({ payload })
       // };
       //fetch('https://reqres.in/api/posts', requestOptions)
       // .then(response => response.json());
       axios.post(`https://jsonplaceholder.typicode.com/users`, { payload })
       .then(res => {
         console.log(res);
         console.log(res.data);
       })
      };
    
    return (
        <form onSubmit={handleSubmitClick}>

            <label>FullName: </label>
            <input type="text" placeholder="Enter Username"  name="userName"/>
            <label>age: </label>
            <input type="age"  placeholder="Enter age" name="age"/>
            <label>Email: </label>
            <input type="email" placeholder="Enter email id" name="email"/>
            <label>Password: </label>
            <input type="password" placeholder="Enter Password" name="password"/>
            <label>Confirm Password: </label>
            <input type="password" placeholder="Enter confirmPassword" name="confirmPassword"/>

            <button type="submit">Create Account</button>
        </form>
    );
}