export const userLogOut = () => ({
  type: 'LOGGED_OUT',
});

export const userLogin = (data) => ({
  type: 'LOGGED_IN',
  accountType: data.accountType,
  fname: data.fname,
  lname: data.lname,
});

export const userSignUp = () => ({
  type: 'SINGUP_SUCCESS',
});

export const clearSignUp = () => ({
  type: 'CLEAR_SIGNUP',
});
