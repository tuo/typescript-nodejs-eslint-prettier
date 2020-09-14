export function getArrayLength(arr) {
  return arr.length;
}

export function getArrayMetadata(arr) {
  return {
    length: getArrayLength(arr),
    firstObject: arr[0],
  };
}

export const maxInterval = 14;

// const maxInterval = 12;

// function getArrayLength(arr) {
//   return arr.length;
// }

// module.exports = {
//   getArrayLength,
//   maxInterval,
// };

//
