import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const PostPanel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: center;
  align-items: center;

  .content {
    height: 500px;
    width: 1000px;
  }
  div {
    margin: 10px;
  }
`;

function EditPost() {
  const location = useLocation();
  const id = location.state.id;
  const [image, setImage] = useState([]);
  const navigate = useNavigate();
  const images = [];
  const [inputPost, setPost] = useState({
    number: "",
    id: "",
    date: "",
    contents: "",
  });

  useEffect(() => {
    (async () => {
      const temp = location.state.images;
      for (let i in temp[0]) {
        if (temp[0][i] !== null) {
          if (i !== "number") images.push(temp[0][i]);
        }
        setImage(images);
      }

      setPost({
        ...inputPost,
        number: location.state.number,
        id: location.state.id,
        contents: location.state.contents,
      });
    })();
  }, []);

  const formData = new FormData();

  const handleChangeFile = async (e) => {
    if (e.target.files.length > 5) {
      alert("파일 최대 5개만 선택가능");
    } else {
      for (let i = 0; i < 5; i++) {
        formData.append("img", e.target.files[i]);
      }
    }
  };

  const handleChangePost = (e) => {
    let date = moment().format("YYYY-MM-DD HH:mm");
    setPost({
      ...inputPost,
      contents: e.target.value,
      id: id,
      date: date,
    });
  };

  const subimtOnClick = async (e) => {
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    try {
      //let result = await axios.post("/write/uploadImages", formData, config);
      let result2 = await axios.post("/write/updatePost", inputPost);
    } catch (err) {
      alert("지원하지않는 파일존재\n 다른 이미지 파일을 넣어주세요.");
    }
    navigate("/home");
  };

  const deleteOnClick = async () => {
    try {
      let result = await axios.post("/write/deletePost", inputPost);
      navigate("/home");
    } catch {}
  };

  return (
    <PostPanel>
      <input
        className="content"
        placeholder="내용입력"
        type="email"
        value={inputPost.contents}
        onChange={handleChangePost}
      />
      <input
        type="file"
        className="file"
        id="file"
        name="img"
        onChange={handleChangeFile}
        multiple="multiple"
      />
      <div>
        현재 존재하는파일
        {image.map((fname, idx) => (
          <button key={fname}>{fname}</button>
        ))}
      </div>

      <button type="submit" onClick={subimtOnClick}>
        수정
      </button>
      <button onClick={deleteOnClick}>게시물 삭제</button>
    </PostPanel>
  );
}

export default EditPost;
