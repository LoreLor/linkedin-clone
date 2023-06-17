/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Post from "./Post";
import FlipMove from "react-flip-move";
import { useEffect, useState } from "react";
import { createPost, getPosts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";



const Feed = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState();
    const user = useSelector((state) => state.user.user)
    const posts = useSelector((state) => state.posts.allPosts)
    const loading = useSelector((state) => state.posts.loading)
    const error = useSelector((state) => state.posts.error)


    useEffect(() => {
        dispatch(getPosts())
        }, []);
    

    const sendPost = (e) => {
        e.preventDefault();
        if(loading) return <div>Loading...</div>
        if(error) return <div>Ooops ocurred an error {error}</div>
        
        try {
            const newPost = {
                name: user.displayName,
                description: user.email,
                message: input,
                photoUrl:user.photoURL,
                createdAt: Date.now()
            }
    
            dispatch(createPost(newPost))
            setInput('');
            dispatch(getPosts())
    
        } catch (error) {
            console.error('Error to add post', error);
        }
    };

    


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input 
                            type="text" 
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <button 
                            type="submit" 
                            onClick={sendPost}
                        >
                            Send
                        </button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOptions
                        Icon={ImageIcon}
                        title="Photo"
                        color="#378FE9"
                    />
                    <InputOptions
                        Icon={SmartDisplayIcon}
                        title="Video"
                        color="#5F9B41"
                    />
                    <InputOptions
                        Icon={EventNoteIcon}
                        title="Event"
                        color="#C37D16"
                    />
                    <InputOptions
                        Icon={NewspaperIcon}
                        title="Write Article"
                        color="#E16745"
                    />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
                {posts && posts.map((post) => {
                    return (
                            <Post
                                key={post.id}
                                name={post.data.name}
                                description={post.data.description}
                                message={post.data.message}
                                photoUrl={post.data.photoUrl}
                            />
                    )
                })}
            </FlipMove>
        </div>
    );
};

export default Feed;
