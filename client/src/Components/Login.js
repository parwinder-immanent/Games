function Login() {
  return (
    <form>
      <label>Username: </label>
      <input type="text" placeholder="Enter Username" name="username" required />
      <label>Email: </label>
      <input type="email" placeholder="Enter email id" name="email" required />
      <label>Password: </label>
      <input type="password" placeholder="Enter Password" name="password" required />
      <button type="submit">Create Account</button>
    </form>);

}

export default Login;