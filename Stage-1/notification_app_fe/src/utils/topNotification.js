import { calculatePriority } from "./priorityCalculator";
import { Log } from "../../../../Logging_Middleware/Logger.js";
export const getTopNotifications = async (notifications, limit) => {
  await Log(
    "frontend",
    "info",
    "state",
    `Calculating top ${limit} notifications`,
  );
  return [...notifications]
    .sort((a, b) => calculatePriority(b) - calculatePriority(a))
    .slice(0, limit);
};
