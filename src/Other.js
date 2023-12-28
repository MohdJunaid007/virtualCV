
import React from 'react'
import './Other.css'
import aboutImg from './img/about.jpg'
import leetCode from './img/leetcode.png'
import gfg from './img/gfg.png'
import codingNinja from './img/codingNinja.jpg'

function Other() {
    // up to top buttom 
    window.addEventListener('scroll', function () {
        const UpToTop = document.querySelector('a.bottom__to__top');
        //console.log(UpToTop);
        UpToTop.classList.toggle('active', window.scrollY > 0)
    })
    return (
        <div className='about2 component__space' id='Other'>
            <div className='container' >
                <div className='row'>
                    {/* <div className='col__2'>
                        <img src={aboutImg} className='about__img' />
                    </div> */}
                    {/* <div className='col__2'> */}
                    <h1 className='about__heading'>
                        Extras
                        <div className='about__meta'>
                            <p className='exp__head'>
                                Worked as Fundraiser at HOPE Jaipur NGO and organized events for crowdfunding.
                            </p >
                            <p className='exp__head'>
                                Solved more than 1100 DSA problems across different platforms such as LeetCode, GeeksforGeeks, Coding Ninjas, Codeforces .
                            </p>
                            <p className='exp__head'>
                                Secured a Top 10 position in the INAE-SERB Youth Conclave 2022 Hackathon, competing against 300 participants in an event organized by IIT Jodhpur.
                            </p>
                            <p className='p__color codingProf_head'>
                                Coding Profile
                            </p>

                            <div className='row'>

                                <div className='col__3'>
                                    <div>
                                        <img src={leetCode} className='logo_img' />
                                        <p> <a href='https://leetcode.com/junaid007/' target='__blank'>LeetCode</a> </p>
                                    </div>


                                </div>


                                <div className='col__3'>
                                    <div>
                                        <img src={gfg} className='logo_img' />
                                        <p> <a href='https://auth.geeksforgeeks.org/user/junaidiiitk' target='__blank'> GeeksforGeeks </a> </p>
                                    </div>
                                </div>


                                <div className='col__3'>
                                    <div>
                                        <img src={codingNinja} className='logo_img' />
                                        <p> <a href='https://www.codingninjas.com/studio/profile/72f3f3ee-89d7-4649-a3df-431957820668' target='__blank'> Coding Ninjas </a>  </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </h1>
                </div>
            </div>
            {/* up yo top button */}
            <div className="up__to__top__btn">
                <a href="#" className="bottom__to__top">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-up white"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                    </svg>
                </a>
            </div>



            {/* <div id='Services'></div> */}
        </div>
    )
}

export default Other
