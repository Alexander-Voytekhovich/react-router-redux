const mapStateToProps = ({ 
  secondScreen, thirdScreen, home,
}) => {
  return { 
    secondScreen, thirdScreen, home,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return { 
    changeHomeToNew: () => {
      dispatch({
        type: 'CHANGE_HOME_TO_NEW',
      })
    },
    changeHomeToPrevious: () => {
      dispatch({
        type: 'CHANGE_HOME_TO_PREVIOUS',
      })
    },
    resetSecondScreen: () => {
      dispatch({
        type: 'RESET_SECOND_SCREEN',
      })
    },
  }
}

export { mapStateToProps, mapDispatchToProps };