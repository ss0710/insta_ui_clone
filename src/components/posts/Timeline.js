import React from 'react';
import Post from '../posts/Post';

const Timeline = () => {

    const posts = [
        {
            name : "_dhoni_fansClub",
            profile: "https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg",
            post: "https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg"
        },
        {
            name : "_Space_theory",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlpQwpgLi3g_pbIQRpOCXHgWUEW33-bQmieg&usqp=CAU",
            post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_aRWOmndnUExgDLkWsnMi4PvcuaL8QVmIQ&usqp=CAU"
        },
        {
            name : "_marvel_fc",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwN1a4RB3LIsX7PMz2gnRk0Zdp5O44losE9Q&usqp=CAU",
            post: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wandavision-poster-1600668936.jpg"
        },
        {
            name : "auto_sports_",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFtemVsPveS261D3bhxXwc0IXSDWDZ1JQew&usqp=CAU",
            post: "https://i.pinimg.com/736x/09/6f/75/096f75fcc35b24fbd81a9e2a85deaccf.jpg"
        },
        {
            name : "developers_club",
            profile: "https://www.sonatype.com/hs-fs/hubfs/Developer%20Page%202020/intro-image-update-dev@4x.png?width=1669&name=intro-image-update-dev@4x.png",
            post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6evNhqBDF9XTzWhPrX1FQyHEzQa3op0ghw&usqp=CAU"
        }
    ];

    return(
        <div>
            <Post post={posts} />
        </div>
    );
}

export default Timeline;