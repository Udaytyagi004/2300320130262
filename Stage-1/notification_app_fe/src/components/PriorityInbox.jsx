import { useState, useEffect } from "react";
import NotificationCard from "./NotificationCard";
import { getTopNotifications } from "../utils/topNotification";

const PriorityInbox = ({ notifications }) => {
  const [topNotifications, setTopNotifications] = useState([]);

  useEffect(() => {
    const loadTopNotifications = async () => {
      const data = await getTopNotifications(notifications, 10);
      setTopNotifications(data);
    };

    loadTopNotifications();
  }, [notifications]);

  return (
    <>
      {topNotifications.map((notification) => (
        <NotificationCard key={notification.ID} notification={notification} />
      ))}
    </>
  );
};

export default PriorityInbox;
