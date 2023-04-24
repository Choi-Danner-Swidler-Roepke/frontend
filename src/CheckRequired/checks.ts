const checkCS = (classList: [string]): boolean => {
  if (!classList.includes("CS 65")) {
    return false;
  }
  if (!classList.includes("CS 66")) {
    return false;
  }
  if (!classList.includes("CS 67")) {
    return false;
  }
  if (!classList.includes("CS 83")) {
    return false;
  }
  if (!classList.includes("CS130")) {
    classList.filter((el) => el !== "CS 130");
    return false;
  }
  if (!classList.includes("CS 137")) {
    classList.filter((el) => el !== "CS 137");
    return false;
  }
  if (!classList.includes("CS 1188")) {
    classList.filter((el) => el !== "CS 188");
    return false;
  }
  if (!classList.includes("CS 191")) {
    classList.filter((el) => el !== "CS 191");
    return false;
  }
  if (!classList.includes("MATH 50")) {
    return false;
  }
  if (!(classList.includes("MATH 54") || classList.includes("MATH 101"))) {
    if (classList.includes("MATH101")) {
      classList.filter((el) => el !== "MATH 101");
    }
    return false;
  }
  classList.filter((el) => el !== "MATH 140");
  classList.filter((el) => el !== "CS 140");
  classList.filter((el) => el !== "CS 190");
  classList.filter((el) => el !== "MATH 190");

  let count = 0;
  classList.forEach((el) => {
    if (el.match("CS 1")) count += 1;
    if (el === "IS 145") count += 1;
    if (el === "IS 150") count += 1;
    if (el === "IS 160") count += 1;
  });
  if (!(count < 5)) {
    return false;
  }
  return true;
};

const checkAI = (classList: [string]): boolean => {
  if (!classList.includes("AI 10")) {
    return false;
  }
  if (!(classList.includes("AI 36") || classList.includes("PSY 125"))) {
    return false;
  }
  if (!(classList.includes("AI 42") || classList.includes("PHIL 130"))) {
    return false;
  }
  if (!(classList.includes("AI 51") || classList.includes("SCSS 135"))) {
    return false;
  }
  if (!classList.includes("AI 190")) {
    return false;
  }
  if (!classList.includes("CS 65")) {
    return false;
  }
  if (!classList.includes("CS 66")) {
    return false;
  }
  if (!classList.includes("CS 83")) {
    return false;
  }
  if (!classList.includes("CS 143")) {
    return false;
  }
  if (!classList.includes("CS 167")) {
    return false;
  }
  if (!(classList.includes("IS 83") || classList.includes("CS 143"))) {
    return false;
  }
  if (!(classList.includes("IS 147") || classList.includes("ART 150"))) {
    return false;
  }
  if (!classList.includes("IS 161")) {
    return false;
  }
  if (!(classList.includes("PHIL 128") || classList.includes("ENG 139"))) {
    return false;
  }
  if (!(classList.includes("PSY 001") || classList.includes("NCSI 001"))) {
    return false;
  }
  if (!classList.includes("STAT 71")) {
    return false;
  }
  if (!classList.includes("STAT 108")) {
    return false;
  }
  return true;
};

const checkDA = (classList: [string]): boolean => {
  if (!classList.includes("CS 65")) {
    return false;
  }
  if (!classList.includes("CS 66")) {
    return false;
  }
  if (!classList.includes("CS 83")) {
    return false;
  }
  if (!classList.includes("CS 167")) {
    return false;
  }
  if (!classList.includes("CS 178")) {
    return false;
  }
  if (!classList.includes("IS 44")) {
    return false;
  }
  if (!classList.includes("IS 160")) {
    return false;
  }
  if (!classList.includes("MATH 150")) {
    return false;
  }
  if (!classList.includes("MATH 70")) {
    return false;
  }
  if (!classList.includes("STAT 40")) {
    return false;
  }
  if (!classList.includes("STAT 72")) {
    return false;
  }
  if (!classList.includes("STAT 130")) {
    return false;
  }
  if (!classList.includes("STAT 170")) {
    return false;
  }
  if (!classList.includes("STAT 172")) {
    return false;
  }
  if (!(classList.includes("STAT 190") || classList.includes("CS 190"))) {
    return false;
  }
  let count = 0;
  classList.forEach((el) => {
    if (el === "BIO 116" || "CS 116") count += 1;
    if (el === "CS 137") count += 1;
    if (el === "CS 143") count += 1;
    if (el === "MATH 80") count += 1;
    if (el === "MATH 100") count += 1;
    if (el === "MATH 120") count += 1;
    if (el === "MATH 121") count += 1;
    if (el === "MATH 125") count += 1;
    if (el === "MATH 127") count += 1;
    if (el === "MATH 165" || el === "CS 165") count += 1;
    if (el === "MATH 176") count += 1;
    if (el === "MKTG 113") count += 1;
    if (el === "MKTG 130") count += 1;
    if (el === "ACTS 135") count += 1;
  });
  if (count < 2) return false;
  return true;
};

export { checkCS, checkAI, checkDA };
