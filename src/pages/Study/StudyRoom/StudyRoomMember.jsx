import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import { BoardBox, BoardContainerWrapper, StudyRoom } from "../../../styles/StyledComponent";
import { MyInformation } from "../../Common/MyInformation"


const StudyRoomMember = () => {
    return (
        <>
            <Header />
            <HeaderStudy />
            <StudyRoom>
                <BoardBox style={{ top: "-110px" }}>
                    <BoardContainerWrapper>

                        <MyInformation
                            nickname={"뇽뇽이"}
                            myInfo={"안녕하세요. 백앤드를 공부하고 있는 학생입니다!! 함께 공부해봐요~~ "} />
                        <MyInformation
                            nickname={"뇽뇽이"}
                            myInfo={"안녕하세요. 백앤드를 공부하고 있는 학생입니다!! 함께 공부해봐요~~ "} />
                        <MyInformation
                            nickname={"뇽뇽이"}
                            myInfo={"안녕하세요. 백앤드를 공부하고 있는 학생입니다!! 함께 공부해봐요~~ "} />

                    </BoardContainerWrapper>
                </BoardBox>
            </StudyRoom>
        </>
    );
};

export default StudyRoomMember;