import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar"; 

const Story = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: "flex",
          width: "620px",
          overflowx: "scroll",
          "& > *": {
            border: "3px solid rgb(255, 28, 28)",
            cursor: "pointer",
            height: "60px",
            width: "60px",
            margin: theme.spacing(1)
          }
        }
      }));

      const classes = useStyles();

    return(
        <div>
            <div className={classes.root}>
                {
                    props.data.map((data, i)=>{
                        return(<Avatar key={i} alt={data.name} src={data.src} />)
                    })
                }
        </div>
        </div>
    );
}

export default Story;