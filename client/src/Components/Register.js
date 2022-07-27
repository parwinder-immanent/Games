import './Register.css';
function Register() {
  return (
    <div className="App">
      {<RegisterForm/>}   
            <input type="checkbox" checked="checked" /> Remember me   
            <button type="button" className="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>   
    </div>
  );
}

export default Register;


