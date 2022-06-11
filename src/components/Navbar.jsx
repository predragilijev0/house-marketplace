import {useNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if(route === location.pathname) {
            return true
        }
    } 

    return (
        <footer className='navbar'>
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => navigate('/')}>
                        <ExploreIcon fill={(pathMatchRoute('/') || pathMatchRoute('/category/rent') || pathMatchRoute('/category/sale')) ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                        <p className={(pathMatchRoute('/') || pathMatchRoute('/category/rent') || pathMatchRoute('/category/sale')) ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/offers')}>
                        <OfferIcon fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                        <p className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offers</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/profile')}>
                        <PersonOutlineIcon fill={(pathMatchRoute('/profile') || pathMatchRoute('/sign-in') || pathMatchRoute('/sign-up')) ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                        <p className={(pathMatchRoute('/profile') || pathMatchRoute('/sign-in') || pathMatchRoute('/sign-up')) ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Navbar