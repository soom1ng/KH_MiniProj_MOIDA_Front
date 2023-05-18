import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import { StudyRoom } from "../../../styles/StyledComponent";
import { useParams } from "react-router-dom/dist";
import AxiosApi from "../../../api/AxiosAPI";

const StudyRoomMain = () => {
    const {studyId} = useParams();
    const [studyData, setstudyData] = useState('');
    
    useEffect(() => {
        const studyHeaderInfo = async () => {
          
          try{
              const rsp = await AxiosApi.studyViewGet(studyId); // 전체 조회
              setstudyData(rsp.data);
              console.log(rsp.data);
          } catch(error) {
              console.error(error);
          }
          
        };
        studyHeaderInfo();
      }, []);

    return (
        <>
            <Header />
            {studyData && (
            <HeaderStudy
                studyProfile=''
                studyName={studyData.studyName} 
                studyTag={studyData.tagName}
                studyIntro={studyData.studyIntro}
                studyLink={studyData.studyChatUrl}
                studyUserCount={studyData.studyUserCount}
                studyUserLimit={studyData.studyUserLimit}
                userName={studyData.userName}
            />
            )}
            <StudyRoom>
                <div className="content" style={{ fontSize: "18px", width: "900px" }}>{studyData.studyIntro}</div>
            </StudyRoom>
        </>
    );
};


export default StudyRoomMain;