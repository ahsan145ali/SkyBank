import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import skylogo from '../UI/sky_logo.png';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext'
const Navbar = () => {
    let pageLocation = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { storeUserDetails } = useUserContext();
    const { userDetails } = useUserContext();
    const LoadNavBar = () => {

        const goToLogin = () => {
            navigate("/login");
        }
        const goToHomePage = () => {
            navigate("/");
        }
        const gotoDashboard = () => {
            navigate("/dashboard")
        }
        const LogoutUser = () => {
            storeUserDetails(null)
            setIsOpen(false)
        }
        if (pageLocation.pathname === '/login') {
            return (
                <div className='login-logo-container'>
                    <img src={skylogo} width={'100px'} className='login-skylogo' onClick={goToHomePage}></img>
                </div>
            )
        } else {
            return (
                <div className={`tw-relative ${isOpen ? 'tw-pr-64' : ''}`}>
                    <header className='tw-flex tw-justify-between tw-w-full tw-px-4 tw-shadow-md'>
                        <div className='tw-flex tw-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={'35px'} viewBox="0 0 24 24" fill="currentColor" className="userCircle">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                            </svg>
                            {userDetails ? <p className='userName'>{userDetails.firstName + " " + userDetails.lastName}</p> : <button className="button" onClick={goToLogin}>Login / Sign Up</button>}
                        </div>
                        <Link to="/"><img src={skylogo} width={'80px'} className='skylogo' alt="Sky Logo"></img></Link>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="optionBars" width={'40px'}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </header>

                    {/* Side Menu */}
                    <div className={`tw-fixed tw-top-0 tw-right-0 tw-h-full tw-bg-gray-800 tw-transition-transform tw-ease-in-out tw-w-3/4 ${isOpen ? 'tw-translate-x-0 tw-z-50' : 'tw-translate-x-full'}`}>
                        <div className='tw-p-4 tw-text-white'>
                            <div className='tw-flex tw-items-center'>
                                <h2 className='tw-text-xl tw-font-bold'>Menu</h2>
                                <button onClick={() => setIsOpen(!isOpen)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="optionBars" width={'40px'}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                            <ul className='tw-mt-4'>
                                <li className='tw-my-2'><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                                {userDetails ? (
                                    <>
                                        <li className='tw-my-2'><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
                                        <li className='tw-my-2'><Link to="/transactions" onClick={() => setIsOpen(false)}>Transactions</Link></li>
                                        <li className='tw-my-2'><Link to="/PayeeList" onClick={() => setIsOpen(false)}>Pay a contact</Link></li>
                                        <li className='tw-my-2'><Link to="/login" onClick={LogoutUser}>Logout</Link></li>
                                    </>
                                ) : <li className='tw-my-2'><Link to="/login">Login/Sign Up</Link></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )

        }
        // else if (pageLocation.pathname === '/') {
        //     return (
        //         <div className='login-logo-container'>
        //             <img src={skylogo} width={'100px'} className='login-skylogo' onClick={goToHomePage}></img>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <header className='tw-flex tw-justify-between tw-w-full tw-p-4'>
        //             <div className='tw-flex tw-items-center'>
        //                 <button className="button" onClick={goToLogin}>Login / Sign Up</button>
        //             </div>
        //             <img src={skylogo} width={'80px'} className='skylogo'></img>
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" /*strokeWidth={1.5} stroke="currentColor" */ className="optionBars" width={'40px'}>
        //                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        //             </svg>
        //         </header>
        //     )
        // }
        //     if (pageLocation.pathname !== "/" && pageLocation.pathname !== '/homepage') {
        //         return (
        //             <div className={`tw-relative ${isOpen ? 'tw-pr-64' : ''}`}>
        //                 <header className='tw-flex tw-justify-between tw-w-full tw-px-4 tw-shadow-md'>
        //                     <div className='tw-flex tw-items-center'>
        //                         <svg xmlns="http://www.w3.org/2000/svg" width={'35px'} viewBox="0 0 24 24" fill="currentColor" className="userCircle">
        //                             <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        //                         </svg>
        //                         <p className='userName'>{userDetails.firstName+" "+userDetails.lastName}</p>
        //                     </div>
        //                     <img src={skylogo} width={'80px'} className='skylogo' alt="Sky Logo"></img>
        //                     <button onClick={() => setIsOpen(!isOpen)}>
        //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="optionBars" width={'40px'}>
        //                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        //                         </svg>
        //                     </button>
        //                 </header>

        //                 {/* Side Menu */}
        //                 <div className={`tw-fixed tw-top-0 tw-right-0 tw-h-full tw-bg-gray-800 tw-transition-transform tw-ease-in-out tw-w-3/4 ${isOpen ? 'tw-translate-x-0 tw-z-50' : 'tw-translate-x-full'}`}>
        //                     <div className='tw-p-4 tw-text-white'>
        //                         <div className='tw-flex tw-items-center'>
        //                             <h2 className='tw-text-xl tw-font-bold'>Menu</h2>
        //                             <button onClick={() => setIsOpen(!isOpen)}>
        //                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="optionBars" width={'40px'}>
        //                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        //                                 </svg>
        //                             </button>
        //                         </div>
        //                         <ul className='tw-mt-4'>
        //                             <li className='tw-my-2'><Link to="/homepage" onClick={() => setIsOpen(false)}>Home</Link></li>
        //                             <li className='tw-my-2'><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
        //                             <li className='tw-my-2'><Link to="/transactions" onClick={() => setIsOpen(false)}>Transactions</Link></li>
        //                             <li className='tw-my-2'><Link to="/PayeeList" onClick={() => setIsOpen(false)}>Pay a contact</Link></li>
        //                             <li className='tw-my-2'><Link to="/" onClick={LogoutUser}>Logout</Link></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //     }
        //     else if (pageLocation.pathname === '/') {
        //         return (
        //             <div className='login-logo-container'>
        //                 <img src={skylogo} width={'100px'} className='login-skylogo' onClick={goToHomePage}></img>
        //             </div>
        //         )
        //     }
        //     else if (pageLocation.pathname === '/homepage') {
        //         return (
        //             <header className='tw-flex tw-justify-between tw-w-full tw-p-4'>
        //                 <div className='tw-flex tw-items-center'>
        //                     <button className="button" onClick={goToLogin}>Login / Sign Up</button>
        //                 </div>
        //                 <img src={skylogo} width={'80px'} className='skylogo'></img>
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" /*strokeWidth={1.5} stroke="currentColor" */ className="optionBars" width={'40px'}>
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        //                 </svg>
        //             </header>
        //         )
        //     }
    }
    return (
        <LoadNavBar />
    )
}

export default Navbar