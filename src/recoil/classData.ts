import { atom } from "recoil";
import { ClassData } from "../Types";

const classState = atom({
  key: "classState",
  default: [] as ClassData[],
});
