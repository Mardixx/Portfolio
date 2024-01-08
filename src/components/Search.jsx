import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../style/styles.css'

export const Search = () => {
    
    const [value, setValue] = useState();

    

    const changeHandler = (event) => {
        setValue(event.target.value);
    }

    switch(value) {
        case "collectionOption":
            return (
                <div className="searched">
                    <div className="select">
                        <select name="projectsSearch" id="" onChange={changeHandler}>
                            <option value="chooseOption" defaultChecked>--Choose a Project--</option>
                            <option value="collectionOption">Collection Project</option>
                            <option value="movieBrowserOption">Movie Browser Project</option>
                            <option value="darkKitchenOption">Dark Kitchen Project</option>
                            <option value="projectPlannerOption">Project Planner Project</option>
                        </select>
                    </div>
                    <div className="projects">
                    <Link to='/CollectionProject' className="collectionProjectLink">
                        <motion.div 
                            initial={{ x : 200, opacity : 0 }} 
                            whileInView={{ x : 0, opacity : 1 }} 
                            transition={{ duration : 0.9, type : 'spring' }} 
                            className="collectionProject">

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
                    </div>
                </div>
            )
            break;
        case "movieBrowserOption":
            return (
                <div className="searched">
                    <div className="select">
                        <select name="projectsSearch" id="" onChange={changeHandler}>
                            <option value="chooseOption" defaultChecked>--Choose a Project--</option>
                            <option value="collectionOption">Collection Project</option>
                            <option value="movieBrowserOption">Movie Browser Project</option>
                            <option value="darkKitchenOption">Dark Kitchen Project</option>
                            <option value="projectPlannerOption">Project Planner Project</option>
                        </select>
                    </div>
                    <div className="projects">
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
                    </div>
                </div>
            )
            break;
        case "darkKitchenOption":
            return (
                <div className="searched">
                    <div className="select">
                        <select name="projectsSearch" id="" onChange={changeHandler}>
                            <option value="chooseOption" defaultChecked>--Choose a Project--</option>
                            <option value="collectionOption">Collection Project</option>
                            <option value="movieBrowserOption">Movie Browser Project</option>
                            <option value="darkKitchenOption">Dark Kitchen Project</option>
                            <option value="projectPlannerOption">Project Planner Project</option>
                        </select>
                    </div>
                    <div className="projects">
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
                    </div>
                </div>
            )
            break;
        case "projectPlannerOption":
            return (
                <div className="searched">
                    <div className="select">
                        <select name="projectsSearch" id="" onChange={changeHandler}>
                            <option value="chooseOption" defaultChecked>--Choose a Project--</option>
                            <option value="collectionOption">Collection Project</option>
                            <option value="movieBrowserOption">Movie Browser Project</option>
                            <option value="darkKitchenOption">Dark Kitchen Project</option>
                            <option value="projectPlannerOption">Project Planner Project</option>
                        </select>
                    </div>
                    <div className="projects">
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
                    </div>
                </div>
            )
            break;
        default: 
            return (
                <div className="searched">
                    <h1>Here you can search for a specific project</h1>
                    <div className="select">
                        <select name="projectsSearch" id="" onChange={changeHandler}>
                            <option value="chooseOption" defaultChecked>--Choose a Project--</option>
                            <option value="collectionOption">Collection Project</option>
                            <option value="movieBrowserOption">Movie Browser Project</option>
                            <option value="darkKitchenOption">Dark Kitchen Project</option>
                            <option value="projectPlannerOption">Project Planner Project</option>
                        </select>
                    </div>
                </div>
            )
            break;
    }
}