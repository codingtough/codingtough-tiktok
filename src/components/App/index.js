import './App.css';
import Video from '../Video';
import { useEffect, useState } from 'react';
import db from '../Firebase';

function App() {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      db.collection("videos")
         .onSnapshot(snapshot => (
            setVideos(snapshot.docs.map(doc => ({
               id: doc.id,
               video: doc.data()
            })))
         ))
   }, [videos]);

  return (
    <div className="app">
      <div className="app__videos">
         {videos.map(({id, video: { url, channel, description, song, likes, messages, shares }}) => (
            <Video 
               key={id}
               url={url}
               channel={channel}
               description={description}
               song={song}
               likes={likes}
               shares={shares}
               messages={messages}
            />
         ))}
      </div>
    </div>
  );
}

export default App;
