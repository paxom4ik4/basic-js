module.exports = createDreamTeam = (members) => {
  let res = "";
  if (Array.isArray(members)) {
    members = members
      .filter((elem) => typeof elem === "string")
      .map((elem) => elem.trim());
    members.forEach((elem) => {
      res += elem[0].toUpperCase();
    });
    return res.split("").sort().join("");
  } else return false;
};
