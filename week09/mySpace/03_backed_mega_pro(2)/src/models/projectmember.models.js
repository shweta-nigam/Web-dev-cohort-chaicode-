import mongoose, { Schema } from "mongoose";
import { userOptionsArr, userOptionsObj } from "../utils/constants";

const ProjectMemberSchema = new Schema (
    {
        name:{
            type:String,
        },
        role: {
            enum: userOptionsArr,
            default : userOptionsObj.user,
        },
        project: {
            type: Schema.Types.ObjectId,
        }
    },
    {
        timestamps:true
    }
)

export const ProjectMember = mongoose.model("ProjectMember", ProjectMemberSchema)