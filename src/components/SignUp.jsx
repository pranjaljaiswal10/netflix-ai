
const SignUp = () => {
  return (
    <>
    <h1>Sign Up</h1>
    <form action="">
        <input type="text" id="name" name="full_name" placeholder="Full Name"/>
        <input type="email" id="email" name="email" placeholder="Email  Address"/>
        <input type="password" id="password" name="password" placeholder="Password"/>
        <button type="submit">SignUp</button>
    </form>
    </>
  )
};

export default SignUp;
