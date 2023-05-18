import React from "react";
import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { InputLabel, Input } from "../../styles/StyledComponent";

const StyledEditor = styled.div`

// ----------------------------------에디터 사용--------------------------------------- //

// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 600px;
  width: 900px;
  margin-bottom: 20px;
}
`;

const StyledTitle = styled.div`
`;

const Title = ({ inputTitle, setInputTitle }) => {
    return (

        <StyledTitle>
            <InputLabel>제목</InputLabel>
            <Input onChange={(e) => setInputTitle(e.target.value)} type="post_title" placeholder="제목을 입력해주세요." required />
        </StyledTitle>
    )
};

export const Editor = ({ isTitle, inputTitle, setInputTitle, inputContents, setInputContents }) => {

    return (
        < StyledEditor >

            {isTitle && <Title inputTitle={inputTitle} setInputTitle={setInputTitle} />}

            <InputLabel>내용</InputLabel>
            <CKEditor
                editor={ClassicEditor}
                data="<p>내용을 입력하세요.</p>"
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setInputContents(data);
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />

        </StyledEditor>
    )
}