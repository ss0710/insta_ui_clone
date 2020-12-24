import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';

const Post = (props) => {
    return(
        <div>
            {
                props.post.map((user, i)=>{
                    return(
                        <div className="post-div">

                        <div className="post-container">
                            <div className="user-imfo">
                                <div className="user-detail">
                                <Avatar alt="profile-pic" src={user.profile} /><p className="user-name">{user.name}</p>
                                </div>
                            </div>
                            <div className="options">
                                <MoreHoriz />
                            </div>
                        </div>

                        <div className="content">
                            <img width="100%" height="600px" src={user.post} alt="uploaded-image"/>
                        </div>

                        <div className="react-options">
                            <div className="react"> 
                                <FavoriteBorder/>
                                <ChatBubbleOutlineRoundedIcon/>
                                <SendRoundedIcon/>
                            </div>
                            <div className="save">
                                <BookmarkBorderRoundedIcon/>
                            </div>
                        </div>

                        <div className="comment-box">
                            <div className="input-field"> 
                                <input type="text" placeholder="comment..."/>
                            </div>
                            <div className="post-button">
                                <p>Post</p>
                            </div>
                        </div>

                        </div>
                    )
                })
            }
        </div>
    );
}

export default Post;