import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { render, screen } from "@testing-library/react";
import { PostCard } from '.';

const mockProps = {
    title: 'title1',
    body: 'body1',
    id: 1,
    cover: 'img/img.png'
}

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...mockProps} />);

    expect(screen.getByRole('img', { name: 'title1' })).toHaveAttribute('src', mockProps.cover)
    expect(screen.getByRole('heading', { name: 'title1' })). toBeInTheDocument()
    expect(screen.getByText('body1')). toBeInTheDocument()
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...mockProps} />)
        expect(container.firstChild).toMatchSnapshot()

    });
})