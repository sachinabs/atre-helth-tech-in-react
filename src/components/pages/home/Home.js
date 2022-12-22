import './HomeStyles.css';
import { Route, Routes, Link } from 'react-router-dom'
import axios from "axios";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function Home() {


    const requestUrl = "http://localhost:9000/api/sql/getAllUser"

    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
        axios.get(requestUrl).then((response) => {
            setPost(response.data);
            console.log(response.data[0]);
        }).catch(err => console.log(err));
    }, []);

    const users = post.map((item, index) => {
        return (<div key={index} className="list-data-container animate__animated animate__fadeInUp">
            <Link to={`/details/${item.p_id}`}>
                <span className='tab-data'>
                    <span>{index + 1}</span>
                    <span><img className='thum-img' src={item.img} alt="" /></span>
                    <span>{item.user_name}</span>
                    <span>{item.p_id}</span>
                    <span>{item.location}</span>
                    <span>{item.appoinment}</span>
                </span>
            </Link>
        </div>)
    })


    return (
        <div className='home-view animate__animated animate__fadeIn'>

            <div className="view">
                <div className="tab-title-container">
                    <span className='tab-big-title'>Dashboard</span>
                </div>
                <div className="tab-container">
                    <span className='tab-title active-tab'>Appointments</span>
                    <span className='tab-title'>Patients  List</span>
                </div>
                <div className="tab-data-titles-container">
                    <span className='tab-data-title'>S.No</span>
                    <span className='tab-data-title'>Basic info</span>
                    <span className='tab-data-title'>Name</span>
                    <span className='tab-data-title'>Patient Id</span>
                    <span className='tab-data-title'>Location</span>
                    <span className='tab-data-title'>Appointment Time</span>
                </div>
                {users}
            </div>




        </div>
    )
}