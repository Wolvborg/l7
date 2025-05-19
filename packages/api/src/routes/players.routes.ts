import { Router } from "express";
import { PLAYERS } from "src/db/data";
import { Player, ApiResponse } from "types";

const router = Router();

router.get("/", (_, response) => {
  const players: Player[] = PLAYERS;

  const responseData: ApiResponse<Player[]> = {
    data: players,
    message: "Players retrieved successfully",
  };

  response.json(responseData);
});

export default router;
