/**
 * Identity function that helps making thunk actions more readable.
 *
 * Example:
 * ```JavaScript
 * export const Thunks = {
 *  myAction: () =>
 *    createThunkAction(async dispatch => {
 *      dispatch(Actions.someAction());
 *
 *      try {
 *        await someApiCall();
 *        dispatch(Actions.someOtherAction());
 *      } catch (err) {
 *        dispatch(Actions.someErrorAction());
 *      }
 *    }),
 * }
 * ```
 *
 * @param {(dispatch) => Void} innerAction async function accepting dispatch function
 * @returns {Function} redux-thunk compatible function
 */
export const createThunkAction = innerAction => innerAction;

/**
 * Redux action creator helper funciton
 *
 * Exampl:
 * ```JavaScript
 * export const Actions = {
 *  myAction: () => createAction(SOME_ACTION),
 *  otherAction: (somePayload) => createAction(OTHER_ACTION, { somePayload }),
 * }
 * ```
 *
 * @param {string} type action type to dispatch
 * @param {any} [payload] optional payload
 * @returns {{ type: string, payload?: any }} redux dispatch object
 */
export const createAction = (type, payload) => {
  if (typeof payload !== 'undefined') {
    return {
      type,
      payload,
    };
  }
  return {
    type,
  };
};
