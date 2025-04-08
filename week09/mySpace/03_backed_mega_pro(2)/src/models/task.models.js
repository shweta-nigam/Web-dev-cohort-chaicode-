import mongoose, { Schema } from "mongoose";
import { taskOptionsArr, taskOptionsObj } from "../utils/constants";

const taskSchema = new Schema (
    {
        title:{
            type: Schema.Types.ObjectId,
            trim: true,
            required:true,
        },
        description:{
            type: String,
        },
        createdBy:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        isCompleted:{
            type: Boolean,
            default:false, 
        },
        assignedBy:{
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        assignedTo:{
            type: Schema.Types.ObjectId,
            ref: "User", 
        },
        status:{
            type:String,
            enum: taskOptionsArr,
            default: taskOptionsObj.todo,
        }
    },
    {
        timestamps: true
    }
)

export const Task = mongoose.model("Task", taskSchema)
