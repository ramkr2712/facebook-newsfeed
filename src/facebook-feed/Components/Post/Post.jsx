import { useEffect, useState } from 'react';
import Creator from '../Creator/Creator';
import Message from '../Message/Message';
import Bar from '../Bar/Bar';
import CommentSection from '../CommentSection/CommentSection';
import { getPosts } from '../../services/posts';
import './Post.css';

const Post = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const POSTS = getPosts();
        setPosts(POSTS);
    }, []);

    return (
        <div>
            {
                posts.map((post,i) => {
                    return (
                        <div key={i} className="post">
                            <Creator name={post.creator} duration ={post.duration}/>
                            <Message text={post.message} />
                            <Bar />
                            <CommentSection comments={post.comments} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Post;