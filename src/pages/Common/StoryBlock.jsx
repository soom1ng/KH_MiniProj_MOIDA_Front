import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledStory = styled.div`
  background-color: white;
  width: 340px;
  height: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 10px;
  cursor: pointer;
  
  .story-body {
    height: 100%;
    display : flex;
    flex-direction: column;
    
    img {
      width: 340px;
      height: 225px;
    }
  }
  
  .story-body-text {
    width: 340px;
    display: flex;
    flex-direction: column;
  }
`;

const StudyName = styled.div`
        font-size: 1.2rem;
        color: gray;
        justify-content: center;
        margin: 10px 0 0 10px;
`;

const StoryTitle = styled.div`
      font-size: 1.6rem;
      font-weight: bold;
      margin-left:10px ;

`;

export const StoryBlock = ({ storyId, img_url, study_name, title }) => {
  const navigate = useNavigate();

  // const storyId = useParams();
  // const storyPost = `/story/${storyId}`;


  return (

    <StyledStory onClick={() => {
      navigate(`/story/${storyId}`);
    }}>

      <div className="story-body">
        <img src={img_url} />

        <div className="story-body-text">
          <StudyName>{study_name}</StudyName>
          <StoryTitle>{title}</StoryTitle>
        </div>
      </div>

    </StyledStory>
  );
};