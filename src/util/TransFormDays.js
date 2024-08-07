export const transformDays = (day) => {
  const dayMap = {
    monday: '월',
    tuesday: '화',
    wednesday: '수',
    thursday: '목',
    friday: '금',
    saturday: '토',
    sunday: '일',
  };
  return Object.keys(day)
    .filter((key) => day[key])
    .map((key) => dayMap[key])
    .join(', ');
};
