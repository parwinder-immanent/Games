import React, { useState } from 'react';
import './Register.css';



export default function RegisterForm() {
  const [user, setUser] = useState({
    userName: "",
    age:"",
    email: "",
    password: "",
    confirmPasswrd:""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  return (<form>

    <label>FullName: </label>
    <input type="text" placeholder="Enter Username" name="userName" value={user.userName} onChange={handleChange} required />
    <label>age: </label>
    <input type="text" placeholder="Enter age" name="age" value={user.age} onChange={handleChange} required />
    <label>Email: </label>
    <input type="text" placeholder="Enter email id" name="email" value={user.email} onChange={handleChange} required />
    <label>Password: </label>
    <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleChange} required />
    <label>Confirm Password: </label>
    <input type="password" placeholder="Enter confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required />
    
    <button type="submit">Create Account</button>
  </form>);
}