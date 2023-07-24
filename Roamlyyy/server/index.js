import express from 'express';
import cors from 'cors';
import userRoutes from "./routers/users.js";
import authRoutes from "./routers/auth.js";

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Your API routes and other middleware should be defined after this

app.use("/server/users", userRoutes);
app.use("/server/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
