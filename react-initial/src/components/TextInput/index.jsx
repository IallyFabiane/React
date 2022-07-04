import './styles.css';

export const TextInput = ({ searchValue, actionFn}) => {
   return (
   <input 
        className='text-input'
        type="search" 
        value={searchValue}
        onChange={actionFn}
        placeholder="Type your search"
    />
    );
}