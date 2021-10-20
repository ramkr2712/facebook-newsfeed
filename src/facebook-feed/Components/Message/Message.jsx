import './Message.css';
import ReactHtmlParser from 'react-html-parser';


const Message = (props) => {
  const { text } = props;
  return (
    <p className="message"> {ReactHtmlParser(text)}</p>
  )
}

export default Message;