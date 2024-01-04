export const ProjectPlanner = () => {
    return (
        <div className="projectPlanner">
            <h1>Project Planner</h1>
            <span>I present to you one of the last team projects. We used mostly JavaScript to implement things.
            </span>
            <span>In this project, we had to create a project planner in which you would see tasks to do and done and the time remaining.</span>
            <h3>Some screenshots and video: </h3>

            <img src="projectPlannerPic1.png" alt="Project Planner png" />
            <img src="projectPlannerPic2.png" alt="Project Planner png" />

            <div className="videoProjectPlanner">
                <video width={"300vw"} controls>
                    <source src="public/ProjectPlannerVid.webm" type="video/webm"/>
                </video>
                <span>In this short video, you can see how to add a project, tasks and how much time you have left.</span>
            </div>
            <a href="https://okly2023.github.io/Project_Planner/" target='blank'>Deployed project if you want to try for yourself.</a>
        </div>
    )
}