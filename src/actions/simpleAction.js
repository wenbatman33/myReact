let count = 0;
export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: count++
  })
}