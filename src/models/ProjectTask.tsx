

export type ProjectTask = {
    name: string
    id: number
    description: string
    status: ProjectTaskStatus
}

export enum ProjectTaskStatus {
    TODO, IN_PROGRESS, DONE, SHELVED
}