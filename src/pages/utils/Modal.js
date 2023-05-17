import React from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
    .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    }
    .modal button {
        outline: none;
        cursor: pointer;
        border: 0;
    }
    .modal > section {
        width: 1000px;
        height: 420px;
        padding: 10px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #F3F3F3;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }

    .topButton{
        display: flex;
        flex-direction: row-reverse;
    }

    .modal > section .topButton button {
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
    }
    .modal.openModal {
        display: flex;
        align-items: center;
        animation: modal-bg-show 0.3s;
    }
    @keyframes modal-show {
        from {
        opacity: 0;
        margin-top: -50px;
        }
        to {
        opacity: 1;
        margin-top: 0;
        }
    }
    @keyframes modal-bg-show {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }
`

const Modal = (props) => {
    const { open, close } = props;

    return (
        <ModalStyle>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <div className='topButton'><button className="close" onClick={close}>
                            &times;
                        </button></div>
                        {props.children}
                    </section>
                ) : null}
            </div>
        </ModalStyle>
    );
};

export default Modal;