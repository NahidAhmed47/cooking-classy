import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProviders';

const Header = ({children}) => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const {user, LogOut} = useContext(AuthContext);
    const [openProfile, setOpenProfile] = useState(false);
    // profile toggle
    const showProfile = () => {
        setOpenProfile(!openProfile);
    }
    // toggle menu for responsive
    const toggleMenu = () => {
        setOpenMenu(!isOpenMenu);
    }
    // handle log out
    const handleLogOut = ()=>{
        LogOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
    }
    const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <div  className={`absolute left-0 right-0 z-10 ${scrollTop > 150 ? 'bg-black bg-opacity-75' : ''} ${children !== 'login' ? 'top-6 md:top-14' : 'py-3 w-full bg-black bg-opacity-90'}`}>
            <div className='flex justify-between items-center px-5 md:px-0 max-container py-1'>
            <Link to="/" className='flex gap-2 items-center'>
                <img className='h-14 w-14' src="https://i.ibb.co/G06HxpD/logo.png" alt="" />
                <h1 className='text-white text-xl md:text-3xl font-bold font-mono'>Cooking <span className='primary-color'>Classy</span></h1>
            </Link>
            <FaTimes className={isOpenMenu ? 'md:hidden w-6 h-6 text-white' : 'hidden'} onClick={toggleMenu}></FaTimes>
            <FaBars className={!isOpenMenu ? 'md:hidden w-6 h-6 text-white' : 'hidden'} onClick={toggleMenu}></FaBars>
            <div className={`text-white text-lg font-semibold font-serif ${isOpenMenu ? 'absolute flex flex-col top-14 right-7 bg-black p-4 rounded-lg' : 'md:flex gap-8 items-center hidden'}`}>
                <NavLink to="/" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>Home</NavLink>
                <NavLink to="/pages/blog" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>Blog</NavLink>
                <NavLink to="/pages/chef" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>Chef</NavLink>
                <NavLink to="/pages/about_us" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>About us</NavLink>
                <div className='flex gap-1 items-center relative'>
                    {user && <div  title={user.displayName}>
                        {
                            user.photoURL !== '' ? <img onClick={showProfile} className='w-12 h-12 rounded-full' src={user.photoURL}/> : <FaUserCircle className='w-7 h-7'></FaUserCircle>
                        }
                        </div>}
                    {!user ? <NavLink to="/user/login" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>Login</NavLink> : ''}
                    {/* user profile section */}
                    <div onClick={showProfile} className={`min-w-[250px] h-fit absolute  rounded-md shadow-md hover:shadow-2xl bg-slate-700 py-8 px-5 ${openProfile ? 'top-12 right-7 ' : 'hidden'} `}>
                        <div className='w-[120px] h-[120px] mx-auto rounded-full border-2 border-[#E25111] overflow-hidden'>
                            <img src={user?.photoURL} className='w-[120px] h-[120px] mx-auto rounded-full' alt="profile" />
                        </div>
                        <div className='text-center  mt-5 '>
                            <h1 className='text-base'>Name: {user?.displayName}</h1>
                            <p className='text-xs mt-3'>Email: {user?.email}</p>
                            <p className={user?.emailVerified ? 'text-xs text-white mt-1' : 'text-xs text-red-500 mt-1'}>{user?.emailVerified ? "Your Email has been verified!" : "Your Email is not verified!"}</p>
                            <div  className='mt-4 px-3 py-1 rounded-full hover:bg-white hover:text-[#E25111]  hover:scale-[0.98] duration-200 origin-center bg-[#E25111] text-white w-1/2 mx-auto' onClick={handleLogOut}>Logout</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;