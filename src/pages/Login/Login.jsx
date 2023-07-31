import React from 'react'
import '../../style/pages/login/Login.sass'
import dummyImg from './dummyImage.jpg'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
const Login = () => {
    // for setting images
    const [image, setImage] = React.useState(dummyImg)
    // fileHandler
    const fileHandler = (event)=>{
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {                
            setImage(reader.result);
        }
        reader.readAsDataURL(file);
    }
}

// From validation 
    // from schema
    const schema = yup.object().shape({
        fullName: yup.string(), 
        address: yup.string(),
        age: yup.number().integer().positive().min(12),
        email: yup.string().email("should be in a email form"),
        contactNumber: yup.number().integer().positive(),
        password: yup.string().min(4).required(), 
        confirmPassword: yup.string().oneOf([yup.ref("password"),null],"password missmatch"),
    })
    const {register,handleSubmit} = useForm(
        {
            resolver: yupResolver(schema)
        });
    const sub = (data)=>{
        alert("Form has been Submited")
    }
    return (
    <div className='form-page'>
        <form action="" onSubmit={handleSubmit(sub)}>
            <h1>Sign Up</h1>
            <div className='formImage'>
                <img src={image} alt="" />
            </div>
            <div>
                <input type="text" id='name'placeholder='Full Name' required {...register("fullName")}/>
            </div>
            <div>
                <input type="text" placeholder='Address' id='address' required {...register("address")}/>
            </div>
            <div>
                <input type="number" id='age' placeholder='Age' required min={"12"} {...register("age")}/>
            </div>
            <div>
                <input type="email" placeholder='email123@gmail.com' required id='email'{...register("email")}/>
            </div>
            <div>
                <input type="number" placeholder='Contact Number' required {...register("contactNumber")}/>
            </div>
            <div>
                <input type="password" placeholder='Password' required {...register("password")}/>
            </div>
            <div>
                <input type="password" placeholder='Confirm Password' required {...register("confirmPassword")}/>
            </div>
            <div className='uploadImage'>
                <label htmlFor="input-file">Upload Image</label>
                <input type="file" accept='image/jpeg , image/png , image/jpg' id='input-file' onChange={fileHandler}/>
            </div>
            <div>
                <input type="submit" className='submitButton' />
            </div>
        </form>
    </div>
  )
}

export default Login