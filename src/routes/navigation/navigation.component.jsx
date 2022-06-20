import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

    return (
      <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo' />
            </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation