import './group.css';
import groupi from './groupimg.jpg'
function group() {
  return <div>
      <div className="group">
      <div className="group-card">
          <img src={groupi} alt="group-section image" className="group-img"/>
          <h4>Intro to Machine Learning</h4>
      </div>
  </div>
  </div>
}

export default group;
