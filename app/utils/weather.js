export const convertIdsProvince = (inputProvinces, provincesTxt) => {
  let idsProvince = [];
  let idsInputProvinceFail = [];
  inputProvinces.forEach(inputProvince => {
    let index = provincesTxt.indexOf(inputProvince.get('name').toLowerCase());
    if (![0, -1].includes(index)) {
      idsProvince.push(provincesTxt.slice(index - 50, index).trim().split(' ').splice(-1));
    } else {
      idsInputProvinceFail.push(inputProvince.get('id'));
    }
  });
  return {
    idsInputProvinceFail,
    idsProvince
  }
};
