import { Project } from "../models/Project"
import { ProjectTask } from "../models/ProjectTask"
import { ProjectView } from "./ProjectView"

interface Props {
    projects: Array<Project>
    onUpdateProject:(project:Project, task:ProjectTask) => void
}

export const Projects = ({projects, onUpdateProject}: Props) => {

    return <div id="projects">
        {projects.map(project => <ProjectView key={'project-view-' + project.id} project={project} onUpdateProject={onUpdateProject}/>) }
    </div>
}