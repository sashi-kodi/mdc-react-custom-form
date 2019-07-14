import React,{useState, useEffect, useRef} from 'react';
import '@material/react-text-field/dist/text-field.css';
import Button from '@material/react-button';

import TextField, {HelperText, Input} from '@material/react-text-field';
const Form=(props)=>{
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [emailErrorText, setEmailErrorText] = useState("");
    const [nameErrorText, setNameErrorText] = useState("");
    const [submitBtnDisabled, setDisableSubmitBtn]= useState(true);
    
    //Donot run the validations for name, and email text fields for the first time 
    const isFirstRunName = useRef(true);
    const isFirstRunEmail = useRef(true);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name);
         console.log(email);
    }
    
    const validateName=()=>{
        const pattern=/^([a-zA-Z@]+[0-9]*)$/;
        let isValid =true;
         if(!name.length){
             setNameErrorText('Name is required field');  
             isValid=false;
         }
        //checking if the username is 8 characters long
         if(isValid && name.length<8){
              setNameErrorText('Name must be atleast 8 characters long'); 
             isValid=false;
          }
            
         if(isValid && !name.match(pattern)){
            setNameErrorText('Name must contain only alpha numeric characters and atleast one letter'); 
             isValid=false;
            }
        //checking if the name includes @
          if (isValid && !name.includes('@')){
             setNameErrorText('Name must contain @'); 
             isValid=false;
          }
        //when all validations are successful, clear the error message
          if(isValid){
             setNameErrorText("");
          }
        }
         
    const validateEmail=()=>{
        const emailPattern =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        //checking if email has been provided or not
        if(!email.length){
             setEmailErrorText('Email address is required field'); 
        }
        else{
            if(!email.match(emailPattern)){
                 setEmailErrorText('Invalid email address'); 
            }
            else{
                //when validation is successful, clear the email error message
                setEmailErrorText('');
            }
        }
    }
    const disableSubmitButton = ()=>{
        // the submit button must be disabled if either name or email have errors
       if (!nameErrorText && !emailErrorText){
           setDisableSubmitBtn(false);
       }
        else{
            setDisableSubmitBtn(true);
        }
    }
    
    useEffect(()=>{
        if(!isFirstRunName.current){
             validateName();
        }
        else{
            isFirstRunName.current=false;
        }
       
    }, [name]);
    
    useEffect(()=>{
        if(!isFirstRunEmail.current){
            validateEmail();
        }
        else{
            isFirstRunEmail.current=false;
        }
    }, [email]);
    
    useEffect(()=>{
         if(!isFirstRunEmail.current && !isFirstRunName.current  ){
             disableSubmitButton();
         }
    },[emailErrorText, nameErrorText])
    
    const onChangeHandler=(e)=>{
        if(e.target.name === 'name'){
            setName(e.target.value);
        }
        else{
            setEmail(e.target.value);
        }
    }
    const renderNameHelperText=()=>{  
        if (!nameErrorText){
            return <HelperText> Please enter your user name</HelperText>
        }
        else{
            return <HelperText persistent validation isValidationMessage isValid={false}> {nameErrorText}</HelperText>
        }
    }
    const renderEmailHelperText=()=>{  
        if (!emailErrorText){
            return <HelperText> Please enter your email</HelperText>
        }
        else{
            return <HelperText persistent validation isValidationMessage isValid={false}> {emailErrorText}</HelperText>
        }
    }
    return(
    <form  onSubmit={handleSubmit} style={{backgroundColor:'azure', border:'1px solid #eee', width:'50%', margin:'20px auto', padding:'20px'}}>
        <TextField
          label='UserName'
          helperText={renderNameHelperText()}
        ><Input
           value={name}
           name="name"
           minLength={8}
           isValid={!nameErrorText}
           type="text"
            required
            onBlur={validateName}
           onChange={onChangeHandler} />
        </TextField>
        <TextField
          label='Email'
          helperText={renderEmailHelperText()}
        ><Input
           value={email}
             name="email" 
           required
            onBlur={validateEmail}
           isValid={!emailErrorText}
           type="email"
           onChange={onChangeHandler} />
        </TextField>
           <Button type="submit" disabled={submitBtnDisabled}>Submit</Button>
    </form>
    )

}
export default Form;