const WEIGHTS = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const calculatePriority = (notification) => {
  const weight = WEIGHTS[notification.Type] || 0;

  const timestamp = new Date(notification.Timestamp).getTime();

  return weight * 1000000000000 + timestamp;
};
