import { model, Schema, Types } from "mongoose";
import { MODEL } from "../models";
import { UserInterface } from "@/domain/User";



const userSchema = new Schema<UserInterface>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
    country: { type: String, default: "No country" },
    googleFlag: { type: Boolean, default: false },
    likedItinerariesId: { type: [Types.ObjectId], default: [] },
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

userSchema.virtual('id').get(function () {
    return this._id;
});

const User = model(MODEL.USER, userSchema)

export default User