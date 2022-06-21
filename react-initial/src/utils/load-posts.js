export const loadPosts = async () => {
const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts'); // usando a fetch api nativa do navegador para fazer requisições
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);//retornando um array de promessas
  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    return({...post, cover: photosJson[index].url})
  });
  
  return postsAndPhotos;
}