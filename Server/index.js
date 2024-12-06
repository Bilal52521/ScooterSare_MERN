const express = require("express");
const corsMiddleware = require("./middlewares/corsMiddleware");
const connectDB = require("./db");
const userRouter = require("./Routes/User");
const jobsRouter = require("./Routes/Jobs");
const blogsRouter = require("./Routes/Blogs");

const app = express();
const port = 8570;

app.use(express.json());
app.use(corsMiddleware);

connectDB();

// Routes
app.use("/api", userRouter);
app.use("/api", jobsRouter);
app.use("/api", blogsRouter);

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
