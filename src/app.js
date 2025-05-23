import express from 'express';
import userRoutes from './routes/user.routes.js';
import swipesRoutes from './routes/swipes.routes.js';

const app = express();

app.use(express.json());
app.use("/", userRoutes);
app.use("/swipes", swipesRoutes);

export default app;