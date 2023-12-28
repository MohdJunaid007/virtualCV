import React from 'react'
import './Project.css'
import TopicTale from './img/topic_Tale.jpg';
import JobSeek from './img/job_seek.jpg'
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from './img/portfolio-5.jpg';

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Project</h1>
                <p className="heading p__color">
                    There are some of my small projects
                </p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={TopicTale} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h4 className="project__text">Topic Tales</h4>
                                <h6 className="project__text desc">Developed a full-stack blog application with user authentication, post management (create, update, delete), category-based viewing, commenting, and image upload functionality.</h6>

                                <a href="https://topictales479.onrender.com/" target="_blank" className="project__btn">Visit live</a>
                                <a href="https://github.com/MohdJunaid007/TopicTales-frontEnd" target="_blank" className="project__btn">Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={JobSeek} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h4 className="project__text">Job Seeker</h4>
                                <h6 className="project__text desc">
                                    Developed a React Native app for job search, integrated with JSearch Rapid API for seamless access to job data. Users can explore full-time, part-time, and internship opportunities, view detailed job descriptions, and apply effortlessly.
                                </h6>

                                <a href="https://drive.google.com/drive/folders/1REvJkEqdlUpBPX7ASdYab91lzw7u1gWD?usp=sharing" target="_blank" className="project__btn">Download app</a>
                                <a href="https://github.com/MohdJunaid007/JobSeeker" target="_blank" className="project__btn">Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="" className="project__img" />
                                    {/* <img src="https://th.bing.com/th/id/R.95a76a48da38a66a0e28a7b9637b01c1?rik=oVtSYee6TtDDIg&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f63%2f89%2fHNRDIv.jpg&ehk=FkWErsagI0cru5Dj7AhtmXPQB%2f%2fePdu5B9dymmOh0L4%3d&risl=&pid=ImgRaw&r=0" alt="" className="project__img" /> */}
                                    {/* https://th.bing.com/th/id/R.95a76a48da38a66a0e28a7b9637b01c1?rik=oVtSYee6TtDDIg&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f63%2f89%2fHNRDIv.jpg&ehk=FkWErsagI0cru5Dj7AhtmXPQB%2f%2fePdu5B9dymmOh0L4%3d&risl=&pid=ImgRaw&r=0 */}
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h4 className="project__text">Popcorn Play</h4>
                                <h6 className="project__text desc">
                                    React.js web app integrated with TMDB API, offering real-time info on trending, upcoming, and popular movies. Explore movie details, including IMDB ratings.
                                </h6>
                                <a href="https://movie-m22l.onrender.com/" target="_blank" className="project__btn">Visit Live</a>
                                <a href="https://github.com/MohdJunaid007/Movie_App" target="_blank" className="project__btn">Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h4 className="project__text">BOOKSHELF</h4>
                                <h6 className="project__text desc">Responsive React.js website showcasing a collection of books, emphasizing good UI/UX design. Built with HTML, CSS, JavaScript, React.js, and Bootstrap.</h6>
                                <a href="https://mohdjunaid007.github.io/reactlivewebsite/" target="_blank" className="project__btn">Visit Live</a>
                                <a href="https://github.com/MohdJunaid007/reactlivewebsite" target="_blank" className="project__btn">Source Code</a>
                            </div>
                        </div>
                    </div>







                    {/* <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h4 className="project__text">Goku vs Vegeta</h4>
                                <h6 className="project__text">game created by using javaScript</h6>
                                <a href="https://mohdjunaid007.github.io/Goku_Vs_Vegeta/" target="_blank" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div> */}



                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h4 className="project__text"> Portfolio </h4>
                                <h6 className="project__text desc">Built with React.js, Bootstrap, CSS, and HTML, highlighting skills, projects, and experiences in a visually appealing and user-friendly design.</h6>
                                <a href="https://mohdjunaid007.github.io/portfolio2/" target="_blank" className="project__btn">View Details</a>
                                <a href="https://github.com/MohdJunaid007/portfolio2" target="_blank" className="project__btn">Source Code</a>
                            </div>
                        </div>
                    </div>


                    {/* <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#"  target="_blank" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div> */}

                    {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn"><a href="https://github.com/MohdJunaid007"  target="_blank" className="project__btn">View more</a></button>
             </div> */}

                </div>
            </div>
        </div>
    )
}

export default Project



