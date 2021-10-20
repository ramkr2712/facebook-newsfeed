import './Creator.scss';
import Hour from '../Hour/Hour';

const Creator = (props) => {
    return (<div className="creator">
        <img />
        <div>
            <p>{props.name}</p>
            <Hour time={props.duration} />
        </div>
    </div>);
}

export default Creator;