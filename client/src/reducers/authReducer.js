const INITIAL_STATE = {
  isSignIn: null,
  userId: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log("aca toy");
      return { ...state, isSignIn: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignIn: false, userId: null };
    default:
      return state;
  }
};
