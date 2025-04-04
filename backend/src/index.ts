import express from "express";
import testRoutes from "./routes/testRoute";
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use("/testapi", testRoutes);

app.listen(port, () => {
  console.log(`this app in listening on ${port}`);
});
