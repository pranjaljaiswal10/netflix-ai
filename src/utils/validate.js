export const checkValidData = (email, password) => {
  const errors={}
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    if(!isEmailValid)
      {
          errors["email"]="Please enter a valid email address"   
      }
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isPasswordValid)
      {
        errors["password"]="Your password is less than 8 or not valid"
      }
   return Object.keys(errors).length==0?null:errors      
  };