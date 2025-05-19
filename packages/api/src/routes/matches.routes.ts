import { Router } from "express";
import { MATCHES } from "../db/data";
import { Match, ApiResponse } from "types";

const router = Router();

router.get("/", (_, response) => {
  const matches: Match[] = MATCHES;

  const responseData: ApiResponse<Match[]> = {
    data: matches,
    message: "Matches retrieved successfully",
  };

  response.json(responseData);
});

export default router;
