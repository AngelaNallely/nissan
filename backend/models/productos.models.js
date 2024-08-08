import { model } from "mongoose";
import { descuento } from "./empleados.models.js";
export const productos = new model('productos', descuento)
