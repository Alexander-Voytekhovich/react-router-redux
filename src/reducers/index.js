const initialState = {
  secondScreen: 'secondScreen',
  thirdScreen: 'thirdScreen',
  home: 'Home',
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHANGE_HOME_TO_NEW':
      return {
        ...state,
        home: 'New Home'
      }
    case 'CHANGE_HOME_TO_PREVIOUS':
      return {
        ...state,
        home: 'Home'
      }
    case 'RESET_SECOND_SCREEN':
      return {
        ...state,
        secondScreen: ''
      }
    default: 
      return state;
  }
};

export default reducer;