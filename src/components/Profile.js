import React, { useEffect } from "react";
import Cookies from "js-cookie";
import moment from "moment";

function Profile() {
  const user_id = Cookies.get("user-id");
  useEffect(() => {}, []);
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  return (
    <div>
      <div>사용자 id : {user_id}</div>
      <div>{nowTime}</div>
    </div>
  );
}

export default Profile;
