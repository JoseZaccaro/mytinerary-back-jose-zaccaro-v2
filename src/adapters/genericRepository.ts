import { Repository } from "@/ports/repository";
import { Model, UpdateQuery } from "mongoose";

class GenericRepository<T> implements Repository<T> {
    private _Model: Model<T>;
    private _modelDTO: any;
    constructor(model: Model<T>, modelDTO: any) {
        this._Model = model
        this._modelDTO = modelDTO;
    }

    async save(item: T) {
        try {
            const newItem = await this._Model.create(item)

            return this._modelDTO(newItem)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error(`Error in ${this._Model.modelName} repository`);
        }
    }
    async findById(id: string) {
        try {
            const findedItem = await this._Model.findById(id)

            if (!findedItem) throw new Error(this._Model.modelName + " not found")

            return this._modelDTO(findedItem)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error(`Error in ${this._Model.modelName} repository`);
        }
    }
    async findAll() {
        try {
            const findedItems = await this._Model.find()

            return findedItems.map(this._modelDTO) as T[]
        } catch (error) {
            console.log("Error: " + error);
            throw new Error(`Error in ${this._Model.modelName} repository`);
        }
    }
    async deleteById(id: string) {
        try {
            const deletedItem = await this._Model.findByIdAndDelete(id)
            if (!deletedItem) throw new Error(this._Model.modelName + " not found")
        } catch (error) {
            console.log("Error: " + error);
            throw new Error(`Error in ${this._Model.modelName} repository`);
        }

    }
    async findByIdAndUpdate(id: string, item: T) {
        try {
            const updatedItem = await this._Model.findByIdAndUpdate(id, item as UpdateQuery<T>, { new: true })
            if (!updatedItem) throw new Error(this._Model.modelName + " not found")
            return this._modelDTO(updatedItem)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error(`Error in ${this._Model.modelName} repository`);
        }
    }
}

export { GenericRepository }