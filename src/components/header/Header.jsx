import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import linkedin from '../../assets/linkedin.png';
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout } from "../../redux/actions";
import { useDispatch, useSelector} from "react-redux";



const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user)
   
    
    const logoutBtn = () => {
        dispatch(logout());
    }

    return (
        <div className="header">
        {/* el header esta divididoen 2 */}
            <div className="header__left">
                <img src={linkedin} title="linkedin icons" alt="linkedin_icon" />

                <div className="header__search">
                    {/* SearchIcon */}
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                {user? 
                    (<HeaderOptions onClick={logoutBtn} avatar={true} title={user.displayName} />)
                    :
                    (<HeaderOptions avatar={true} title={'user'} />)
                }
            </div>
        </div>
    );
};

export default Header;
