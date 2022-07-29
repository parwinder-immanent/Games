import React, { useState } from 'react';
import './Register.css';
import axios from "axios";

const RegistrationForm=()=>{
   
  const [user, setUser] = useState({
    userName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [record,setRecord]=useState([]);
  const handleInputChange=(ev)=> {
    const name=ev.target.name;
    const value=ev.target.value;
    setTimeout(value,3000)
    console.log(value)
          setUser({ ...user, [name]:value});
      }
  
      const formHandler=(ev)=>{
  ev.preventDefault();
  const newRecord={...record}
  console.log(record)
  setRecord({...user,newRecord})
  console.log(newRecord)
 
  axios.post(`https://jsonplaceholder.typicode.com/users`, { record })
  .then(res => {
   console.log(res);
  console.log(res.data);
})
  



// const RegistrationForm=()=>{
    
//   const [userName, setUserName] = useState("") 
//   const [age, setAge] = useState("")     
//   const [email, setEmail] = useState("")  
//   const [password, setPassword] = useState("")  
//   const [confirmPassword, setConfirmPassword] = useState("")   
//   const formHandler=(ev)=>{
//     ev.preventDefault();alert(`Welcome ${userName}`);
//     const payload = {
//             "username": userName,
//             "age": age,
//             "email": email,
//             "password": password,
//             "confirmPassword":confirmPassword
//           }
      //     axios.post(`https://jsonplaceholder.typicode.com/users`, { payload })
      //  .then(res => {
      //    console.log(res);
      //    console.log(res.data);
      //  })
 }
  return  (<form onSubmit={formHandler}>

    <label>FullName: </label>
    <input type="text" placeholder="Enter Username" name="userName" value={user.userName} onChange={handleInputChange} required />
    <label>age: </label>
    <input type="text" placeholder="Enter age" name="age" value={user.age} onChange={handleInputChange} required />
    <label>Email: </label>
    <input type="text" placeholder="Enter email id" name="email" value={user.email} onChange={handleInputChange} required />
    <label>Password: </label>
    <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleInputChange} required />
    <label>Confirm Password: </label>
    <input type="password" placeholder="Enter confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={handleInputChange} required />
    
    <button type="submit" value="Register">Create Account</button>
  </form>
  )
}
export default RegistrationForm