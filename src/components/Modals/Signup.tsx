import React, { useState } from 'react';
import { useAuthModalStore } from '@/store/authModalStore';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {

     const openAuthModal =  useAuthModalStore((state)=>state.openModal);
    
        const handleClick= (type:'login' | 'register'|'forgotPassword')=>{
            openAuthModal(type);
    
        }

            const [inputs,setInputs] = useState({email:'',displayName:'',password:''});

            const router = useRouter();

            const [
                createUserWithEmailAndPassword,
                user,
                loading,
                error,
              ] = useCreateUserWithEmailAndPassword(auth);

              useEffect(()=>{
                if(error){
                    alert(error.message)
                }
              },[error])

            const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
                setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
            }

            const handleRegister= async (e:React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
                if(!inputs.email || !inputs.displayName || !inputs.password) return alert("Please fill all the fields");
                try{
                    const newUser = await  createUserWithEmailAndPassword(inputs.email, inputs.password)
                    if(!newUser) return;
                    router.push('/');

                }catch (err:any){
                alert(err.message)
               }
            }

         
    
    return<form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
    <h3 className='text-xl font-medium text-white'> Register to LeetCode Clone</h3>
    <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
             Email</label>
            < input onChange={handleChangeInput} type="email" name="email" id="email" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'  placeholder='name@company.com' />
    </div>
    <div>
        <label htmlFor='displayName' className='text-sm font-medium block mb-2 text-gray-300'>
            Display Name</label>
            < input onChange={handleChangeInput} type="displayName" name="displayName" id="displayName" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'  placeholder='Your Name' />
    </div>
    <div>
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
            Password</label>
            < input onChange={handleChangeInput} type="password" name="password" id="password" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'  placeholder='********' />
    </div>
    <button  type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s' >
        {loading ? 'Registering...' : 'Register'}
    </button>
    
    <div className='text-sm font-medium text-gray-500'>
        Already have an Account?
        <a href='#' className='text-blue-700 hover:underline' onClick={()=>handleClick('login')}> Login</a>

    </div>

</form>
}
export default Signup;