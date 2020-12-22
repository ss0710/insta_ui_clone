import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const ClickButton = ({text}) => {

    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, rgb(71, 148, 248) 30%, rgb(71, 148, 248) 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 30,
          width: 300,
          margin: 10,
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);

    return(
        <div>
            <StyledButton>
            {text}
            </StyledButton>
        </div>
    );
}

ClickButton.PropType = {
    text: PropTypes.string,
}

export default ClickButton;