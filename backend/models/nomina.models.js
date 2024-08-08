import { Schema, model } from "mongoose";

export const nomina = new Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    medic:{
        type:String

    }
})

export const nominas = new model('nominas', nominas)