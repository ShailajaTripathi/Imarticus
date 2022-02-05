import React, { Component } from 'react';
import CourseItem from './CourseItem';

export default class Courses extends Component {
   courses = [
        {
            "img":"https://cdn.pegasus.imarticus.org/images/Machine-Learning.png",
            "name":"Introduction to Machine Learning",
            "enroll":"1809 Enrollments",
            "rate":"868 Ratings"
    
        },
        {
            "img":"https://cdn.pegasus.imarticus.org/images/C-Programming.png",
            "name":"C Programming",
            "enroll":"1178 Enrollments",
            "rate":"992 Ratings"
        },
        {
            "img":"https://cdn.pegasus.imarticus.org/images/c++-Program.png",
            "name":"C++ Programming Online Certification Course",
            "enroll":"1061 Enrollments",
            "rate":"838 Ratings"
        },
        {
            "img":"https://cdn.pegasus.imarticus.org/images/Data-Structures-in-C-Language.png",
            "name":"Data Structures in C",
            "enroll":"1417 Enrollments",
            "rate":"879 Ratings"
        }
    ]

    premiumCourses =[
        {
            "img":"https://blog.imarticus.org/wp-content/uploads/2019/07/CIBOP.jpg",
            "name":"Certified Investments Banking Operations...",
            
            "rate":"8901 Ratings"
    
        },
        {
            "img":"https://blog.imarticus.org/wp-content/uploads/2020/12/NMIMS-Featured-image-1.jpg",
            "name":"PGP In New Age of Banking",
            
            "rate":"3209 Ratings"
        },
        {
            "img":"https://blog.imarticus.org/wp-content/uploads/2020/10/DM-Featured-image.png",
            "name":"Digital Marketing Program Like NOWHER...",
           
            "rate":"7654 Ratings"
        },
        {
            "img":"https://blog.imarticus.org/wp-content/uploads/2020/11/PGDM-Featured-image.jpg",
            "name":"Post Graduate Program in Data Analytics",
           
            "rate":"8659 Ratings"
        }
    ]




constructor() {
    super();
    this.state={
        courses:this.courses
    }
}



    render() {
        return (
            <div className="container" style={{ marginLeft: "25%",
                marginTop: "3.5vw",width:"60%"}}>
                <h3>Free Courses </h3>
                <div className="row">
                    {
                        this.state.courses.map((element)=>{
                        return <div className="col-md-4" key={element.img}>
                        <CourseItem name={element.name?element.name:""} enroll={element.enroll?element.enroll:""} imgUrl={element.img} rating={element.rate}/>
                        </div>
                    })}
    
                </div>

                <h3>Premium Program </h3>
                <div className="row">
                    {
                        this.state.courses.map((element)=>{
                        return <div className="col-md-4" key={element.img}>
                        <CourseItem name={element.name?element.name:""}  imgUrl={element.img} rating={element.rate}/>
                        </div>
                    })}
    
                </div>

            </div>

          

            )
        }
}
