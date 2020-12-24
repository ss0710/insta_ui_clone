import React from 'react';
import Story from './Story';

const Stories = () => {

    const arr = [
        {
            name : "Travis Howard",
            src : "https://images.assetsdelivery.com/compings_v2/robuart/robuart1903/robuart190300646.jpg",
        },
        {
            name : "Remy Sharp",
            src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyu8pNTKYQ8HhZSAY327_tjab3H6lAoIJQbg&usqp=CAU",
        },
        {
            name : "Cindy Baker",
            src : "https://image.shutterstock.com/image-vector/european-profile-man-portrait-guy-260nw-1066070267.jpg",
        },
        {
            name : "Tech",
            src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4iulelcIwE-Cmxez6A_oqHUZt076QcGn7w&usqp=CAU",
        },
        {
            name : "Jhon_cloe",
            src : "https://www.jing.fm/clipimg/detail/75-751478_john-doe-passport-size-photo-clipart.png",
        },
        {
            name : "gaming",
            src : "https://data1.origin.com/content/dam/originx/web/app/programs/Download/aboutorigin_3840x2160_battlefield1.jpg",
        },
        {
            name : "Henry",
            src : "https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg",
        },
        {
            name : "DhoniFanClub",
            src : "https://economictimes.indiatimes.com/thumb/msid-68246960,width-1200,height-900,resizemode-4,imgsize-164483/among-the-oldest-cricketers-around-dhoni-and-gayle-are-showing-that-age-is-just-a-number.jpg?from=mdr",
        },
        {
            name : "Marvel_fans",
            src : "https://i.pinimg.com/originals/2c/3f/d7/2c3fd77862947349f29dc9a08d66ce7f.jpg",
        },
        {
            name : "Clark",
            src : "https://cdn4.vectorstock.com/i/1000x1000/40/53/passport-photo-young-handsome-man-close-up-vector-21284053.jpg",
        },
        {
            name : "Mark",
            src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQns2FKWA2M9KPxa2iJcctRIONqWSqFhvMJBQ&usqp=CAU",
        }
    ];

    return(
        <div>
            <Story data={arr}/>
        </div>
    );
}

export default Stories;