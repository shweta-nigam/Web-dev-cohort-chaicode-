import mongoose , {Schema} from "mongoose";


const ProjectSchema = new Schema(
    {

        title:{
            type: String,
             trim   : true,
             required: true,
        },
       user:{
        type: Schema.Types.ObjectId,
        ref: "User"
       },
       description:{
        type:String,
        required:true,
       },
       isCompleted:{
        type:Boolean,
        default: false,
       },


    },
    {
        timestamps: true
    }
)

export const Project = mongoose.model("Project", ProjectSchema)