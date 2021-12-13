import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import HomeContent from "./HomeContet";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import QueryString from "qs";

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
  const [refreshPage, setRefreshPage] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const location = useLocation();
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
    // 문자열 맨 앞의 ?를 생력
  });

  useEffect(() => {
    query?.text || query?.type
      ? filterSearch()
      : (async () => {
          //get total
          let pageRes = await axios.get("write/totalPage");
          const total = pageRes.data;
          setTotalPage(total);
          //data fetch get post
          const result = await axios.get("write/getPost", {
            params: { page: page },
          });

          //images
          const image = await axios.get("write/getImage", {
            params: { page: page },
          });

          const imageResult = result.data?.map((item) => {
            const images = image.data?.filter(
              (img) => img.number === item.number
            );
            return {
              ...item,
              images,
            };
          });

          setCardList(imageResult);
        })();
  }, [page, refreshPage]);

  const onRadioClick = async (e) => {
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

  const filterSearch = async () => {
    let pageRes = await axios.get("write/filterPage", {
      params: {
        type: query?.type || search.type,
        text: query?.text || search.text,
        page: page || 0,
      },
    });
    const total = pageRes.data;

    setTotalPage(total);

    let postRes = await axios.get("write/filterGetPost", {
      params: {
        type: query?.type || search.type,
        text: query?.text || search.text,
        page: page || 0,
      },
    });
    const postInfo = postRes.data;

    Promise.all(
      postInfo.map(async (item) => {
        const imageRes = await axios("write/getEachImages", {
          params: { number: item.number },
        });
        return {
          ...item,
          images: [imageRes.data],
        };
      })
    ).then((item) => setCardList(item));
    setRefreshPage(true);
  };

  const submitClick = () => {
    window.location.replace(`/home?text=${search.text}&type=${search.type}`);
  };

  return (
    <div>
      <Header />
      <SearchCheck>
        <input placeholder="검색어" type="text" onChange={onSearchTextChange} />
        <button type="submit" onClick={submitClick}>
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
      <HomeContent cardList={cardList} />
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
