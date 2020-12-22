import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const InputTextField = ({ type, placeholder}) => {

    const useStyles = makeStyles((theme, len) => ({
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(0.5),
          width: 300,
        },
      },
    }));
  
    const classes = useStyles();
    return(
        <div className="text-field">
            <form className={classes.root}>
            <TextField variant="outlined" 
                       type={type}
                       size="small"
                       label={placeholder}
            /> 
            </form>
        </div>
    );
}

InputTextField.PropType = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

export default InputTextField;