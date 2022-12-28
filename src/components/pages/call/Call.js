import MessageBox from '../../component/messageBox/MessageBox';
import './CallStyles.css';
import clientVideo from './video/pexels-mikhail-nilov-7682755.mp4'
import doctorVideo from './video/video.mp4'

import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


export default function Call() {
    const [alert, SetShowAlert] = React.useState(false);

    const requestUrl = ` http://localhost:9000/api/sql/getRobo/R001 `

    const [roboParams, setRoboParams] = React.useState([]);

    // const [tog]  change the edit button here.

    function takeSnap() {
        var node = document.getElementById('printMe');

        htmlToImage.toPng(node)
            .then(function (dataUrl) {
                const fileName = new Date().toLocaleString().replace(',', '')
                var img = new Image();
                img.src = dataUrl;
                // document.body.appendChild(img);
                var link = document.createElement('a');
                link.download = `img-${fileName}`
                link.href = dataUrl;
                link.click();

            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    const [showSave, setShowSave] = React.useState(true);

    function changeToInput() {
        setShowSave(false)
        let element = document.querySelectorAll(".inputer");

        for (let index = 0; index < element.length; index++) {
            console.log(element[index].innerHTML);
            element[index].innerHTML = `<input type="text" class="input-data" value=${element[index].innerHTML}>`;

        }
    }
    function changeText() {
        setShowSave(true)
        let updateData = document.querySelectorAll(".input-data")

        let updatedValues = []
        for (let index = 0; index < updateData.length; index++) {
            const element = updateData[index].value;
            updatedValues.push(element);

        }
        console.log(updatedValues);

        const insetPlaces = document.querySelectorAll(".inputer")
        const inputNode = document.querySelectorAll(".input-data")

        for (let index = 0; index < insetPlaces.length; index++) {
            const element = insetPlaces[index];
            console.log(element);
            element.appendChild(document.createTextNode(updatedValues[index]))
            inputNode[index].remove();

        }
    }

    React.useEffect(() => {
        axios.get(requestUrl).then((response) => {
            setRoboParams(response.data);
        }).catch(err => console.log(err));
    }, []);

    let data = roboParams.map((item, index) => {
        return (
            <table key={index}  >
                <tbody>
                    <tr>
                        <td className='title'>Scan Type</td>
                        <td className='title'>Gain</td>
                        <td className='title'>Zoom Level</td>
                        <td className='title'>System Mode</td>
                        <td className='title'>Depth</td>
                        <td className='title'>Focus - x</td>
                        <td className='title'>Focus - y</td>
                    </tr>
                    <tr>
                        <td className='value inputer'>{item.scan_type}</td>
                        <td className='value inputer'>{item.gain}</td>
                        <td className='value inputer'>{item.zoom_level}</td>
                        <td className='value inputer'>{item.system_mode}</td>
                        <td className='value inputer'>{item.depth}</td>
                        <td className='value inputer'>{item.x}</td>
                        <td className='value inputer'>{item.y}</td>
                    </tr>
                </tbody>
            </table>
        )
    })

    return (
        <div className='video-call-view animate__animated animate__fadeInUp'>
            <div className="live-video" id='printMe'>
                <video autoPlay muted loop id="myVideo">
                    <source src={doctorVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>

            <div className="menus">

                <div className="robo-params-container">
                    <div className="robo-name-container">
                        <span className='robo-title'>DOOSAN - A0509</span>
                        {showSave ? <span className='edit' onClick={() => changeToInput()}> [edit] </span> : <span className='edit' onClick={() => changeText()}> [save] </span>}
                    </div>
                    {data}
                </div>
            </div>
            <div className="mini-video-container">
                <video autoPlay muted loop id="mini-video">
                    <source src={clientVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="mini-video-person-container">
                    <span>Vinm Rosh</span>
                </div>
            </div>
            <div className="snap-screen">
                <button onClick={() => takeSnap()}>Take snap</button>
            </div>
            <div className="buttons">
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
                        <Link to="/">
                            <div className="endButton end">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9998 8C13.9665 8 15.9038 8.396 17.8118 9.188C19.7205 9.97933 21.4165 11.1667 22.8998 12.75C23.0998 12.95 23.1998 13.1833 23.1998 13.45C23.1998 13.7167 23.0998 13.95 22.8998 14.15L20.5998 16.4C20.4165 16.5833 20.2041 16.6833 19.9628 16.7C19.7208 16.7167 19.4998 16.65 19.2998 16.5L16.3998 14.3C16.2665 14.2 16.1665 14.0833 16.0998 13.95C16.0331 13.8167 15.9998 13.6667 15.9998 13.5V10.65C15.3665 10.45 14.7165 10.2917 14.0498 10.175C13.3831 10.0583 12.6998 10 11.9998 10C11.2998 10 10.6165 10.0583 9.9498 10.175C9.28314 10.2917 8.63314 10.45 7.9998 10.65V13.5C7.9998 13.6667 7.96647 13.8167 7.8998 13.95C7.83314 14.0833 7.73314 14.2 7.5998 14.3L4.6998 16.5C4.4998 16.65 4.27914 16.7167 4.0378 16.7C3.7958 16.6833 3.58314 16.5833 3.3998 16.4L1.0998 14.15C0.899805 13.95 0.799805 13.7167 0.799805 13.45C0.799805 13.1833 0.899805 12.95 1.0998 12.75C2.56647 11.1667 4.25814 9.97933 6.1748 9.188C8.09147 8.396 10.0331 8 11.9998 8Z" fill="white" />
                                </svg>
                                <span className='button-rol-call'>End the Call</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="message-box">
                {alert ? <MessageBox /> : null}

            </div>

        </div>
    )
}