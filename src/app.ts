import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import cors from "cors";

import healthRoute from "./routes/health.route";
import carouselRoute from "./routes/carousel.route";
import seasonalOffers from "./routes/seasonalOffer.route";
import categories from "./routes/category.route";
import products from "./routes/product.route";
import cart from "./routes/cart.route";

const app = express();

app.use(cors({
    origin: "*",   // allow all (dev)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

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

// products
app.use("/products", products);

// cart
app.use("/cart", cart);

export default app;