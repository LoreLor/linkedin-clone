/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";





const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
    const user = useSelector((state) => state.user.user)


    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <Avatar className="headerOption__icon" onClick={onClick} src={user?.photoURL}>{user?.email[0]}</Avatar>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    );
};

export default HeaderOptions;
