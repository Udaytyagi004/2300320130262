const axios = require("axios");

const API_URL = "http://4.224.186.213/evaluation-service/logs";

export const Log = async (stack, level, packageName, message) => {
  try {
    const payload = {
      stack,
      level,
      package: packageName,
      message,
    };

    const response = await axios.post(LOG_API_URL, payload);

    return response.data;
  } catch (err) {
    console.error("Logging Failed:", err.message);
  }
};
