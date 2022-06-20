import { Activity } from "../../types/Types";
import checkDateLimit from "../../utils/checkDateLimit";
import { ActivitiesItem, ActivitiesName, ActivitiesPeriod } from "./styles";

const IGNORE_LIST = ["Aa1", "Aa2", "Aa3", "Aa4", "Ta1", "Ta2", "Ta3", "Ta4"];

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <ActivitiesItem>
      <ActivitiesName>{activity.name}</ActivitiesName>
      <ActivitiesPeriod limitDate={IGNORE_LIST.includes(activity?.name) ? undefined : checkDateLimit(activity?.date.end)}>
        Vencimento: {activity?.date?.end}
      </ActivitiesPeriod>
    </ActivitiesItem>
  );
}
