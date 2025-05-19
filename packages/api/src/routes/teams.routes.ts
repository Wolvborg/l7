import { Router } from "express";
import { Team, ApiResponse } from "types";
import { TEAMS } from "../db/data";

const router = Router();

router.get("/", (_, response) => {
  const teams: Team[] = TEAMS;

  const responseData: ApiResponse<Team[]> = {
    data: teams,
    message: "Teams retrieved successfully",
  };

  response.json(responseData);
});

export default router;
