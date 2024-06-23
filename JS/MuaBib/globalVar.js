export let globalData = {
  running_id: null,
  distance_id: null,
  distance_value: null,
  hotel_id: null,
  name: null,
  nick_name_bib: null,
  email: null,
  phone: null,
  identity_number: null,
  nationality: null,
  blood_group: null,
  birth_date: null,
  gender: null,
  shirt_size: null,
  shirt_type: null,
  medical_history: 1,
  name_guarantor: 1,
  phone_guarantor: 1,
  days_stay: 1,
  status_stay: 1,
};

export const setGlobalData = (key, value) => {
  globalData[key] = value;
};

export const getGlobalData = (key) => {
  return globalData[key];
};
