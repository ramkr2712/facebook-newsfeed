import './Bar.scss';
import Action from '../Action/Action';


const Bar = (props) => {
    return (
        <div className="bar">
          <Action text={"Like!"} />
          <Action text={"Comment"} />
          <Action text={"Share"} />
        </div>
      )
}

export default Bar;