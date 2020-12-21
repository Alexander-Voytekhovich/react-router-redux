import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../reducers/connect-components';

import './ts.scss';



function ThirdScreen({ thirdScreen, home, changeHomeToNew, changeHomeToPrevious }) {
  return (
    <>
      <Link to='/'><h4>{home}</h4></Link>
      <h4>{thirdScreen}</h4>
      <button onClick={() => changeHomeToNew()}>Change link name</button>
      <button onClick={() => changeHomeToPrevious()}>Back to previous name</button>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdScreen);