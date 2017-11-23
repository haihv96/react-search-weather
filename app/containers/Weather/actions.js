import {
  ADD_INPUT_PROVINCE,
  EDIT_INPUT_PROVINCE,
  REMOVE_INPUT_PROVINCE,
  CONVERT_PROVINCE_TO_ID,
  LOAD_WEATHERS,
  LOAD_WEATHERS_SUCCESS,
  LOAD_WEATHERS_ERROR
}
  from './constants'

let nextProvinceId = 1;

export const addInputProvince = () => {
  return {
    type: ADD_INPUT_PROVINCE,
    province: {
      id: nextProvinceId++,
      name: ''
    }
  }
}

export const editInputProvince = (provinceId, provinceName) => {
  return {
    type: EDIT_INPUT_PROVINCE,
    provinceId,
    provinceName
  }
}

export const removeInputProvince = (provinceId) => {
  return {
    type: REMOVE_INPUT_PROVINCE,
    provinceId
  }
}

export const convertProvinceToId = (results) => {
  return {
    type: CONVERT_PROVINCE_TO_ID,
    results
  }
}

export const loadWeathers = () => {
  return {
    type: LOAD_WEATHERS
  }
}

export const weathersLoaded = (weathers) => {
  return {
    type: LOAD_WEATHERS_SUCCESS,
    weathers
  }
}

export const weatherLoadingError = (error) => {
  return {
    type: LOAD_WEATHERS_ERROR,
    error
  }
}
