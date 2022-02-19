export default function convertToTimestamp(date: string): number {
  const splittedDate = date.split("/");
  const formattedDate = `${splittedDate[1]}/${splittedDate[0]}/${splittedDate[2]}`;
  return new Date(formattedDate).getTime();
}
