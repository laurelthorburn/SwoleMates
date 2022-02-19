import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Modal from '../LoginForm/LoginForm'
import './welcome.css'


const Welcome = () => {
    //represents whether the modal is open or not, start false bc modal closed initially
    const [openModal, setModal] = useState(false);
    const [scrollTop, setScrollTop] = useState();
    const [scrolling, setScrolling] = useState();
    useEffect(() => {
      const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > scrollTop);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    useEffect(() => {
      console.log(scrolling);
    }, [scrolling]);
    

    return (
        <>
        <div welcomeMain>
        {!openModal && 
        <div className="welcomeContainer">
            <div className="container">
                <div className="shadows">
                    <span>S</span>
                    <span>W</span>
                    <span>O</span>
                    <span>L</span>
                    <span>E</span>
                    <span>M</span>
                    <span>A</span>
                    <span>T</span>
                    <span>E</span>
                    <span>S</span>
                </div>
            </div>
    

                <div className="welcomeBorder">

                <div class="relative rounded-xl overflow-auto p-8">
                        <div class="flex justify-center items-end">
                        <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                        </div>
                        </div>
                        </div>

                    <button onClick={() => {setModal(true)}} value={openModal} className="button-57" role="button">
                       Ready?<span>Let's go...</span>
                    </button>

                    <br />
            </div>
        
        </div>}
        {openModal && <Modal onScroll={(event) => setScrolling(event)}/>}
        </div>
        </>
    )
}

export default Welcome;