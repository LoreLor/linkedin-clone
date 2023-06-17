/* eslint-disable react/display-name */

/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
import "./Post.css";
import InputOptions from "./InputOptions";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { forwardRef } from "react";



const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {

    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpIcon} title='Like' color='gray' />
                <InputOptions Icon={TextsmsIcon} title='Comment' color='gray'/>
                <InputOptions Icon={ShareIcon} title='Share' color='gray'/>
                <InputOptions Icon={SendIcon} title='Send' color='gray'/>
            </div>
        </div>
    )
})

export default Post;
