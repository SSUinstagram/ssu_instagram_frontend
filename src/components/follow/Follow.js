import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FollowContent from "./FollowContent";
import Header from "../home/Header";
import axios from "axios";
import Cookies from "js-cookie";

const FollowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
function Follow() {
  const [followingUserList, setFollowingUserList] = useState([]);
  const user_id = Cookies.get("user-id");
  useEffect(() => {
    (async () => {
      const usersRes = await axios.get("follow/user");
      const user = usersRes.data;

      const tableRes = await axios.get("follow/table", {
        params: { user_id: user_id },
      });
      const followList = tableRes.data;

      const followingUserList = user.map((user) => {
        let isFollowedUser = false;
        followList.forEach((followUser) => {
          if (followUser.followed_id === user.id) isFollowedUser = true;
        });
        return {
          id: user.id,
          following: isFollowedUser,
        };
      });
      setFollowingUserList(followingUserList);
    })();
  }, []);

  return (
    <FollowWrapper>
      <Header id="header" />
      {followingUserList?.map((followingUser) => (
        <FollowContent followingUser={followingUser} />
      ))}
    </FollowWrapper>
  );
}

export default Follow;
