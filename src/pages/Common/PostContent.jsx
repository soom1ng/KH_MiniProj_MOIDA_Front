import React from "react";
import styled from "styled-components";


const PostContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;


  
.content {
    font-size: 1.6rem;
    min-height: 600px;
    max-height: 1000px;
    border-bottom: 1px solid gray;
    padding: 80px 250px 80px 250px;
  }

  
`;

export const PostContent = () => {

    return (

        <PostContainer>
            <div className="content">
                <p>asdsadadsadsadadasdadadas
                    adasdsadsad<br /><br /><br />sadsadadsadsadsadsa<br />
                    sadasd
                    sad
                    sadsadsa
                    dsadsa
                    dsadsad
                    dsadasdadadsadsadadadasd</p>
            </div>
        </PostContainer>
    )
}