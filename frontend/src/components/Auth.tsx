import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { BASE_BACKEND_URL } from '../confog'


const Auth = ({type} : {type: "signup" | "signin" }) => {
    const [input, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    async function sendRequest() {
        try{
            const response = await axios.post(`${BASE_BACKEND_URL}/api/v1/${type}`, input)
            //console.log(response);
            if(response.status !== 200){
                return alert("Error occured check the inupts and try again.")
            }
            const jwt = response.data.jwt
            console.log(jwt);
            localStorage.setItem('jwt', jwt)
            navigate('/blogs')
        } catch(e){
            //alert
            alert("Error occured check the inupts and try again.")
        }
    }
  return (
    <div
    className='flex justify-center h-screen items-center'
    >
        <div>
            <div
            className='px-10'
            >
                <div
                className='text-3xl font-bold text-slate-800 mb-3'
                >
                    {type === "signup" ? "Create New Account" : "Welcome Back"} 
                </div>
                <div
                className='text-center text-slate-400'
                >
                    {type === "signup" ? "Already have an account? " : "Don't have an account? "}
                    <Link 
                    to={type === "signup" ? "/signin" : "/signup"}
                    className='text-blue-500 pl-2 underline'
                    > 
                        {type === "signup" ? "Sign In " : "Sign Up"}
                        
                    </Link>
                </div>
            </div>

            <div
            className='pt-8'
            >
                <LabeledInput label="Email" type="email" placeholder="Email" onChnage={(e) => {
                    setInputs({
                        ...input,
                        email: e.target.value
                    })
                }}/>

                {type === "signup" ? <LabeledInput label="Name" placeholder="Name" onChnage={(e) => {
                    setInputs({
                        ...input,
                        name: e.target.value
                    })
                }}/> : null}

                <LabeledInput label="Password" type="password" placeholder="Password" onChnage={(e) => {
                    setInputs({
                        ...input,
                        password: e.target.value
                    })
                }}/>

                <button 
                type="button" 
                className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={sendRequest}
                >
                    {type === "signup" ? "Sign Up" : "Sign In"}
                </button>
            </div>
        </div>
    </div>
  )
}

interface labelInputProps {
    label: string;
    placeholder: string;
    onChnage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabeledInput ({label, placeholder, onChnage, type} : labelInputProps) {
    return (
        <div className="mb-5">
            <label 
            className="block mb-1 text-md font-semibold text-gray-900"
            >{
                label}
            </label>

            <input 
            type = {type || "text"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder={placeholder} 
            required 
            onChange={onChnage}
            />
        </div>
    )
}

export default Auth