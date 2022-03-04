import convertToTimestamp from "./convertToTimestamp";

export default function expired(date: string) {
  const now = new Date();
  const alreadyExpired = convertToTimestamp(date) <= now.getTime();
  return alreadyExpired;
}
