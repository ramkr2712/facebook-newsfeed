import './Comment.scss';
import Action from '../Action/Action';
import Hour from '../Hour/Hour';


const Comment = (props) => {
    return (
        <div className="single-comment">
          <img />
          <div className="single-container">
            <span>{props.name}</span>
            <span>{props.children}</span>
          </div>
          <div className="buttons">
            <Action text="Like!" />
            <Action text="Respond" />
            <Hour time={props.duration} />
          </div>
        </div>
      );
}

export default Comment;