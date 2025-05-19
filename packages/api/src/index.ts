import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();
const port = 4000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api", routes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
