## PROBLEM STATEMENT

Design a "Priroity Inbox"
that shows the top N notifications , priority is calculated based on the combination of weight nad recency.

## SYSTEM FLOW(My Approach)

i. fetch the notification from the API (using notificationService.js)
ii. calculate the Priority
iii. Sort the Top N notifications(N = 10)
iv. Display the Top N notification in the prirority inbox

## How priority is calculated

as mentioned in the Problem Statement that the priority should be based on the weight and recency.

I used this weights
Placement: 3,
Result: 2,
Event: 1,

priortiy = weight\*large no + time ( multiply weight by a large no so that notification type gets the priority to deciding the overall priority of the notification)

## folder structure

notification\*app*se
|\_src
|- components
|* NotificationCard.jsx
|_ PriorityInbox.jsx
|_ services
|_notificationService.js
|_ utils
|_ priorityCalculator.js
|_ topNotification.js
App.jsx
Dashboard.jsx
main.jsx
