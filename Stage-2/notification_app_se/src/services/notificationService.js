import axios from "axios";
import { Log } from "../../../../Logging_Middleware/Logger.js";
const API_URL = "http://4.224.186.213/evaluation-service/notifications";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ1ZGF5LjIzYjAxMzExOTRAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk5MzkzMiwiaWF0IjoxNzgwOTkzMDMyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYWMzMDBmOTMtYmFmYS00MzhkLTlhZmQtYTVkZWI4NjNhYjdkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidWRheSBuYXJheWFuIHR5YWdpIiwic3ViIjoiMjI4N2NmZmEtYmM0OC00MTZmLTk1ZTUtMzNjMDRlZDQxMGY1In0sImVtYWlsIjoidWRheS4yM2IwMTMxMTk0QGFiZXMuYWMuaW4iLCJuYW1lIjoidWRheSBuYXJheWFuIHR5YWdpIiwicm9sbE5vIjoiMjMwMDMyMDEzMDI2MiIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6IjIyODdjZmZhLWJjNDgtNDE2Zi05NWU1LTMzYzA0ZWQ0MTBmNSIsImNsaWVudFNlY3JldCI6Ik5KcVF3bkRIUmVGd1pOaGsifQ.W1x89jkTRvTKWIrwco97_9Oj7Ou4lTbzGGVznwEWACQ";
const fetchNotification = async () => {
  await Log("frontend", "info", "api", "Fetching notifications");

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });

  await Log("frontend", "info", "api", "Notifications fetched successfully");

  return response.data.notifications;
};

export default fetchNotification;
