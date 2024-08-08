import { model } from "mongoose";
import { tecnico } from "./empleados.models.js";
export const entrenadores = new model('entrenadores', tecnico)
