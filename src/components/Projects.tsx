import { Project } from "../models/Project"
import { ProjectView } from "./ProjectView"

interface Props {
    projects: Array<Project>
}

export const Projects = ({projects}: Props) => {

    return <div id="projects">
        {projects.map(project => <ProjectView key={'project-view-' + project.id} project={project}/>) }
    </div>
}