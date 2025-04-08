import mongoose, { Schema } from "mongoose";

const subtaskSchema = new Schema (
    {

       title : {
        type : String,
        trim: true,
        required : true,
       },
       task:{
      type: Schema.Types.ObjectId,
        ref : "Task"
       },
       createdBy :{
          type: Schema.Types.ObjectId,
        ref : "User"
       },
       isCompleted:{
        type:Boolean,
        default: false
       }
    },
    {
        timestamps: true
    }
)
export const Subtask = mongoose.model("Subtask", subtaskSchema)