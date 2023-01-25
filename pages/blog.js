import Layout from "../components/Layout";
import {posts} from "../profile"

const PostCard = ({post}) =>( 
    <div className="col-md-4">
        <div className="card">
            <div className="overflow">
                <img src={post.imageURL} alt="" className="card-img-top"/>
            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        </div>

    </div>
)

const Blog = () => (
    <Layout footer={false} dark={true} title="My Blog">
        {posts.map((post,i)=>(<PostCard post={post} key={i}></PostCard>))}
    </Layout>
)

export default Blog;