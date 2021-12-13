import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import axios from "axios";
function Message() {
  const user_id = Cookies.get("user-id");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      let followRes = axios.get("follow/table", {
        params: {
          user_id: user_id,
        },
      });
    })();
  }, []);

  return <div></div>;
}

export default Message;
