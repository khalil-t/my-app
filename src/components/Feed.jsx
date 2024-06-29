import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios from 'axios';
import {fetchdata} from '../utils/Datafetch'
import {  Sidebar } from "./";
import Videos from "./Videos";
import './Feed.css'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
  setVideos(null)

  const fetchVideos = async () => {
    try {
      const data = await fetchdata(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data.data.items
      );
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    }
  };
  
  fetchVideos();
  






  },[selectedCategory]);
  return (


    <div className="one">
      
      <Box >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box >
        <Typography >
      
        </Typography>

      </Box>
      <Videos videos ={videos}/>


    </div>
  );
};

export default Feed;