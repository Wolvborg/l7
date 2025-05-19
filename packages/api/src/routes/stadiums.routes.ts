import { Router } from "express";
import { STADIUMS } from "../db/data";
import { Stadium, ApiResponse } from "types";

const router = Router();

router.get("/", (_, response) => {
  const stadiums: Stadium[] = STADIUMS;

  const responseData: ApiResponse<Stadium[]> = {
    data: stadiums,
    message: "Stadiums retrieved successfully",
  };

  response.json(responseData);
});

export default router;
