const lt = x => y => y < x;
const lte = x => y => y <= x;
const gt = x => y => y > x;
const gte = x => y => y >= x;
const equals = x => y => y === x;
const where = obj => item => Object.keys(obj).every(key => obj[key](item[key]));
const prop = key => obj => obj[key];
const propEq = key => value => obj => obj[key] === value;
const mergeRight = (obj1, obj2) => ({ ...obj1, ...obj2 });
const pathOr = (defaultValue, path) => obj => reduce((acc, key) => acc && acc[key], obj)(path) || defaultValue;
