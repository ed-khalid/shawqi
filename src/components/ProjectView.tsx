import { useState } from "react"
import { Project } from "../models/Project"
import { ProjectTask, ProjectTaskStatus } from "../models/ProjectTask"

interface Props {
    project:Project
    onUpdateProject:(project:Project, task:ProjectTask) => void
}


export const ProjectView = ({project, onUpdateProject}:Props)  => {

    const [showNewTask, setShowNewTask] = useState(false);
    const [newTaskName, setNewTaskName] = useState('')

    const onSaveTask = () => {
        console.log('save task')
        const task:ProjectTask = {
            id: -1,
            name: newTaskName,
            description: '',
            status: ProjectTaskStatus.TODO ,
            createdAt: new Date(),
            updatedAt: undefined

        }
        onUpdateProject(project, task)
    } 
     


    return <div className={"project"} >
        <div className={"project-title " + project.category.toString().toLowerCase()}>{project.name}</div> 
        <button onClick={() => setShowNewTask(!showNewTask) } className="add-task-button" >Add Task</button>
        {showNewTask && <div className="new-task-form" >
            <label>Name:</label>
            <input className="new-task-name" onChange={(e) => setNewTaskName(e.target.value) } value={newTaskName} />
            <button onClick={onSaveTask} className="save-task-button">Save</button> 
        </div>}
            <ul className="tasks-wrapper">
          {project.tasks.map(task => 
          <li className="project-task"  key={'project-' + project.id + '-task-' + task.id}>{task.name}</li>
          )}
            </ul>
            <div className={"project-category " +  project.category.toString().toLowerCase()}>{project.category}</div>
    </div>
    
}