
export interface Repository<T> {
    save(item: T): Promise<T>
    findById(id: unknown): Promise<T>
    findAll(): Promise<T[]>
    deleteById(id: unknown): Promise<void>
    findByIdAndUpdate(id: unknown, item: T): Promise<T>
}