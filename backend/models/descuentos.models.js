import { Schema, model } from "mongoose";

export const descuento = new Schema({
    brand:{
        type:String
    },
    snum:{
        type:Number
    },
    price:{
        type:Number
    }
})

export const descuentos = new model('descuentos', descuento)