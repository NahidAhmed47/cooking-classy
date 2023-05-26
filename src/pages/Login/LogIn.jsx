import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';
import AnimationLogin from '../Shared/AnimationLogin';


const LogIn = () => {
    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    // handle login
    const handleLogin = (e) => {
        e.preventDefault();
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        // password validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
        }
        else if (password.length > 20) {
            setError('Password must be less than 20 characters');
        }
        signIn(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            toast.success(`Welcome ${user.displayName ? user.displayName : user.email}!`);
            navigate(from, {replace: true})
            e.target.reset()
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
            const user = result.user;
            toast.success(`Welcome ${user.displayName ? user.displayName : user.email}!`);
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
           const user = result.user;
           toast.success(`Welcome ${user.displayName ? user.displayName : user.email}!`);
            navigate(from, {replace: true})
        })
       .catch(error=>{
            setError(error.message);
        })
    }
    
    return (
        <div className='min-h-[100vh]'>
            <div className=' max-container flex justify-around items-center gap-10'>
            <div className='mt-36 md:mt-44 hidden md:block'>
                    <AnimationLogin></AnimationLogin>
                </div>
                <div className=' bg-white border shadow-xl h-fit max-w-[400px] mt-36 md:mt-44 rounded-md p-4 md:px-8'>
                <p className='text-red-500 text-center my-2 '>{error}</p>
                    <h1 className='font-bold text-2xl text-center primary-color'>Sign In</h1>
                    <div className='my-3'>
                        <form onSubmit={handleLogin}>
                            <input type="email" name='email' className='input-field' placeholder='Your Email' required/>
                            <input type="password" name='password' className='input-field' placeholder='Your Password' required/>
                            <button className='text-lg font-semibold font-mono text-white bg-[#b6400e] w-full py-1 rounded mt-5 btn-hover-effect'>Sign in</button>
                        </form>
                        <p className='text-center text-slate-600 mt-3'>Forget <span className='cursor-pointer hover:underline hover:text-red-400'>password</span> ?</p>
                        <div className='my-5 flex items-center justify-between'>
                            <hr className='w-[40%]'/>
                            <p className='text-slate-500'>or</p>
                            <hr className='w-[40%]'/>
                        </div>
                        <button className='sign-in-with-style btn-hover-effect' onClick={handleGoogleSignIn}><FaGoogle className='w-4 h-4'></FaGoogle>Sign in with Google</button>
                        <button className='sign-in-with-style mt-3 btn-hover-effect' onClick={handleGithubSignIn}><FaGithub className='w-4 h-4'></FaGithub>Sign in with Github</button>
                    </div>
                    <p className='text-base text-center text-slate-600 mb-2'>Don't have an account? Please <Link to="/user/register" className='text-red-500 underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;