import './navbar.css';
import logo from './logo1.svg'
function navbar() {
  return <div>
      <div className="sideNav">
          <img src={logo} alt="logo" className="logo"/>
          <ul>
              <li>My Course</li>
              <li>My Groups</li>
              <li className="active">Explore</li>
              <li>Join Group</li>
          </ul>
      </div>
  </div>;
}
export default navbar;
