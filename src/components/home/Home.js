import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import HomeContent from "./HomeContet";
import axios from "axios";
import { Pagination } from "react-bootstrap";

const SearchCheck = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  input {
    height: 40px;
    width: 200px;
    border-radius: 3px;
  }
  button {
    height: 40px;
    border-radius: 3px;
  }
  div {
    height: 40px;
  }
`;
const RadioButton = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  label {
    padding: 5px;
  }
`;
const PaginationLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function Home() {
  const [search, setSearch] = useState({
    text: "",
    type: "",
  });
  const [cardList, setCardList] = useState([]);

  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    (async () => {
      //get total
      let pageRes = await axios.get("write/totalPage");
      const total = pageRes.data;
      setTotalPage(total);
      //data fetch get post
      const result = await axios.get("write/getPost", {
        params: { page: page },
      });
      console.log(result.data);

      //images
      const image = await axios.get("write/getImage", {
        params: { page: page },
      });
      console.log(image.data);

      const imageResult = result.data?.map((item) => {
        const images = image.data?.filter((img) => img.number === item.number);
        return {
          ...item,
          images,
        };
      });

      console.log("imageresult", imageResult);
      setCardList(imageResult);
    })();
  }, [page, search]);

  const onRadioClick = (e) => {
    setSearch({
      ...search,
      type: e.target.value,
    });
  };

  const onSearchTextChange = (e) => {
    setSearch({
      ...search,
      text: e.target.value,
    });
  };

  const submitClick = async (e) => {
    const result = await axios.post("/search", { params: search });
  };

  return (
    <div>
      <Header />
      <SearchCheck>
        <input placeholder="검색어" type="text" onChange={onSearchTextChange} />
        <button type="submit" onChange={submitClick}>
          검색
        </button>
      </SearchCheck>
      <RadioButton>
        <label>
          <input type="radio" name="text" value="id" onClick={onRadioClick} />{" "}
          작성자
        </label>
        <label>
          <input type="radio" name="text" value="text" onClick={onRadioClick} />{" "}
          일반텍스트
        </label>
        <label>
          <input
            type="radio"
            name="text"
            value="hashtag"
            onClick={onRadioClick}
          />{" "}
          Hashtag
        </label>
      </RadioButton>
      <HomeContent CardList={cardList} />
      <PaginationLayout>
        <Pagination>
          {[...Array(totalPage).keys()].map((number) => (
            <Pagination.Item
              active={page === number}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </PaginationLayout>
    </div>
  );
}

export default Home;
