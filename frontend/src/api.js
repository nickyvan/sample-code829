export const base =
  process.env.NODE_ENV === 'production'
    ? 'https://shareimage829.herokuapp.com/'
    : 'http://localhost:5000/';
export const placesAPI = base + 'api/places/';
export const placesUserAPI = base + 'api/places/user/';
export const loginAPI = base + 'api/users/login/';
export const signupAPI = base + 'api/users/signup/';
export const userAPI = base + 'api/users/';
