import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

import healthRoute from "./routes/health.route";
import carouselRoute from "./routes/carousel.route";
import seasonalOffers from "./routes/seasonalOffer.route";
import categories from "./routes/category.route";

const app = express();

app.use(express.json());

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes 
// health
app.use("/health", healthRoute);

// carousel
app.use("/carousel", carouselRoute);

// carousel
app.use("/seasonal-offers", seasonalOffers);

// categories
app.use("/categories", categories);

export default app;