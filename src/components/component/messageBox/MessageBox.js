import './MessageBoxStyles.css';

export default function MessageBox() {
    return (
        <div className=' messageBox-container animate__animated animate__fadeInUp'>
            <div className="sender-name-container">
                <span className='sender'>Juno Hub - II</span>
            </div>
            <div className="message-container">
                <span className='message-from'>
                    <span className="message white">
                        Doctor can you see the screen ??
                    </span>
                </span>
                <span className='message-to'>
                    <span className="message black">
                        I think its a network problem.
                    </span>
                </span>
            </div>
            <div className="inputBox">
                <input className='input-box' placeholder='      Message....' type="text" name="" id="" />
                <button className='send'><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.627004 14.9411L14.0577 7.7191L0.627004 0.49707L0.620605 6.1142L10.2185 7.7191L0.620605 9.32399L0.627004 14.9411Z"
                        fill="#959595" />
                </svg></button>
            </div>
        </div>
    )
}