export const validateRequirement = (courseTaken:string[]):boolean => {
  if(!courseTaken.includes("CS 65")) return false;
  if(!courseTaken.includes("CS 66")) return false;
  if(!courseTaken.includes("CS 67")) return false;
  if(!courseTaken.includes("CS 83")) return false;
  if(!courseTaken.includes("CS 130")) return false;
  courseTaken = courseTaken.filter(e => e !== "CS 130");
  if(!courseTaken.includes("CS 188")) return false;
  courseTaken = courseTaken.filter(e => e !== "CS 188");
  if(!courseTaken.includes("CS 191")) return false;
  courseTaken = courseTaken.filter(e => e !== "CS 191");
  if(!(courseTaken.includes("MATH 54") || courseTaken.includes("MATH 101"))) return false
  courseTaken = courseTaken.filter(e => e !== "CS 101");
  

  return true;
}