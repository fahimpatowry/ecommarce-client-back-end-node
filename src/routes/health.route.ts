import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Returns OK status
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: OK message
 */
router.get("/", (_req, res) => {
  res.status(200).send("ok");
});

export default router;
  