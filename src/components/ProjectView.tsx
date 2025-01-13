import { Project } from "../models/Project"

interface Props {
    project:Project
}


export const ProjectView = ({project}:Props)  => {

    return <div className="project">
        {project.name}
        {project.tasks.map(task => <div key={'project-' + project.id + '-task-' + task.id}>{task.name}</div>)}
    </div>
    
}