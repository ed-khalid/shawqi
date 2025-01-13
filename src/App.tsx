import { useEffect, useState } from 'react'
import './App.css'
import { AddProject } from './components/AddProject'
import { Projects } from './components/Projects'
import { Project } from './models/Project'

function App() {

  useEffect(() => {
    const projectsRaw = localStorage.getItem('projects') || '[]' 
    const projects:Array<Project> = JSON.parse(projectsRaw)  
    setProjects(projects)
  }, [])

  const [projects, setProjects] = useState<Array<Project>>([])

  const saveProject = (project: Project) => {

    const projectsRaw = localStorage.getItem('projects') || '[]' 
    const projects:Array<Project> = JSON.parse(projectsRaw)  
    if (projects.find(e => e.name === project.name)) {
      alert('Project already exists')
      return
    } else {
      const newProject = {name: project.name, id: projects.length + 1, category: project.category, thumbnail: '', tasks: []}
      projects.push(newProject)
      setProjects(projects)
      localStorage.setItem('projects', JSON.stringify(projects))
    }
  }


  return (
    <div className="layout" >
      <div id="header">
        <h2>Shawqi</h2>
        </div>
        <div id="menu">

        </div>
      <div id="projects-wrapper">
        <AddProject onSaveProject={saveProject} />
        <Projects projects={projects} /> 
        </div> 
        <div id="timeline"></div>
        <div id="footer"></div>
    </div>
  )
}

export default App
