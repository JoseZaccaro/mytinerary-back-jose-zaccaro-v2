export interface Service<T> {
    create(item: T): Promise<T>
    getOneById(id: unknown): Promise<T>
    getAll(): Promise<T[]>
    deleteOneById(id: unknown): Promise<void>
    updateOneById(id: unknown, item: T): Promise<T>
}