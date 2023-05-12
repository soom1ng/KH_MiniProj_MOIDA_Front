import styled from "styled-components";
import userImg from "../../Images/user.png"


const StyledMember = styled.div`

    width: 100px;
   
    /* height: 220px; */
    /* position: relative;  */
    /* top: 90px;
    left: 200px;
    padding-left: 60px;
    padding-top: 20px; */
 

      /* .itemPerson{
        margin-left: auto;
        margin-right: 15px;
        font-size: 18px; */

        .person{
        width: 15px;
        height: 15px;
        margin-left: 15px;
        margin-right: 8px;
    
    }
`;

export const CountMem = ( {study_user_count, study_user_limit } ) => {
    return (
        <StyledMember>
                <div>
                <img className='person' src={userImg} />
                {study_user_count}/{study_user_limit}
                </div>
        </StyledMember>
    ) ;
};
