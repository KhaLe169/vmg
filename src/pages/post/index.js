
import { postApi } from '@/api/postAPI';
import Link from 'next/link'

function PostList({ posts }) { 
  return (
    <> 
      <h1>List of Posts</h1>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <Link href={`post/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const response = await postApi.getPostList(); 
  const data = response.data
  return {
    props: {
      posts: data
    }
  }
}