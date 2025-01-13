import { useEffect, useState } from 'react'
import './App.css'
import { AddProject } from './components/AddProject'
import { Projects } from './components/Projects'
import { Project } from './models/Project'
import { Timeline } from './models/Timeline'
import { TimelineView } from './components/TimelineView'
import { ProjectTask } from './models/ProjectTask'

function App() {

  useEffect(() => {
    const projectsRaw = localStorage.getItem('projects') || '[]' 
    const projects:Array<Project> = JSON.parse(projectsRaw)  
    const timelineRaw = localStorage.getItem('timeline') || '{}'
    const timeline:Timeline = JSON.parse(timelineRaw)  
    setProjects(projects)
    setTimeline(timeline)
  }, [])

  const [projects, setProjects] = useState<Array<Project>>([])
  const [timeline, setTimeline] = useState<Timeline>({ days: []})

  const updateProject = (project:Project, task:ProjectTask) => {
    console.log('update project')
    project.tasks.push(task)
    project.updatedAt = new Date()
    const projectsRaw = localStorage.getItem('projects') || '[]' 
    const projects:Array<Project> = JSON.parse(projectsRaw)  
    const newProjects = projects.filter(e => e.id !== project.id)
    newProjects.push(project)
    newProjects.sort((a, b) => a.id - b.id)
    setProjects(newProjects)
    localStorage.setItem('projects', JSON.stringify(newProjects))
  } 

  const saveProject = (project: Project) => {

    const projectsRaw = localStorage.getItem('projects') || '[]' 
    const projects:Array<Project> = JSON.parse(projectsRaw)  
    if (projects.find(e => e.name === project.name)) {
      alert('Project already exists')
      return
    } else {
      const newProject = {
        name: project.name, 
        id: projects.length + 1, 
        category: project.category, 
        thumbnail: '', 
        tasks: [],
        createdAt: new Date(),
        updatedAt: project.updatedAt 
      }
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
        <Projects projects={projects} onUpdateProject={updateProject} /> 
        </div> 
        <div id="timeline-wrapper">
          <TimelineView timeline={timeline} />
        </div>
        <div id="footer"></div>
    </div>
  )
}

export default App

