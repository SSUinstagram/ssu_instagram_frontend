import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import styled from "styled-components";
import moment from "moment";
import Header from "./home/Header";
import axios from "axios";

const Layout = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: large;
  div {
    margin: 20px;
  }
`;
function Profile() {
  const user_id = Cookies.get("user-id");
  const [follow_num, setFollowing_num] = useState({
    following_id: 0,
    followed_id: 0,
  });

  useEffect(() => {
    (async () => {
      console.log("??");
      const following = await axios.get("follow/getFollowingNum", {
        params: { user_id: user_id },
      });
      const followed = await axios.get("follow/getFollowedNum", {
        params: { user_id: user_id },
      });

      setFollowing_num({
        ...follow_num,
        following_id: following.data,
        followed_id: followed.data,
      });
    })();
  }, []);

  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  return (
    <div>
      <Header />
      <Layout>
        <div>사용자 id : {user_id}</div>
        <div>현재시간 : {nowTime}</div>
        <div>사용자가 팔로우하는 사람 수 : {follow_num?.following_id} </div>
        <div>당신을 팔로우 해주는 사람 수 : {follow_num?.followed_id} </div>
      </Layout>
    </div>
  );
}

export default Profile;
