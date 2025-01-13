

export type ProjectTask = {
    name: string
    id: number
    description: string
    status: ProjectTaskStatus,
    createdAt: Date,
    updatedAt: Date | undefined
}

export enum ProjectTaskStatus {
    TODO, IN_PROGRESS, DONE, SHELVED
}