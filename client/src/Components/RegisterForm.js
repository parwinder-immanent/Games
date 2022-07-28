import React,{useState} from 'react';
import './Register.css';



export default function RegisterForm() {

  


const [user,setUser] = useState({
  userName: "",
  email: "",
  password: ""
})
const handleChange= e => {
  const {name , value}= e.target
  setUser({
    ...user,
    [name]:value
  })
}
    return (
    
    <form  >
 
      <label>Username: </label>
      <input type="text" placeholder="Enter Username"
       name="username" value={user.userName} onChange={handleChange} required />
      <label>Email: </label>
      <input type="text" placeholder="Enter email id" name="email" value={user.email} onChange={handleChange} required />
      <label>Password: </label>
      <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleChange} required />
      <button type="submit">Create Account</button>
    </form>);
  }