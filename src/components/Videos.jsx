import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Videos = ({ videos }) => {
  console.log(videos);

  return (
    <div>
      {videos ? (
        videos.map((video, index) => {
          const videoId = video.id.videoId;
          return (
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} key={index}>
              <div>
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
              </div>
            </Link>
          );
        })
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Videos;
