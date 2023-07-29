import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

    const naviage = useNavigate()

    const backward = () => {
        naviage(-1)
    }
    const forward = () => {
        naviage(1)
    }

    return (
        <div className='col-md-8'>
            <div className='page-header'>
                <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
                    <h2>React Route & Redux Demo</h2>
                </Link>
                <button onClick={backward}>←后退</button>
                <button onClick={forward}>前进→</button>
            </div>
        </div>
    )
}
