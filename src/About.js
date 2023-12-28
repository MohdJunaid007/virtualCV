import React from 'react'
import './About.css'
import aboutImg from './img/about.jpg'

function About() {
    // up to top buttom 
    window.addEventListener('scroll', function () {
        const UpToTop = document.querySelector('a.bottom__to__top');
        //console.log(UpToTop);
        UpToTop.classList.toggle('active', window.scrollY > 0)
    })
    return (
        <div className='about component__space' id='About'>
            <div className='container' >
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImg} className='about__img' />
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>
                            About Me
                            <div className='about__meta'>

                                <p className='about__text p__color'>
                                    Mohd Junaid is an exceptional individual known for his unwavering work ethic, punctuality, and remarkable intelligence. A dedicated tech enthusiast, he stays updated with the latest advancements. Beyond work, he's an avid chess player, enjoys badminton, and explores new cultures through travel, showcasing a zest for life's diverse experiences. He is also hardworking, persistent, and a problem solver. He doesn't give up easily and embraces challenges with a "never give up" attitude. Additionally, he considers himself a fast learner, further highlighting his tenacious spirit in tackling obstacles.

                                </p>
                                {/* <p className='about__text p__color'>
                                    I love play table-tenis, chess and badminton.
                                </p> */}
                                <div className='about__button d__flex align__items__center cv'>
                                    <a href='jdcv.pdf' download='jdcv.pdf' ><button className='about btn pointer cv'>Download CV</button> </a>
                                    <a href='mailto:junaid.iiitk@gmail.com'><button className='about btn pointer'> Hire Me</button> </a>
                                    <a></a>
                                </div>

                            </div>

                        </h1>

                    </div>

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

export default About
