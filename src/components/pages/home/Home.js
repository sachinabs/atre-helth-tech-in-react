import './HomeStyles.css';
import { Route, Routes, Link } from 'react-router-dom'
export default function Home() {

    return (
        <div className='animate__animated animate__fadeInUp'>
            <h1>This is home page.</h1>
            {/* <Link to={"/chat"}> go to chat</Link> */}
            
        </div>
    )
}