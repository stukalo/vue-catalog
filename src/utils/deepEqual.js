export const isPrimitive = (obj) => (obj !== Object(obj));

export const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true;
  }

  if (isPrimitive(obj1) && isPrimitive(obj2)) {
    return obj1 === obj2;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key in obj1) {
    if (!(key in obj2)) {
      return false;
    }

    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};
