import React from 'react';
import Avatar from "@material-ui/core/Avatar"; 

const Suggestions = () => {

    const accounts = [
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4_YDu3f9mZqyBTyaNrIbiWdz8IaJXVg5_A&usqp=CAU",
            name: "computerScience"
        },
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQdiQEPYCGHL2KcZQfI675Vkw8C-kC4snzw&usqp=CAU",
            name: "_tech_tips"
        },
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSX5E_Y5KajrGgCXru5JaFqHj1f4knkuEGwA&usqp=CAU",
            name: "_oneFood"
        },
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xfgyN_YzvtddMcnpdchiC6N5M2Uc0JfCtQ&usqp=CAU",
            name: "_arts_gallery"
        },
        {
            profile: "https://im.indiatimes.in/content/itimes/photo/2015/Jul/16/1437046825-raina-and-yuvraj-funny-pics.jpg",
            name: "cricket_memes360"
        }
    ];

    return(
        <div>
            <div className="suggestion-container">
                <div className="suggestion-heading">
                    <div>
                        <p className="heading">Suggestions For You</p>
                    </div>
                    <div>
                        <p className="see-all">see all</p>
                    </div>
                </div>
                {
                    accounts.map((data, i)=>{
                        return(
                            <div className="avatar" key={i}>

                            <div className="imformation">
                            <div>
                            <Avatar alt="profile" src={data.profile} />
                            </div>
                            <div className="details">
                            <p className="user-fullname">{data.name}</p>
                            </div>
                            </div>
            
                            <div className="follow-link">
                            <p>follow</p>
                            </div>
            
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Suggestions;