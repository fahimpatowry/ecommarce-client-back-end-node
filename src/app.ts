import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

import healthRoute from "./routes/health.route";
import carouselRoute from "./routes/carousel.route";

const app = express();

app.use(express.json());

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes 
// health
app.use("/health", healthRoute);

// carousel
app.use("/carousel", carouselRoute);

export default app;