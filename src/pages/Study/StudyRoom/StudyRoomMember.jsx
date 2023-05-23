import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import { BoardBox, BoardContainerWrapper, StudyRoom } from "../../../styles/StyledComponent";
import { MyInformation } from "../../Common/MyInformation"
import { useParams } from "react-router-dom/dist";
import AxiosApi from "../../../api/AxiosAPI";


const StudyRoomMember = () => {
    const {studyId} = useParams();
    const [studyMemInfo, setstudyMemInfo] = useState([]);
    
    useEffect(() => {
        const studyMemInfo = async () => {
            const rsp = await AxiosApi.studyMemGet(studyId); // 전체 조회
            if(rsp.status === 200) setstudyMemInfo(rsp.data);
            console.log(rsp.data);
        };
        studyMemInfo();
      }, [studyId])
    return (
        <>
            <Header />
            <HeaderStudy />
            <StudyRoom>
                <BoardBox style={{ top: "-110px" }}>
                    <BoardContainerWrapper>
                    {studyMemInfo && studyMemInfo.map((mem) => (
                        <MyInformation
                        key={mem.userId}
                        memId={mem.userId}
                        myImg={mem.userImg}
                        mgrId={mem.studyMgrId}
                        mgrName={mem.userName}
                        myInfo={mem.userIntro}
                         />
                        ))
                        }
                    </BoardContainerWrapper>
                </BoardBox>
            </StudyRoom>
        </>
    );
};

export default StudyRoomMember;