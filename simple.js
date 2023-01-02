const lt = x => y => y < x;
const lte = x => y => y <= x;
const gt = x => y => y > x;
const gte = x => y => y >= x;
const equals = x => y => y === x;
const where = obj => item => Object.keys(obj).every(key => obj[key](item[key]));
