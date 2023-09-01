import React from 'react';
import './App.css';
import PageHeader from './PageHeader';
import Post from './Post';
import Button from './Button';

function App() {
  const buttons = ['Tap Button', 'Tap Button', 'Tap Button', 'Tap Button', 'Tap Button', 'Tap Button', 'Tap Button', 'Tap Button', 'Tap Button', 'Tap Button', 'Tap Button', 'Tap Button', 'Tap Button'];
  return (
    <div className="App">
      <PageHeader />
      <div className="content">
      <div className="left-column">
        <Post
          title="This is the post Title"
          body="This the post body"
        />
        <Post
          title="This is the post Title"
          body="This the post body"
        />
        <Post
          title="This is the post Title"
          body="This the post body"
        />
        <Post
          title="This is the post Title"
          body="This the post body"
        />
        <Post
          title="This is the post Title"
          body="This the post body"
        />
      </div>      
      <div className="right-column">
      <Button buttons={buttons} />
      </div>
    </div>
    </div>
  );
}
export default App;