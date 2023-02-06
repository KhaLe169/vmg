import { useRouter } from 'next/router'; 
import { postApi } from '@/api/postAPI';  

function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  )
}

export default Post

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  )
  const data = await response.json();
  // const response = await postApi.getPostByID(params.postID); 
  // const data = response?.data
  console.log("data", data);
  if (!data.id) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: data
    }
  }
}

export async function getStaticPaths() {
  const response = await postApi.getPostList(); 
  const data = response?.data;
  const paths = data.map(post => { 
    return {
      params: { postID: `${post.id}` }
    }
  })

  return {
    paths: paths,
    fallback: true
  }
}
