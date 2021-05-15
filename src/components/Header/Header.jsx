import './Header.css'
import moogleLogo from '../../assets/logo1.png'

const Header = () => {
    return( 
    <div className="header">
    <img className="logo" src={moogleLogo} onClick={() => window.scroll(0,0)} alt="logo"/>
    </div>)
};

export default Header;