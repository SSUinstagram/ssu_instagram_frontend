import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import axios from "axios";

const FollowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    margin: 20px;
  }
  button {
    background-color: antiquewhite;
  }
`;
function Follow({ followingUser }) {
  const following_id = Cookies.get("user-id");
  const [isFollowing, setIsFollowing] = useState(followingUser?.following);
  const [updateFollow, setUpdateFollow] = useState({
    following_id: following_id,
    followed_id: followingUser.id,
    state: isFollowing,
  });
  useEffect(() => {
    setUpdateFollow({
      ...updateFollow,
      state: isFollowing,
    });
  }, [isFollowing]);

  const followButtonCilck = async () => {
    console.log(updateFollow);
    if (isFollowing) {
      setIsFollowing(false);
      let result = await axios.post("/follow/update", updateFollow);
    } else {
      setIsFollowing(true);
      let result = await axios.post("/follow/update", updateFollow);
    }
  };

  return (
    <FollowWrapper>
      <div>아이디: {followingUser?.id}</div>
      <button onClick={followButtonCilck}>
        {isFollowing ? "follow" : "unfollow"}
      </button>
    </FollowWrapper>
  );
}

export default Follow;
