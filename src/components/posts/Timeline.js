import React from 'react';
import Post from '../posts/Post';

const Timeline = () => {

    const posts = [
        {
            name : "_dhoni_fansClub",
            caption: "Most succesful Indian Captain..",
            profile: "https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg",
            post: "https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg"
        },
        {
            name : "_Space_theory",
            caption: "The universe is a pretty big place. If it's just us, seems like an awful waste of space",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlpQwpgLi3g_pbIQRpOCXHgWUEW33-bQmieg&usqp=CAU",
            post: "https://steamuserimages-a.akamaihd.net/ugc/268340571050108812/7E8ECBBE023A2F8FC8F4C4C1A070324B4D7FB609/"
        },
        {
            name : "_marvel_fc",
            caption: "WandaVision...",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwN1a4RB3LIsX7PMz2gnRk0Zdp5O44losE9Q&usqp=CAU",
            post: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wandavision-poster-1600668936.jpg"
        },
        {
            name : "auto_sports_",
            caption: "Take care of your car in the garage, and the car will take care of you on the road...",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFtemVsPveS261D3bhxXwc0IXSDWDZ1JQew&usqp=CAU",
            post: "https://i.pinimg.com/736x/09/6f/75/096f75fcc35b24fbd81a9e2a85deaccf.jpg"
        },
        {
            name : "developers_club",
            caption: "Before software can be reusable it first has to be usable...",
            profile: "https://www.sonatype.com/hs-fs/hubfs/Developer%20Page%202020/intro-image-update-dev@4x.png?width=1669&name=intro-image-update-dev@4x.png",
            post: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        }
    ];

    return(
        <div>
            <Post post={posts} />
        </div>
    );
}

export default Timeline;