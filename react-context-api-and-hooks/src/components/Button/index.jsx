/* eslint-disable prettier/prettier */
import P from 'prop-types';

export const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button disabled={disabled} style={{ fontSize: '20px', padding: '10px', border: 'none', borderRadius: '3px', backgroundColor: 'orange', boxShadow: '1px 1px 2px 2px rgba(0,0,0, 0.5)' }} onClick={onButtonClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool,
};
