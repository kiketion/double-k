import Image from 'next/image';
import Link from 'next/link';

interface postProps {
  title: string;
  id: number;
  content: string;
  image: string;
}

// async function Post(props: postProps) {
//   const res = await fetch(`https://jsonplaceholder.org/posts/${props.id}`);
//   const data = await res.json();
//   return data;
// }
export default async function SinglePost({ params }: any) {
  // const post = await Post();
  return (
    <>
      <div>
        <h1>{params.id}</h1>
        <h1>{params.title}</h1>
        <Image src={params.image} width={450} height={400} alt={params.title} />
        <p>{params.content}</p>
        <Link href='/posts'>
          <button>Go Back</button>
        </Link>
      </div>
    </>
  );
}
