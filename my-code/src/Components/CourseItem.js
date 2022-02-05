import React, { Component } from 'react';

export default class CourseItem extends Component {
  render() {
    const {imgUrl,name,enroll,rating}=this.props;
    return (
        <div className="card" style={{width: "18rem;"}}>
  <img src={imgUrl} className="card-img-top" alt="Card image cap"/>
  <div className="card-body">
     <h5 className="card-title">{name}</h5>
    
     <h6>{enroll}</h6>
     <h7>{rating}</h7>
  </div>
</div>
    )

  }
}
