const AuthLogin = () => {
  return (
    <div>
      
      <form action="">
        <h2>login</h2>
        <label htmlFor="email">enter your email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">PassWord</label>
        <input type="password" name="password" />
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default AuthLogin
