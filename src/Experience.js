import React from 'react'
import './Experience.css'
import aboutImg from './img/about.jpg'

function Experience() {
    // up to top buttom 
    window.addEventListener('scroll', function () {
        const UpToTop = document.querySelector('a.bottom__to__top');
        //console.log(UpToTop);
        UpToTop.classList.toggle('active', window.scrollY > 0)
    })
    return (
        <div className='about component__space' id='Experience'>
            <div className='container' >
                <div className='row'>
                    {/* <div className='col__2'>
                        <img src={aboutImg} className='about__img' />
                    </div> */}
                    {/* <div className='col__2'> */}
                    <h1 className='about__heading'>
                        Work Experience
                        <div className='about__meta'>
                            <p className=' p__color'>
                                Full Stack Developer | MERN Stack Developer | Fundraiser
                            </p>
                            <div className='exp__box'>
                                <p className='exp__head'>
                                    Full Stack Developer at Beta Testers (June 2022 - December 2022)
                                </p >
                                <p className='content__exp'>  Led WaterDrop app backend development, enabling bottle transactions for customers and suppliers. Optimized code, debugged applications, and collaborated with the team for efficient updates. Developed a full-stack dashboard for order, revenue, user, supplier, and product details using ReactJS, NodeJS, Express, MongoDB, and deployed on Google Cloud Platform via GitHub Pipeline Actions (CI/CD). The app boasts 8000+ downloads on Play Store.
                                </p>
                            </div>

                            <div className='exp__box'>
                                <p className='exp__head'>
                                    MERN Stack Developer at QANVUS Technologies (April 2022 - June 2022)
                                </p>

                                <p className='content__exp'>  Designed and implemented efficient REST APIs using HTML, CSS, JavaScript, React.js, and Node.js for seamless data retrieval. Collaborated with a team of 5 developers to resolve software bugs, created a responsive dashboard for user and supplier details, and submitted reports to support project success.
                                </p>
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

export default Experience
