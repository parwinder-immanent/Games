import React, { useState } from 'react';
import './Register.css';
import axios from "axios";
const userObj = {
  userName: "",
  age: "",
  email: "",
  password: "",
  confirmPassword: ""
};
const RegistrationForm=()=>{
   
  const [user, setUser] = useState(userObj)
  
  const formHandler=(ev)=>{
  ev.preventDefault();
 
      if (user.userName==='' || user.email==='' ||   user.password===''){
          alert('Please fill in all fields')
      }else{
          alert(`Welcome ${user.userName}`)
          setUser(userObj)
      }
  }
const handleInputChange=(ev)=> {

      setUser({
        ...user,
        [ev.target.name]:ev.target.value
      })
  }


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
//           axios.post(`https://jsonplaceholder.typicode.com/users`, { payload })
//        .then(res => {
//          console.log(res);
//          console.log(res.data);
//        })
//       };
  return  (<form onSubmit={formHandler}>

    <label>FullName: </label>
    <input type="text" placeholder="Enter Username" name="userName" value={user.userName} onChange={ev=>{setUserName(ev.target.value)}} required />
    <label>age: </label>
    <input type="text" placeholder="Enter age" name="age" value={user.age} onChange={ev=>{setAge(ev.target.value)}} required />
    <label>Email: </label>
    <input type="text" placeholder="Enter email id" name="email" value={user.email} onChange={ev=>{setEmail(ev.target.value)}} required />
    <label>Password: </label>
    <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={ev=>{setPassword(ev.target.value)}} required />
    <label>Confirm Password: </label>
    <input type="password" placeholder="Enter confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={ev=>{setConfirmPassword(ev.target.value)}} required />
    
    <button type="submit" value="Register">Create Account</button>
  </form>
  )
}
export default RegistrationForm