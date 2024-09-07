import { model, Schema, Types } from "mongoose";
import { CityInterface } from '@/domain/City';
import { MODEL } from "../models";



const citySchema = new Schema<CityInterface>({
    city: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
    virtuals: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})

citySchema.virtual('id').get(function () {
    return this._id;
});

const City = model(MODEL.CITY, citySchema)

export default City