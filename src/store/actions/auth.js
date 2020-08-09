export const LOGOUT = 'LOGOUT';
export const AUTHENTICATE = 'AUTHENTICATE';

let timer;
export const authenticate = (userId, token, expiryTime) => {
    return dispatch => {
      dispatch(setLogoutTimer(expiryTime));
      dispatch({ type: AUTHENTICATE, userId: userId, token: token });
    };
  };

  export const login = (email, password) => {
    return async dispatch => {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBY8UJq_xLD0nEe1HZHuvEOUfYIS9gg4pA',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
          })
        }
      );
  
      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = 'Something went wrong!';
        if (errorId === 'EMAIL_NOT_FOUND') {
          message = 'This email could not be found!';
        } else if (errorId === 'INVALID_PASSWORD') {
          message = 'This password is not valid!';
        }
        throw new Error(message);
      }
  
      const resData = await response.json();
      console.log(resData);
      dispatch(
        authenticate(
          resData.localId,
          resData.idToken,
          parseInt(resData.expiresIn) * 1000
        )
      );
      const expirationDate = new Date(
        new Date().getTime() + parseInt(resData.expiresIn) * 1000
      );
// store cookie for login
    };
  };

  export const logout = () => {
    clearLogoutTimer();
// remove token
    return { type: LOGOUT };
  };
  

  const clearLogoutTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };
  
  const setLogoutTimer = expirationTime => {
    return dispatch => {
      timer = setTimeout(() => {
        dispatch(logout());
      }, expirationTime);
    };
  };
  