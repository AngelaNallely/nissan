import {Schema, model } from "mongoose";

export const lider = new Schema({
    name:{
        type:String
    },
    time:{
        type:String
    }

})

export const lideres = new model('lideres', lider)