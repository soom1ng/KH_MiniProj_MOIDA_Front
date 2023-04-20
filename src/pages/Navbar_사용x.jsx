/* Header 파일으로 대체 사용 */

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <>
        <nav>
        <div class="nav_logo">
                
        </div>

        <ul class="nav_menu">
            <li id="basic_menu"><Link to='/Study'>스터디</Link></li>
            <li id="basic_menu"><Link to='/Story'>스토리</Link></li>
            <li id="lounge_menu"><Link to='/Lounge'></Link>라운지

                <ul class="sub_lounge">
                    <li id="sub_menu">자유 게시판</li>
                    <li id="sub_menu">고민 게시판</li>
                </ul>
            </li>
        </ul>

        <div class="nav_sign">
            <div class="search">
                <img src='../Images/LOGO/png'></img>
                
            </div>
            <button id="button_sign" type="button" >로그인</button>
        </div>

    </nav>
        </>
        )
    }
    export default Nav;