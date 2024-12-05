import { Router } from "express";
const router = Router();
router.get("/tasks", (req, res) => res.send("obteniendo tareas"));

router.get("/tasks/:id", (req, res) => res.send("obteniendo tarea unida"));

router.post("/tasks", (req, res) => res.send("creado tarea"));

router.put("/tasks/:id", (req, res) => res.send("actualizando tarea unica"));

router.delete("/tasks/:id", (req, res) => res.send("eliminando tarea unica"));


export default router;
