import './HomeStyles.css';
import { Route, Routes, Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function Home() {

    return (
        <div className='home-view animate__animated animate__fadeIn'>

            <div className="view">
                <div className="tab-title-container">
                    <span className='tab-big-title'>Dashboard</span>
                </div>
                <div className="tab-container">
                    <span className='tab-title'>Appointments</span>
                    <span className='tab-title'>Patients  List</span>
                </div>
            </div>


            {/* <Link to={"/chat"}> go to chat</Link> */}

        </div>
    )
}