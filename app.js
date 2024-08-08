import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import test_becarios from "./backend/controllers/becarios.controllers.js"
import test_descuentos from "./backend/controllers/descuentos.controllers.js"
import test_empleados from "./backend/controllers/empleados.controllers.js"
import test_lideres from "./backend/controllers/lideres.controllers.js"
import test_nomina from "./backend/controllers/nomina.controllers.js"
import test_productos from "./backend/controllers/productos.controllers.js"
import test_tecnicos from "./backend/controllers/tecnicos.controllers.js"

dotenv.config()

mongoose.connect(process.env.url_bd)

.then(() =>{
    console.log('la promesa funciona')
})
.catch((err) =>{
    console.log('la promesa no fuunciono')
})

const app= express()
app.use(cors())

app.listen(4003,() =>{
    console.log('el servidor si escucha')
})
test_becarios()
test_descuentos()
test_empleados()
test_lideres()
test_nomina()
test_productos()
test_tecnicos()