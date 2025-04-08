import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema (
    {
        title:{
            type:String,
            required:true,
            trim:true,
        },
        project:{
            type:Schema.Types.ObjectId,
            ref:"project"
        },
        isCompleted:{
            type:Boolean,
            default: true
        },
        createdBy:{
            type:Schema.Types.ObjectId,
            ref:"user"
        },
        createdAt:{
            type:Date
        }
    },{
        timestamps:true,
    }
)

export const Note = mongoose.model("Note", NoteSchema)