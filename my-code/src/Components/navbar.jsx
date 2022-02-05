import './navbar.css';
import logo from './logo1.svg'

import {Link} from 'react-router-dom'
function navbar() {
  return <div>
      <div className="sideNav">
          <img src={logo} alt="logo" className="logo"/>
          <ul>
              <li>My Course</li>
              {/* <Link to="/group">My Groups</Link>
              <Link className="active" to="/courses">Explore</Link> */}

              <li >My Groups</li>
              <li className="active">Explore</li>

              <li>Join Group</li>
          </ul>
      </div>
  </div>;
}
export default navbar;
