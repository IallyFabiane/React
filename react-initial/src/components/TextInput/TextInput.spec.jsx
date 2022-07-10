import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from '.';

describe('<TextInput />', () => {
    it('should a value of searchValue', ()=> {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} searchValue={value} />)
        expect(screen.getByPlaceholderText(/type your search/i)).toBe('')
        expect(screen.getByPlaceholderText(/type your search/i).value).toBeInTheDocument()
    })

    it('should call handleChange function each key pressed', ()=> {
       const fn = jest.fn();
       render(<TextInput handleChange={fn} searchValue='' />)

       const input = screen.getByPlaceholderText(/type your search/i)
       const value = ''
       userEvent.type(input, value)
       expect(input.value).toBe(value)
       expect(fn).toHaveBeenCalledTimes(value.length);
    })

    it('should match snapshot', ()=> {
        const fn = jest.fn();
        const { container } = render(<TextInput handleChange={fn} />)
        expect(container).toMatchSnapshot()
     })
})
