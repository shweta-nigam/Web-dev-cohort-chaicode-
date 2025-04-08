import express from "express"

const app = express();

// importing router 
import healthCheckRouter from "./src/routes/healthcheck.routers.js";

app.use("/api/v1/healthcheck", healthCheckRouter)

export  default app;