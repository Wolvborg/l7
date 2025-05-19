import { Router } from "express";
import { CardData, ApiResponse } from "types";
import { CARD_DATA } from "../db/data";

const router = Router();

router.get("/", (_, response) => {
  const cards: CardData[] = CARD_DATA;

  const responseData: ApiResponse<CardData[]> = {
    data: cards,
    message: "Cards retrieved successfully",
  };

  response.json(responseData);
});

export default router;
