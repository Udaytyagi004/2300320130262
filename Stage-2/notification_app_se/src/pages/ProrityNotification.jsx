import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import fetchNotifications from "../services/notificationService";
import PriorityInbox from "../components/PriorityInbox";

const PriorityNotification = () => {
  const [notifications, setNotifications] = useState([]);

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
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ my: 3 }}>
        Priority Inbox
      </Typography>

      <PriorityInbox notifications={notifications} />
    </Container>
  );
};

export default PriorityNotification;
