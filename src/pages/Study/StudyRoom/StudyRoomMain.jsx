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
        const fetchStudyData = async () => {
          try {
            const response = await AxiosApi.studyViewGet(studyId);
            const data = response.data;
            setstudyData(data);
    
            if (data) {
              const {
                studyName,
                tagName,
                studyIntro,
                studyChatUrl,
                studyUserCount,
                studyUserLimit,
                userName,
              } = data;
    
              window.localStorage.setItem("studyName", studyName);
              window.localStorage.setItem("studyTag", tagName);
              window.localStorage.setItem("studyIntro", studyIntro);
              window.localStorage.setItem("studyLink", studyChatUrl);
              window.localStorage.setItem("studyUserCount", studyUserCount);
              window.localStorage.setItem("studyUserLimit", studyUserLimit);
              window.localStorage.setItem("userName", userName);
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchStudyData();
      }, [studyId]);

    return (
        <>
            <Header />
            {studyData && (
            <HeaderStudy/>
            )}
            <StudyRoom>
                <div className="content" style={{ fontSize: "18px", width: "900px" }}>{studyData.studyIntro}</div>
            </StudyRoom>
        </>
    );
};


export default StudyRoomMain;