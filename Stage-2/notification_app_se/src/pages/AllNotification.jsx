import NotificationCard from "../components/NotificationCard";

const AllNotifications = ({ notifications }) => {
  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard key={notification.ID} notification={notification} />
      ))}
    </>
  );
};

export default AllNotifications;
