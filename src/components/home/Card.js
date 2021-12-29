import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import leftImg from "../../img/left.png";
import rightImg from "../../img/right.png";
import axios from "axios";

const HashLayout = styled.div`
  display: flex;
  flex-direction: row;
  a {
  }
`;

const CardWrapper = styled.div`
  width: 300px;
  display: flex;
  background-color: #fff8f8;
  margin: 25px;
  flex-direction: column;
  justify-content: center;
  & > image {
    width: 250px;
    height: 250px;
  }
  .tag {
    border: 0;
    outline: 0;
    background: none;
    color: blue;
  }
  button {
    margin-bottom: 30px;
  }
`;
const ImageSlide = styled.div`
  width: 300px;
  display: flex;
  background-color: #fff8f8;
  flex-direction: column;
  align-items: center;
  & > image {
    width: 250px;
    height: 250px;
  }
`;

const SlideBtnLayout = styled.div`
  width: 100px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .slideBtn {
    border-radius: 50%;
    background-color: gray;
    margin-top: 30px;
    padding: 10px;
    margin-right: 5px;
    &:focus {
      background-color: #00ff95;
      box-shadow: 0px 0px 2px red;
    }
  }
`;

function Card({ number, images, author, date, text }) {
  let hashtag = text.split(/(#[^\s]+)/g);
  const [imgArr, setImgArr] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const tempImages = [];
    (async () => {
      for (let i in images[0]) {
        if (!!images[0][i]) {
          if (i !== "number") tempImages.push(images[0][i]);
        }
      }
      setImgArr(tempImages);
    })();
  }, [number]);

  const hashtagArr = hashtag.filter((str) => {
    if (str !== "" && str !== " ") {
      return str.includes("#");
    }
    return false;
  });

  const textArr = hashtag.filter((str) => {
    if (str.includes("#")) {
      return false;
    }
    return true;
  });
  const contents = textArr.join("");

  const imgSlideClick = async (e) => {
    const imgNum = e.target.value; //이미지 번호
    let mainImg = document.getElementById(`mainImg${number}`);
    mainImg.src = `./write/test?image=${images[0][`img${Number(imgNum) + 1}`]}`;
  };

  const authorClick = (author) => {
    navigator(`/home?text=${author}&type=id`, { replace: true });
  };
  const hashtagClick = (str) => {
    let text = str.slice(1);
    navigator(`/home?text=${text}&type=hashtag`, { replace: true });
  };

  const editClick = () => {
    navigator("../edit", {
      state: {
        number: number,
        images: images,
        id: author,
        contents: text,
      },
    });
  };

  return (
    <CardWrapper>
      <ImageSlide>
        <img
          src={`./write/test?image=${images[0].img1}`}
          alt="alt"
          id={`mainImg${number}`}
          height="250px"
          width="250px"
        />
        <SlideBtnLayout>
          {imgArr.map((images, idx) => (
            <button
              className="slideBtn"
              value={idx}
              onClick={imgSlideClick}
            ></button>
          ))}
        </SlideBtnLayout>
      </ImageSlide>

      <button
        className="tag"
        onClick={() => {
          authorClick(author);
        }}
      >
        글쓴이: {author}
      </button>

      <p>글내용: {contents}</p>
      <HashLayout>
        {hashtagArr.map((str) => (
          <button
            className="tag"
            onClick={() => {
              hashtagClick(str);
            }}
          >
            {str}
          </button>
        ))}
      </HashLayout>

      <p>작성시간: {date}</p>
      <button onClick={editClick}>편집</button>
    </CardWrapper>
  );
}

export default Card;
