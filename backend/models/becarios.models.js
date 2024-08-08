import { model } from "mongoose";
import { empleado } from "./empleados.models.js";
export const becarios = new model('becarios', empleado)
