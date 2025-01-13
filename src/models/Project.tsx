import { ProjectTask } from "./ProjectTask"


export type Project = {
    name: string
    id: number
    category:ProjectCategory
    thumbnail: string
    tasks: Array<ProjectTask>
    createdAt: Date
    updatedAt: Date | undefined
}

export enum ProjectCategory {
    CODE, ART, DIY, MUSIC, CAREER
}