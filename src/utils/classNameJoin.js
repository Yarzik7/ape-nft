export const classNameJoin = (...classNames) => {
  let classNamesString = '';
  classNames.forEach(classItem => (classNamesString += ' ' + classItem));
  return classNamesString;
};
