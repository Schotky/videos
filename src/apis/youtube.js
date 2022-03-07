import axios from "axios";

const KEY = "AIzaSyBG2RJNl6ylcB5c2crSky9O3-_9HWBACDc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
