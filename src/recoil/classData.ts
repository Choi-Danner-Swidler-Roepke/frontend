import { atom } from "recoil";
import { ClassData, ScheduleData } from "../Types";

const classState = atom({
  key: "classState",
  default: [] as ClassData[],
});

const checkedData = atom({
  key: "checkedData",
  default: [] as ClassData[],
});

const scheduleData = atom({
  key: "scheduledData",
  default: [] as ScheduleData[],
});

export { classState, checkedData, scheduleData };
