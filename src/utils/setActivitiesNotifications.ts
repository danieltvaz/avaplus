import * as Notifications from "expo-notifications";
import convertToTimestamp from "./convertToTimestamp";
import handleStorage from "./handleStorage";

const KEY = "isNotificationSet";

const [setNotificationFlag, getNotificationFlag] = handleStorage<boolean>();

async function schedulePushNotification(date: number = 2) {
  const trigger = new Date(date);
  trigger.setHours(9);
  trigger.setMinutes(0);
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Aviso de vencimento",
      body: "Há atividades vencendo hoje!",
      data: { data: "" },
    },
    trigger,
  });
}

export default async function setActivitiesNotifications(dates: string[] = []): Promise<void> {
  const mockDates = ["10/04/22", "10/04/22", "10/04/22"];
  const notificationIsSet = await getNotificationFlag(KEY);

  if (!notificationIsSet && dates.length > 0) {
    for await (const date of dates) {
      schedulePushNotification(convertToTimestamp(date));
    }

    await setNotificationFlag(KEY, true);

    return;
  } else if (notificationIsSet && dates.length === 0) setNotificationFlag(KEY, false);
}
