import Image from 'next/image';
import Link from 'next/link';
import SinglePost from './[id]/page';

async function allPosts() {
  const res = await fetch('https://jsonplaceholder.org/posts');
  const data = await res.json();
  return data;
}

export default async function Posts() {
  const posts = await allPosts();
  return (
    <>
      {posts.map(
        (posts: {
          id: number;
          title: string;
          content: string;
          image: string;
        }) => {
          return (
            <div key={posts.id}>
              <Link className='titles-link' href={`/posts/${posts.id}`}>
                <h1>{posts.title}</h1>
              </Link>
              <p className='posts-contents'>{posts.content}</p>
              <Image
                src={posts.image}
                width={450}
                height={400}
                alt='imagenes'
              />
            </div>
          );
        }
      )}
      <p>{JSON.stringify(posts)}</p>
    </>
  );
}
