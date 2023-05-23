import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import { StudyRoom } from "../../../styles/StyledComponent";
import { useParams } from "react-router-dom/dist";
import AxiosApi from "../../../api/AxiosAPI";

const StudyBoardPost = () => {
    const {studyId} = useParams();
    const [studyData, setstudyData] = useState('');
    


    return (
        <>
            <Header />
            {studyData && (
            <HeaderStudy/>
            )}
            <StudyRoom>
                <div className="content" style={{ fontSize: "18px", width: "900px" }}>{studyData.studyContent}</div>
            </StudyRoom>
        </>
    );
};


export default StudyBoardPost;