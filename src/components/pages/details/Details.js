import './DetailsStyle.css';

import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import MessageBox from '../../component/messageBox/MessageBox';

export default function Details() {

    const location = window.location.href;
    const id = location.split('/details/')[1];
    console.log(id);

    const requestUrl = `http://localhost:9000/api/sql/singleUser/${id}`
    const [user, setPost] = React.useState([]);

    React.useEffect(() => {
        axios.get(requestUrl).then((response) => {
            setPost(response.data);
            console.log(response.data[0]);
        }).catch(err => console.log(err));
    }, []);

    const [alert, SetShowAlert] = React.useState(false);


    console.log(alert);


    const person = user.map((item, index) => {
        return (
            <div key={index} className="details-view">
                <div className="tab-title-container">
                    <span className='tab-big-title'>Patient Details</span>
                </div>
                <div className="details-card">
                    <div className="wrapper">
                        <div className="center">
                            <div className="user-image-container">
                                <img className='user' src={item.img} alt="" />
                            </div>
                        </div>
                        <div className="user-details-container">
                            <div className="details-container">
                                <div className="list-01">
                                    <span className="user-name">
                                        <span className='data-title'>Name :     </span>
                                        <span className='data-vale'>{item.user_name}</span>
                                    </span>
                                    <span className="user-Age">
                                        <span className='data-title'>Age : </span>
                                        <span className='data-vale'>{item.age}</span>
                                    </span>
                                    <span className="user-gender">
                                        <span className='data-title'>Gender : </span>
                                        <span className='data-vale'>{item.gender}</span>
                                    </span>
                                </div>
                                <div className="list-02">
                                    <span className="user-location">
                                        <span className='data-title'>Location :     </span>
                                        <span className='data-vale'>{item.location}</span>
                                    </span>
                                    <span className="user-contact">
                                        <span className='data-title'>Contact : </span>
                                        <span className='data-vale'>{item.contact}</span>
                                    </span>
                                    <span className="user-pid">
                                        <span className='data-title'>Patient ID : </span>
                                        <span className='data-vale'>{item.p_id}</span>
                                    </span>
                                </div>
                            </div>
                            <div className=" user-report user-report-container">
                                <span className="user-report">
                                    <div className="report">
                                        <span className='user-report-title'>Report</span> <br /> <br />
                                        <span className='info-icon-report'><svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_92_199)">
                                                <path d="M10.4214 15.0059C10.1349 14.0684 10.1406 12.2578 10.3068 12.2578C10.788 12.2578 10.7422 14.4199 10.4214 15.0059ZM10.324 17.7715C9.88281 18.9551 9.33281 20.3086 8.69688 21.4453C9.74531 21.0352 10.9312 20.4375 12.3005 20.1621C11.5729 19.5996 10.874 18.791 10.324 17.7715ZM4.93281 25.084C4.93281 25.1309 5.68906 24.7676 6.93229 22.7285C6.54844 23.0977 5.2651 24.1641 4.93281 25.084ZM14.2083 9.375H22V28.5938C22 29.373 21.387 30 20.625 30H1.375C0.613021 30 0 29.373 0 28.5938V1.40625C0 0.626953 0.613021 0 1.375 0H12.8333V7.96875C12.8333 8.74219 13.4521 9.375 14.2083 9.375ZM13.75 19.4414C12.6042 18.7266 11.8422 17.7422 11.3036 16.2891C11.5615 15.2051 11.9682 13.5586 11.6589 12.5273C11.3896 10.8047 9.22969 10.9746 8.92031 12.1289C8.63385 13.2012 8.8974 14.7129 9.38438 16.6406C8.71979 18.2578 7.7401 20.4258 7.04688 21.668C7.04115 21.668 7.04115 21.6738 7.03542 21.6738C5.48281 22.4883 2.81875 24.2812 3.91302 25.6582C4.23385 26.0625 4.82969 26.2441 5.14479 26.2441C6.17031 26.2441 7.1901 25.1895 8.64531 22.623C10.1234 22.125 11.7448 21.5039 13.1714 21.2637C14.4146 21.9551 15.8698 22.4062 16.838 22.4062C18.5109 22.4062 18.6255 20.5312 17.9667 19.8633C17.1703 19.0664 14.8557 19.2949 13.75 19.4414ZM21.599 6.15234L15.9844 0.410156C15.7266 0.146484 15.3771 0 15.0104 0H14.6667V7.5H22V7.14258C22 6.77344 21.8568 6.41602 21.599 6.15234ZM17.3536 21.1113C17.5885 20.9531 17.2104 20.4141 14.9016 20.584C17.0271 21.5098 17.3536 21.1113 17.3536 21.1113Z" fill="#666464" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_92_199">
                                                    <rect width="22" height="30" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </span>

                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="user-status">
                            <span className='status-title'>Patient Status : <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.054 1.2466C6.8571 1.04956 6.62332 0.893223 6.36601 0.786526C6.1087 0.67983 5.83289 0.62486 5.55433 0.624756C5.27577 0.624652 4.99992 0.679414 4.74252 0.785918C4.48513 0.892421 4.25123 1.04858 4.05419 1.24547L3.65819 1.64148C3.27528 1.53244 2.87012 1.52822 2.48502 1.62924C2.09993 1.73027 1.74901 1.93283 1.46894 2.21579C1.04835 2.64065 0.812424 3.21433 0.812424 3.81216C0.812424 4.41 1.04835 4.98367 1.46894 5.40854L1.9375 5.88048V11.875H0.25V13H1.40313C1.12377 13.2737 0.932273 13.6245 0.853043 14.0074C0.773812 14.3904 0.810442 14.7883 0.958262 15.1504C1.10608 15.5125 1.35839 15.8223 1.68302 16.0404C2.00765 16.2586 2.38988 16.375 2.78097 16.375C3.17206 16.375 3.55429 16.2586 3.87892 16.0404C4.20355 15.8223 4.45586 15.5125 4.60368 15.1504C4.75149 14.7883 4.78813 14.3904 4.70889 14.0074C4.62966 13.6245 4.43816 13.2737 4.15881 13H18.8412C18.5618 13.2737 18.3703 13.6245 18.2911 14.0074C18.2119 14.3904 18.2485 14.7883 18.3963 15.1504C18.5441 15.5125 18.7965 15.8223 19.1211 16.0404C19.4457 16.2586 19.8279 16.375 20.219 16.375C20.6101 16.375 20.9924 16.2586 21.317 16.0404C21.6416 15.8223 21.8939 15.5125 22.0417 15.1504C22.1896 14.7883 22.2262 14.3904 22.147 14.0074C22.0677 13.6245 21.8762 13.2737 21.5969 13H22.75V11.875H20.5V10.124C20.983 10.0031 21.4117 9.7239 21.7175 9.33098C22.0234 8.93806 22.1888 8.45403 22.1875 7.9561C22.1875 6.72423 21.1969 5.72466 19.9746 5.72466H8.18688C8.16411 5.72472 8.14155 5.72028 8.12051 5.71159C8.09946 5.70291 8.08034 5.69014 8.06425 5.67404L7.85837 5.46591L8.06594 5.25948C8.26301 5.06258 8.41936 4.82878 8.52605 4.57144C8.63274 4.3141 8.68768 4.03826 8.68773 3.75969C8.68779 3.48111 8.63295 3.20525 8.52635 2.94787C8.41976 2.69049 8.2635 2.45663 8.0665 2.25966L7.054 1.24716V1.2466ZM7.06525 4.66829L7.27056 4.46354C7.36309 4.37108 7.43648 4.26129 7.48656 4.14045C7.53664 4.01961 7.56241 3.89009 7.56241 3.75929C7.56241 3.62848 7.53664 3.49896 7.48656 3.37812C7.43648 3.25729 7.36309 3.1475 7.27056 3.05504L6.25806 2.04254C6.0714 1.85567 5.81817 1.75057 5.55405 1.75036C5.28992 1.75015 5.03652 1.85484 4.84956 2.04141L4.65269 2.23829L7.06581 4.66829H7.06525ZM19.375 11.875H3.0625V7.01279L6.02969 10.0002C6.14894 10.12 6.30981 10.1875 6.478 10.1875H19.375V11.875Z" fill="#27C137" />
                            </svg>
                                &nbsp; Active
                            </span>
                        </div>

                        <div className="action-buttons">
                            <div className="button-wrapper">
                                <div className="messageButton" onClick={() => SetShowAlert(!alert)}>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0415 8.49996V2.12496C12.0415 1.9371 11.9669 1.75693 11.834 1.62409C11.7012 1.49125 11.521 1.41663 11.3332 1.41663H2.12484C1.93698 1.41663 1.75681 1.49125 1.62397 1.62409C1.49113 1.75693 1.4165 1.9371 1.4165 2.12496V12.0416L4.24984 9.20829H11.3332C11.521 9.20829 11.7012 9.13367 11.834 9.00083C11.9669 8.86799 12.0415 8.68782 12.0415 8.49996ZM14.8748 4.24996H13.4582V10.625H4.24984V12.0416C4.24984 12.2295 4.32447 12.4097 4.4573 12.5425C4.59014 12.6753 4.77031 12.75 4.95817 12.75H12.7498L15.5832 15.5833V4.95829C15.5832 4.77043 15.5085 4.59026 15.3757 4.45743C15.2429 4.32459 15.0627 4.24996 14.8748 4.24996Z" fill="black" />
                                    </svg>
                                    <span className='button-rol-message'>{alert ? "Close Message" : "Message to Hub"}</span>
                                </div>

                            </div>
                            <div className="button-wrapper">
                                <Link to="/call/:id">
                                    <div className="callButton">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9998 8C13.9665 8 15.9038 8.396 17.8118 9.188C19.7205 9.97933 21.4165 11.1667 22.8998 12.75C23.0998 12.95 23.1998 13.1833 23.1998 13.45C23.1998 13.7167 23.0998 13.95 22.8998 14.15L20.5998 16.4C20.4165 16.5833 20.2041 16.6833 19.9628 16.7C19.7208 16.7167 19.4998 16.65 19.2998 16.5L16.3998 14.3C16.2665 14.2 16.1665 14.0833 16.0998 13.95C16.0331 13.8167 15.9998 13.6667 15.9998 13.5V10.65C15.3665 10.45 14.7165 10.2917 14.0498 10.175C13.3831 10.0583 12.6998 10 11.9998 10C11.2998 10 10.6165 10.0583 9.9498 10.175C9.28314 10.2917 8.63314 10.45 7.9998 10.65V13.5C7.9998 13.6667 7.96647 13.8167 7.8998 13.95C7.83314 14.0833 7.73314 14.2 7.5998 14.3L4.6998 16.5C4.4998 16.65 4.27914 16.7167 4.0378 16.7C3.7958 16.6833 3.58314 16.5833 3.3998 16.4L1.0998 14.15C0.899805 13.95 0.799805 13.7167 0.799805 13.45C0.799805 13.1833 0.899805 12.95 1.0998 12.75C2.56647 11.1667 4.25814 9.97933 6.1748 9.188C8.09147 8.396 10.0331 8 11.9998 8Z" fill="white" />
                                        </svg>
                                        <span className='button-rol-call'>Call Now</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        )
    })

    return (
        <div className='details-view-container animate__animated animate__fadeInUp'>
            {alert ? <MessageBox /> : null}
            {person}
        </div>
    )
}