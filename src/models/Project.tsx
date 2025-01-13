import { ProjectTask } from "./ProjectTask"


export type Project = {
    name: string
    id: number
    category:ProjectCategory
    thumbnail: string
    tasks: Array<ProjectTask>
}

export enum ProjectCategory {
    CODE, ART, DIY, MUSIC
}