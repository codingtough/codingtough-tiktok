import React from 'react';
import './VideoHeader.css';

function VideoHeader({channel}) {
   return (
      <div className="videoHeader">
         <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/220px-TikTok_logo.svg.png" 
            alt="Tiktok"
         />
         <p>@{channel}</p>
      </div>
   )
}

export default VideoHeader
