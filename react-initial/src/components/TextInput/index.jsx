/* eslint-disable react/react-in-jsx-scope */
import './styles.css';
import { proptypes } from 'prop-types';

export const TextInput = ({ searchValue, actionFn }) => {
  return (
    <input
      className="text-input"
      type="search"
      value={searchValue}
      onChange={actionFn}
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: proptypes.string.isRequired,
  actionFn: proptypes.func.isRequired,
};
