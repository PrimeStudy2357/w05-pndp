/**
 * Cralwer들의 공통 로직
 * @param {*} data
 * @param {*} target
 * @returns
 */
export function parseTargetData(data, target) {
  const result = [];
  data.response.items.forEach((item) => {
    if (item.place === target) result.push(item);
  });

  return result;
}
