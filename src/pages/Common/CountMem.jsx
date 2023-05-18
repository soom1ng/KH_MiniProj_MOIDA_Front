import styled, { css } from "styled-components";
import userImg from "../../Images/user.png"

const SIZES = {

  s: css`
        --width: 100px;
        --ImgWidth: 15px;
        --ImgHeight: 15px;
      `,

  l: css`
        --width: 150px;
        --ImgWidth: 30px;
        --ImgHeight : 30px;
        --margin-bottom: -15px;
      `
}

const StyledMember = styled.div`
  ${(p) => p.sizeStyle}

    width: var(--width);
    margin-bottom: var(--margin-bottom);

    .person{
    width: var(--ImgWidth);
    height: var(--ImgHeight);
    margin: 10px 8px 0 15px;
    }
`;

export const CountMem = ({ size, study_user_count, study_user_limit }) => {
  const sizeStyle = SIZES[size];

  return (
    <StyledMember sizeStyle={sizeStyle}>
      <div>
        <img className='person' src={userImg} />
        {study_user_count} / {study_user_limit}
      </div>
    </StyledMember>
  );
};
