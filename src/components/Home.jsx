import { Link } from 'react-router-dom'
import '../style/styles.css'

export const Home = () => {
    return (
        <div className="home">

            <div className='presentation'>
                <h1>Hi! My name is Kimi, and welcome to my Portfolio</h1>
                <span>Here you will be able to find my most advanced projects and the ones I learned the most on. Hope you enjoy!</span>
            </div>

            <h3>Languages I learned and use almost daily: </h3>

            <div className="languages">
                <a href="https://en.wikipedia.org/wiki/HTML5"><img className='html' src='html5.svg' alt='html5 svg'/></a>
                <a href="https://en.wikipedia.org/wiki/CSS"><img className='css' src='css3-alt.svg' alt='css3 svg' /></a>
                <a href="https://en.wikipedia.org/wiki/JavaScript"><img className='js' src='js.svg' alt='JavaScript svg'/></a>
                <a href="https://sass-lang.com/"><img className='sass' src='sass.svg' alt='sass svg'/></a>
                <a href="https://react.dev/"><img className='react' src='react.svg' alt='react svg'/></a>
                <a href="https://vitejs.dev/"><img className='vite' src='vite.svg' alt='vite svg'/></a>
                <a href="https://www.php.net/"><img className='php' src='php.svg' alt='php svg'/></a>
                <a href="https://www.typescriptlang.org/"><img className='typescript' src='typescript.png' alt='typescript png'/></a>
                
            </div>

            <h3>Some of my projects: </h3>

            <div className="projects">
                <Link to='/CollectionProject'>
                    <div className="collectionProject">
                        <img src="collectionProject.png" alt="Collection Project png" />
                        <span className='littleDetail'>This project was one of the first if not the first true solo project. I used HTML and CSS as well as JavaScript to make it.</span>
                        <div className="languagesUsed">
                            <span>Languages Used: </span><br />
                            <img className='html' src='html5.svg' alt='html5 svg'/>
                            <img className='css' src='css3-alt.svg' alt='css3 svg' />
                            <img className='js' src='js.svg' alt='JavaScript svg'/>
                        </div>
                    </div>
                </Link>
                <Link to='MovieBrowser'>
                    <div className="movieBrowser">
                        <img src="movieBrowser.png" alt="Movie Browser png" />
                        <span className='littleDetail'>This project was one of the first solo project we had to make using React. In this one, I used React and Vite.</span>
                        <div className="languagesUsed">
                            <span>Languages Used: </span><br />
                                <img className='react' src='react.svg' alt='react svg'/>
                                <img className='vite' src='vite.svg' alt='vite svg'/>
                                <img className='css' src='css3-alt.svg' alt='css3 svg' />
                        </div>
                    </div>
                </Link>
                <Link to='DarkKitchen'>
                    <div className="darkKitchen">
                        <img src="darkKitchen.png" alt="Dark Kitchen png" />
                        <span className='littleDetail'>In this project, we had to use JavaScript to be able to do various things such as a localStorage or a Dark Mode.</span>
                        <div className="languagesUsed">
                            <span>Languages Used: </span><br />
                            <img className='html' src='html5.svg' alt='html5 svg'/>
                            <img className='js' src='js.svg' alt='JavaScript svg'/>
                            <img className='sass' src='sass.svg' alt='sass svg'/>
                        </div>
                    </div>
                </Link>
                <Link to='ProjectPlanner'>
                    <div className="projectPlanner">
                        <img src="projectPlanner.png" alt="Project Planner png" />
                        <span className='littleDetail'>In this project, we had to create a project planner in which you could see the time remaining and the tasks in order of importance.</span>
                        <div className="languagesUsed">
                            <span>Languages Used: </span><br />
                            <img className='html' src='html5.svg' alt='html5 svg'/>
                            <img className='js' src='js.svg' alt='JavaScript svg'/>
                            <img className='sass' src='sass.svg' alt='sass svg'/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}