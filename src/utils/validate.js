export const checkValidData = (email, password,name) => {
  const errors={}
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    if(!isEmailValid)
      {
          errors["email"]="Please enter a valid email address"   
      }
   if(name!==undefined && name.trim()==="")
      {
        errors["name"]="Name field can't be empty"
      }

    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isPasswordValid)
      {
        errors["password"]="Your password should be 8 character,one uppercase and one lowercase and contain one digit"
      }
   return Object.keys(errors).length==0?null:errors      
  };