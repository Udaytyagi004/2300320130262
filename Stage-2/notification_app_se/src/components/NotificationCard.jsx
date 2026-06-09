import { Card, CardContent, Typography } from "@mui/material";

const NotificationCard = ({ notification }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{notification.Type}</Typography>

        <Typography>{notification.Message}</Typography>

        <Typography variant="caption" color="text.secondary">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
