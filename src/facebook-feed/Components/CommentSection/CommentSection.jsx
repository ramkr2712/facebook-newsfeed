import './CommentSection.scss';
import { useEffect, useRef, useState } from 'react';
import Comment from '../Comment/Comment';


const CommentSection = (props) => {
    const [comments, setComments] = useState([]);
    const loggedInUserName = 'RamMohan K'; //Hardcoded as this app was not implemented with login functionality
    const textInput = useRef(null);
    useEffect(() => {
        debugger;
        setComments([...props.comments]);
    }, []);
    const eachComment = (comment, i) => {
        return (<Comment key={i} index={i} name={comment.name} duration={comment.duration}>{comment.message}</Comment>)
    };

    const addComment = (text) => {
        var arr = [...comments];
        let comment = { name: loggedInUserName, duration: 0, message: text };
        arr.push(comment);
        setComments(arr);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addComment(textInput.current.value);
            textInput.current.value = "";
            textInput.current.focus();
            e.preventDefault();
        }
    };

    return (
        <div>
            <div className="comment-section">
                {/* <Comment name={"Bruce Wayne"} time={3}>Mark, we have windows...</Comment>
                <Comment name={"Mark Zuckerberg"} time={2}>Shut up Bruce</Comment> */}
                {comments.map(eachComment)}
            </div>
            <div className="input">
                <img />
                <textarea ref={textInput} onKeyPress={handleKeyPress} placeholder="Write a comment..." />
            </div>
        </div>
    );
}


export default CommentSection;