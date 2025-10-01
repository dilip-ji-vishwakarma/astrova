// Change BASE once; everything else follows
const BASE = '/api';

export const ENDPOINTS = {
  LOGIN:      `${BASE}/auth/login`,
  USERS:      `${BASE}/users`,
  USER:  id => `${BASE}/users/${id}`,   // dynamic
};
