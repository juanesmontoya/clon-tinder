import express from 'express';
import userRoutes from './routes/user.routes.js';
import swipesRoutes from './routes/swipes.routers.js';

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", swipesRoutes);

export default app;