import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';
import AnimationLogin from '../Shared/AnimationLogin';

const Register = () => {
    const {createUser, updateUser, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // password validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
        }
        else if (password.length > 20) {
            setError('Password must be less than 20 characters');
        }
        else if(email === undefined){
            setError('Email is required');
        }
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            updateUser(name, photo)
            .then(()=>{
                toast.success('Account created successfully');
                navigate(from, {replace: true});
                form.reset();
            })
            .catch(error =>{
                setError(error.message)
            })
        })
        .catch(error =>{
            setError(error.message);
        })
    }
    // sign in with google
    const handleGoogleSignIn = event => {
        event.preventDefault();
        signInWithGoogle()
        .then(result =>{
            toast.success('Signed in successfully');
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    // sign in with github
    const handleGithubSignIn = event => {
        event.preventDefault();
        signInWithGithub()
       .then(result =>{
           toast.success('Signed in successfully');
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
       .catch(error=>{
            setError(error.message);
        })
    }
    return (
        <div className='min-h-[100vh]'>
        <div className='flex  justify-around items-center max-container'>
        <div className='mt-36 md:mt-44 hidden md:block'>
                    <AnimationLogin></AnimationLogin>
                </div>
            <div className=' bg-white border shadow-xl h-fit max-w-[400px] mt-36 md:mt-44 rounded-md p-4 md:px-8 my-10'>
            <p className='text-red-500 text-center my-2 '>{error}</p>
                <h1 className='font-bold text-2xl text-center primary-color'>Sign Up</h1>
                <div className='my-3'>
                    <form onSubmit={handleRegister}>
                        <input type="text" name='name' className='input-field' placeholder='Name' />
                        <input type="email" name='email' className='input-field' placeholder='Email' required/>
                        <input type="password" name='password' className='input-field' placeholder='Password' required/>
                        <input type="text" name='photo' className='input-field' placeholder='Photo url' />
                        <button className='text-lg font-semibold font-mono text-white bg-[#b6400e] w-full py-1 rounded mt-5 btn-hover-effect'>Register</button>
                    </form>
                    <div className='my-5 flex items-center justify-between'>
                        <hr className='w-[40%]'/>
                        <p className='text-slate-500'>or</p>
                        <hr className='w-[40%]'/>
                    </div>
                    <button className='sign-in-with-style btn-hover-effect' onClick={handleGoogleSignIn}><FaGoogle className='w-4 h-4'></FaGoogle>Create account with Google</button>
                    <button className='sign-in-with-style mt-3 btn-hover-effect' onClick={handleGithubSignIn}><FaGithub className='w-4 h-4'></FaGithub>Create account with Github</button>
                </div>
                <p className='text-base text-center text-slate-600 mb-2'>Already have an account? Please <Link to="/user/login" className='text-red-500 underline'>Log in</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Register;