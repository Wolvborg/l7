import { Router } from "express";
import cardsRoutes from "./cards.routes";
import matchesRoutes from "./matches.routes";
import playersRoutes from "./players.routes";
import teamsRoutes from "./teams.routes";
import stadiumsRoutes from "./stadiums.routes";

const router = Router();

const routes = [
  {
    path: "/cards",
    route: cardsRoutes,
  },
  {
    path: "/matches",
    route: matchesRoutes,
  },
  {
    path: "/players",
    route: playersRoutes,
  },
  {
    path: "/teams",
    route: teamsRoutes,
  },
  {
    path: "/stadiums",
    route: stadiumsRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
