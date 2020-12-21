import './ss.scss';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../reducers/connect-components';

import { Link } from "react-router-dom";

function SecondScreen({ secondScreen, home,  changeHomeToNew, changeHomeToPrevious }) {
  return (
    <>
      <Link to='/'><h3>{home}</h3></Link>
      <h3>{secondScreen}</h3>
      <button onClick={() => changeHomeToNew()}>Change link name</button>
      <button onClick={() => changeHomeToPrevious()}>Back to previous name</button>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
