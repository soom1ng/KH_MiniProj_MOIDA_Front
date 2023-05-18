import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 700px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

// 페이징 네비게이션 컴포넌트입니다
//  < 1 2 3 4 5 6 7 8 9 10 > 버튼으로 구성되어있습니다
//  구성하는데 필요한 것
//  limit : 번호가 최대 어디 까지 있는지 가져옵니다. ( limit = (post.length / 10 ) 올림 )
//  page & setPage : 페이징 처리가 필요한 곳이라면 page state를 만들어 페이징 컴포넌트에 전달하여 서로 page 상태를 공유해서 랜더링해줍니다
//  > 버튼을 누르면 limit와 page가 같아지고 데이터를 더 가져오게 됩니다.
//  100개씩 가져오는데 딱 100개 라면? > 버튼이 활성화되면 안됨 (다음페이지에 내용이 없으니까)
//  1. 처음에만 더 많이 가져오고 다음부턴 100개씩오기

//  더 효과적인 방법은 없을까요??
//  limit 은 post의 개수에 따라 바뀌므로 state로 받을 필요가 없어보인다
//  상위 컴포넌트에서는 다음 데이터를 받아오는 useEffect를

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;

  &:hover {
    background-color: whitesmoke;
  }

  &.active {
    background-color: var(--maincolor);
    color: white;
  }

`;
const Paging = ({ maxPage, page, setPage }) => {


    const limit = 10; // 1~ 10 버튼 보이게 설정
    const totalPageArray = [];
    for (let i = 1; i <= maxPage; i += limit) {
        const subArray = [];
        for (let j = i; j <= Math.min(i + limit - 1, maxPage); j++) {
            subArray.push(j);
        }
        totalPageArray.push(subArray);
    }
    const currentPageArray = totalPageArray[Math.floor((page - 1) / limit)];

    return (
        <Container>
            <div className="pagination">
                <Button onClick={() => setPage(currentPageArray[0] - 1)}
                    disabled={currentPageArray === totalPageArray[0]}>
                    {'<'}
                </Button>
                {currentPageArray?.map((i) => (
                    <Button
                        key={i}
                        onClick={() => setPage(i)}
                        className={page === i ? 'active' : ''}
                    >
                        {i}
                    </Button>
                ))}

                <Button
                    onClick={() => setPage(currentPageArray[currentPageArray.length - 1] + 1)}
                    disabled={currentPageArray === totalPageArray[totalPageArray.length - 1]}
                >
                    {'>'}
                </Button>
            </div>

        </Container>
    )
}

export default Paging;