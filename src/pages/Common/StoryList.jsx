import styled from "styled-components";
import menuImg from "../../Images/menu.png"
import { Study } from "./StudyBlock";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosApi from "../../api/AxiosAPI";
import { StoryBlock } from "./StoryBlock";
import { useParams } from "react-router-dom";

const StyledStoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;


export const StoryList = () => {
    const [storyList, setStoryList] = useState([]);
    const [lastId, setLastId] = useState('');

    const date = new Date();


    const { storyId } = useParams();
    
    const disPlayCount = 6;

    // useEffect(() => {
    //     const storyList = async () => {
    //         const rsp = await AxiosApi.storyListGet(storyId); // 전체 조회
    //         if (rsp.status === 200) setStoryList(rsp.data);
    //         console.log(rsp.data);

    //     };
    //     storyList();
    // }, []);
    useEffect(() => {
        const initialize = async (lastId) => {
          const rsp = await AxiosApi.storyListGet('');
          console.log("lastId = " + lastId);
          setStoryList(rsp.data);
          setLastId(rsp.data[rsp.data.length - 1].storyId); // 마지막 행의 아이디값
          console.log("initialize 실행")
          console.log(rsp.data);
        }
        initialize();
      }, [])

    console.log(storyList.length);

    return (
        <StyledStoryList>

            {storyList && storyList
                .slice(0, disPlayCount).map(story => (
                    story && (
                        <StoryBlock
                            // onClick={storyPost}
                            // key={story.storyId}
                            storyId={story.storyId}
                            img_url={story.imgUrl}
                            study_name={story.studyName}
                            title={story.title}
                        // lastId={story.lastId}
                        ></StoryBlock>
                    )

                ))}


        </StyledStoryList>
    );
};