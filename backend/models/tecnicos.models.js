import {Schema, model } from "mongoose";

export const tecnico = new Schema({
    name:{
        type:String
    },
    puesto:{
        type:String
    }
})

export const tecnicos = new model('tecnicos', tecnico)