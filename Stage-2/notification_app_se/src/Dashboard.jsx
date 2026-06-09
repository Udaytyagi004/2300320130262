import { useState, useEffect } from "react";
import fetchNotifications from "./services/notificationService";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

import AllNotification from "./pages/AllNotification";
import PriorityNotification from "./pages/ProrityNotification";

const Dashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [view, setView] = useState("all");

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    loadNotifications();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 3,
        }}
      >
        <Typography variant="h4">Notification Dashboard</Typography>

        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel>View</InputLabel>

          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="all">All Notifications</MenuItem>

            <MenuItem value="priority">Priority Inbox</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {view === "all" ? (
        <AllNotification notifications={notifications} />
      ) : (
        <PriorityNotification notifications={notifications} />
      )}
    </Container>
  );
};

export default Dashboard;
