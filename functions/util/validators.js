const isEmail =(email)=>{
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(emailRegEx)) return true;
    else return false
  };
   const isEmpty=(string)=>{
     if(string.trim()==='') return true;
     else return false;
   }

   exports.validateSignupData= (data)=>{
    let errors={};
    if (isEmpty(data.email)){
      errors.email= "Email should not be Empty";
    } else if(!isEmail(data.email)){
      errors.email= "Not a valid Email id";
    }
    if (isEmpty(data.password)){
      errors.password ="Password should not be Empty";
    } 
    if(data.password !== data.confirmPassword){
      errors.confirmPassword ="Passwords dont match";
    }
    if (isEmpty(data.handle)) errors.handle = " Must not be Empty";
    
   return {
       errors,
       valid: Object.keys(errors).length ===0? true:false 
   }
   };
   
   exports.validateLoginData = (data)=>{
    let errors={};
   
    if(isEmpty(data.email)) errors.email = "Email should not be Empty";
    if(isEmpty(data.password)) errors.password= "Password should not be Empty";
    return{
        errors,
        valid: Object.keys(errors).length ===0? true:false 

    }
   };
   exports.reduceUserDetails = (data) =>{
     let userDetails={};
    if(!isEmpty(data.bio.trim())) userDetails.bio = data.bio.trim();
    if(!isEmpty(data.website.trim())){
      if(data.website.trim().substring(0,4) !== 'http'){
        userDetails.website = "http://"+ data.website.trim();
      } else  userDetails.website = data.website.trim();
    }
    if(!isEmpty(data.location.trim())) userDetails.location = data.location.trim();
  return userDetails;    
  };