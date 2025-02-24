import { Link } from 'react-router-dom'
import '../style/styles.css'
import { motion } from "framer-motion";
import { FramerMagnetic } from './FramerMagnetic';

export const Home = () => {
    return (
        <motion.div initial={{ opacity : 0 }} whileInView={{ opacity : 1 }} transition={{ duration : 2 }} className="home">

            <div className='presentation'>
                <h1>Hi! My name is Kimi, and welcome to my Portfolio</h1>
                <span>Here you will be able to find my most advanced projects and the ones I learned the most on. Hope you enjoy!</span>
            </div>

            <h3>Languages I learned: </h3>

            <motion.div className="languages">
                <FramerMagnetic>
                    <a href="https://en.wikipedia.org/wiki/HTML5" target='blank'><img className='html' src='html5.svg' alt='html5 svg'/></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://en.wikipedia.org/wiki/CSS" target='blank'><img className='css' src='css3-alt.svg' alt='css3 svg' /></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://en.wikipedia.org/wiki/JavaScript" target='blank'><img className='js' src='js.svg' alt='JavaScript svg'/></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://sass-lang.com/" target='blank'><img className='sass' src='sass.svg' alt='sass svg'/></a>
                </FramerMagnetic>

                <FramerMagnetic>
                    <a href="https://react.dev/" target='blank'><img className='react' src='react.svg' alt='react svg'/></a>
                </FramerMagnetic>

                <FramerMagnetic>
                    <a href="https://vitejs.dev/" target='blank'><img className='vite' src='vite.svg' alt='vite svg'/></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://www.php.net/" target='blank'><img className='php' src='php.svg' alt='php svg'/></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://www.typescriptlang.org/" target='blank'><img className='typescript' src='typescript.png' alt='typescript png'/></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target='blank'><img className='C#' src='cSharp.png' alt='C# png'/></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://git-scm.com/" target='blank'><img className='git' src='git.png' alt='Git png'/></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://angular.io" target='blank'><img className='angular' src='angular.avif' alt='Angular avif'/></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://www.java.com" target='blank'><img className='java' src='java.webp' alt='Java png'/></a>
                </FramerMagnetic>
            </motion.div>

            <h3>Some of my projects: </h3>

            <div className="projects">
                
                <Link to='/AngularJavaAPIProject' className="angularTutorialLink">
                    <motion.div initial={{ x : -200, opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.9, type : 'spring' }} className="angularTuto">
                        <img src="angularJavaCollection.png" alt="Angular and Java collection png" />
                        <span className='littleDetail'>In this project, I used angular and Java to create an API and interact with it to create cards.</span>
                        <div>
                            <span>Languages Used: </span><br />
                            <div className="languagesUsed">
                                <img className='angular' src='angular.avif' alt='Angular svg'/>
                                <img className='java' src='java.webp' alt='Java svg'/>
                            </div>
                        </div>
                    </motion.div>
                </Link>
                <Link to='/CollectionProject' className="collectionProjectLink">
                    <motion.div 
                        initial={{ x : 200, opacity : 0 }} 
                        whileInView={{ x : 0, opacity : 1 }} 
                        transition={{ duration : 0.9, type : 'spring' }} 
                        className="collection">

                        <img src="collectionProject.png" alt="Collection Project png" />
                        <span className='littleDetail'>This project was one of the first if not the first true solo project. I used HTML and CSS as well as JavaScript to make it.</span>
                        <div>
                            <span>Languages Used: </span><br />
                            <div className="languagesUsed">
                            <img className='html' src='html5.svg' alt='html5 svg'/>
                            <img className='css' src='css3-alt.svg' alt='css3 svg' />
                            <img className='js' src='js.svg' alt='JavaScript svg'/>
                            </div>
                        </div>
                    </motion.div>
                </Link>
                <Link to='/MovieBrowser' className="movieBrowserLink">
                    <motion.div initial={{ x : -200, opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.9, type : 'spring' }} className="movieBrowser">
                        <img src="movieBrowser.png" alt="Movie Browser png" />
                        <span className='littleDetail'>This project was one of the first solo project we had to make using React. In this one, I used React and Vite.</span>
                        <div>
                            <span>Languages Used: </span><br />
                            <div className="languagesUsed">
                                <img className='react' src='react.svg' alt='react svg'/>
                                <img className='vite' src='vite.svg' alt='vite svg'/>
                                <img className='css' src='css3-alt.svg' alt='css3 svg' />
                            </div>
                        </div>
                    </motion.div>
                </Link>
                <Link to='/DarkKitchen' className="darkKitchenLink">
                    <motion.div initial={{ x : 200, opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.9, type : 'spring' }} className="darkKitchen">
                        <img src="darkKitchen.png" alt="Dark Kitchen png" />
                        <span className='littleDetail'>In this project, we had to use JavaScript to be able to do various things such as a localStorage or a Dark Mode.</span>
                        <div>
                            <span>Languages Used: </span><br />
                            <div className="languagesUsed">
                                <img className='html' src='html5.svg' alt='html5 svg'/>
                                <img className='js' src='js.svg' alt='JavaScript svg'/>
                                <img className='sass' src='sass.svg' alt='sass svg'/>
                            </div>
                        </div>
                    </motion.div>
                </Link>
                <Link to='/ProjectPlanner' className="projectPlannerLink">
                    <motion.div initial={{ x : -200, opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.9, type : 'spring' }} className="projectPlanner">
                        <img src="projectPlanner.png" alt="Project Planner png" />
                        <span className='littleDetail'>In this project, we had to create a project planner in which you could see the time remaining and the tasks in order of importance.</span>
                        <div>
                            <span>Languages Used: </span><br />
                            <div className="languagesUsed">
                                <img className='html' src='html5.svg' alt='html5 svg'/>
                                <img className='js' src='js.svg' alt='JavaScript svg'/>
                                <img className='sass' src='sass.svg' alt='sass svg'/>
                            </div>
                        </div>
                    </motion.div>
                </Link>
                <Link to='/SuperCapsule' className="superCapsuleLink">
                    <motion.div initial={{ x : -200, opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.9, type : 'spring' }} className="superCapsule">
                        <img src="HomeScreenSuperCapsule.png" alt="Super Capsule png" />
                        <span className='littleDetail'>In this project, I gave myself the challenge to create a basic platformer.</span>
                        <div>
                            <span>Languages Used: </span><br />
                            <div className="languagesUsed">
                                <img className='csharp' src='cSharp.png' alt='C# svg'/>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    )
}