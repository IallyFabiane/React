import { Component } from 'react';
import './styles.css';
import { proptypes } from 'prop-types';

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <button disabled={disabled} className="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: proptypes.string,
  onClick: proptypes.func.isRequired,
  disabled: proptypes.bool,
};
