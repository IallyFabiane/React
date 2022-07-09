import {
  render,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react';
import { Home } from '.';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';

const handlers = [
  rest.get(
    '*jsonplaceholder.typicode.com*',
    async (request, response, context) => {
      return response(
        context.json(
          {
            userId: 1,
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            url: 'img1.jpg',
          },
          {
            userId: 2,
            id: 2,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            url: 'img2.jpg',
          },
          {
            userId: 3,
            id: 3,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            url: 'img3.jpg',
          },
        ),
      );
    },
  ),
];

const server = setupServer({ ...handlers });

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render search, posts and load more', async () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<Home />);
    expect.assertions(1);

    const noMorePosts = screen.getByText('Não existem posts');
    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type tour search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<Home />);
    expect.assertions(10);
    const noMorePosts = screen.getByText('Não existem posts');
    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type tour search/i);
    expect(search).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'title 1' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'title 2' }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: 'title 3' }),
    ).not.toBeInTheDocument();

    userEvent.type(search, 'title1');
    userEvent.type(search, 'title1');
    expect(
      screen.getByRole('heading', { name: 'title1 1' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'title2 2' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'title3 3' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Search value: title1' }),
    ).toBeInTheDocument();

    userEvent.clear(search);
    expect(
      screen.getByRole('heading', { name: 'title1 1' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title2 2' }),
    ).toBeInTheDocument();

    userEvent.type(search, 'post does not exist');
    expect(screen.getByText('Não existem posts =(')).toBeInTheDocument();
  });

  it('should load more posts', async () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<Home />);
    //expect.assertions(1);

    // eslint-disable-next-line no-unused-vars
    const button = screen.getByRole('button', { name: /load more posts/i });
    userEvent.click(button);
    screen.getByRole('heading', { name: 'title3 3' }).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
