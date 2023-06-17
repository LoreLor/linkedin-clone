import { Avatar } from "@mui/material";
import bgImage from "../../assets/COFFE Y PC.png";
import "./Sidebar.css";
import { useSelector } from "react-redux";



const Sidebar = () => {
    const user = useSelector((state) => state.user.user)

    const recentItem = (topic) => {
        return(
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        );
    };

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={bgImage} alt="bg_image_sidebar" />
                <Avatar className="sidebar__avatar" src={user.photoURL}>{user.email[0]}</Avatar> 
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,356</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("design")}
                {recentItem("develop")}
                {recentItem("fullstack")}
                {recentItem("nodejs")}
            </div>
        </div>
    );
};

export default Sidebar;
