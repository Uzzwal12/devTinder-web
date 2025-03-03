import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/feedSlice";
import UserCard from "./UserCard";
function Feed() {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed) return;

    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  if (!feed) return;

  return (
    <div className="flex justify-center">
      <UserCard user={feed[0]} />
    </div>
  );
}

export default Feed;
