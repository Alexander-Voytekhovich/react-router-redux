import './fs.scss';

import { Link } from "react-router-dom";

function FirstScreen() {
  return (
    <ul>
      <li>
        <Link to='ss'>SecondScreen</Link>
      </li>
      <li>
        <Link to='ts'>ThirdScreen</Link>
      </li>
    </ul>
  );
}

export default FirstScreen;
