import { empleados } from "../models/empleados.models.js";
const test = (()  =>{
    console.log('el controlador de empleados furula')
})
empleados.create({
    name:'angela',
    apep:'luna',
    apema:'fabian',
    age:'20'
})
export default test