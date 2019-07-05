import React from 'react';
import '@material/react-button/dist/button.css';
import Button from '@material/react-button';
import PropTypes from 'prop-types';


const MyBtn = ({
  children,
  className,
   outlined,
    unelevated,
    raised,
    disabled,
    onClickHandler,
  ...otherProps
}) => {
  
  return (
    <Button onClick={onClickHandler}
      {...otherProps} className={className} outlined={outlined} unelevated={unelevated} raised={raised} disabled={disabled}>
        Click Me!
      </Button>
  );
};
MyBtn.propTypes={
  children: PropTypes.string,
  className: PropTypes.string,
  outlined: PropTypes.bool,
    unelevated: PropTypes.bool,
  raised: PropTypes.bool,
    disabled: PropTypes.bool,
    onClickHandler: PropTypes.func
};
MyBtn.defaultProps={
    children:'',
    className:'',
    outlined:false,
    unelevated:false,
    raised:false,
    disabled:false
};

export default MyBtn;