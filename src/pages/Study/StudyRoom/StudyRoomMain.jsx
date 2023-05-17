import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import { StudyRoom } from "../../../styles/StyledComponent";

const StudyRoomMain = () => {

    const content = "testteseessteessttesttesttesttesttesteesesstestteseessteessttesttessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttetesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttetesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttetesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttestesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttetesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttetesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttetesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttesteesstestteseessteessttesttesttesttesttettesteesstestteseessteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesttesttesttesestttsesetseteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttestteseessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttestteessttesttesttesttesttestseessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesttestt";
    return (
        <>
            <Header />
            <HeaderStudy />

            <StudyRoom>
                <div className="content" style={{ fontSize: "18px", width: "900px" }}>{content}</div>
            </StudyRoom>
        </>
    );
};


export default StudyRoomMain;