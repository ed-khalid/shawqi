import { useState } from "react";
import { Project, ProjectCategory } from "../models/Project";

export interface Props {

    onSaveProject: (project:Project) => void
} 


export const AddProject = ({onSaveProject}: Props) => {

    const [showNewProject, setShowNewProject] = useState(false);
    const [newProjectName, setNewProjectName] = useState('')
    const [newProjectCategory, setNewProjectCategory] = useState('CODE')
     

    const addProject = () => {
        setShowNewProject(!showNewProject)
    }
    const saveProject = () => {
        const project:Project = {
            name: newProjectName,
            id: -1,
            category: newProjectCategory as unknown as ProjectCategory,
            tasks: [],
            thumbnail: ''
        }
        onSaveProject(project)
        setShowNewProject(false)
    }


    return <div>
        <button onClick={addProject}>Add Project</button>
        {showNewProject && <div id="new-project-form" >
            <label>Title</label>
            <input onChange={(e) => setNewProjectName(e.target.value)} type="text" placeholder="Project Title" />
            <label>Project Category</label>
            <select value={newProjectCategory} onChange={(e) => setNewProjectCategory(e.target.value)}>
                <option value="CODE">CODE</option>
                <option value="ART">ART</option>
                <option value="DIY">DIY</option>
                <option value="MUSIC">MUSIC</option>
                <option value="VIDEO">VIDEO</option>
            </select> 
            <button onClick={saveProject}>Save</button>
            </div>}

    </div>

}