export let globalData = {
  running_id: null,
  distance_id: null,
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
  medical_history: null,
  name_guarantor: null,
  phone_guarantor: null,
  days_stay: null,
  status_stay: null,
};

export const setGlobalData = (key, value) => {
  globalData[key] = value;
};

export const getGlobalData = (key) => {
  return globalData[key];
};

