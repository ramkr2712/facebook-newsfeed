import './App.css';
import Post from './facebook-feed/Components/Post/Post';

function App() {
  return (
    <div className="app">
      <div className="header">
      <img src ="data:image/jpeg;base64,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"/>  Facebook Posts
      </div>
      <div className="main-content">
        <Post />
      </div>
      <div className="footer">
        Developed by RamMohan K
      </div>
    </div>
  );
}

export default App;
