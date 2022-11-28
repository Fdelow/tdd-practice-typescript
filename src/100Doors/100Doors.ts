export const door = (num: number) => {
  if (num <= 0) {
    throw new Error("must be more than 0");
  }
  let doors: { id: number; open: boolean }[] = [];

  for (let i = 0; i < num; i++) {
    doors.push({ id: i + 1, open: true });
  }

  for (let i = 0; i < num; i++) {
    for (let item of doors) {
      if (item.id % (i + 1) === 0) {
        item.open = !item.open;
      }
    }
  }

  let result: string[] = [];

  for (let item of doors) {
    result.push(item.open === true ? "@" : "#");
  }

  return result.join("");
};
