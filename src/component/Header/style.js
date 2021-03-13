import styled from 'styled-components';
import LogoPic from './../../statics/logo.png';

export const Div= styled.div`
    overflow:hidden;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    border-bottom: 1px solid #f0f0f0;
    z-index:100;
`
export const HeaderWrapper=styled.div`
    width:1440px;
    height:56px;
    margin:0px auto;
    background:#fff;
`
export const Logo=styled.div`
    position:absolute;
    top:0;
    letf:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${LogoPic});
    background-size:contain;
`
export const Nav=styled.div`
    width:960px;
    height:100%;
    margin:0px auto;
`
export const NavItem=styled.div`
    height:56px;
    line-height:56px;
    padding:0px 15px;
    font-size:17px;
    color:#333;
    cursor:pointer;
    &.left{
        float:left;
        .iconfont{
            font-size:20px;
            margin-right:3px;
        }
    }
    &.right{
        float:right;
        color:#969696;
        .iconfont{
            font-weight:bold;
        }
    }
    &.active{
        color:#ea6f5a;
    }
`
export const InputSearch=styled.div`
    float:left;
    position:relative;
    

    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        color:#969696;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`
export const InputSearchBox=styled.div`
    position:fixed;
    left:530px;
    top:56px;
    width:200px;
    padding:0px 20px;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.2);
    background:#fff;
`
export const InputSearchTitle=styled.div`
    margin:20px 0px 15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const InputSearchSwitch = styled.a`
    float:right;
    font-size:13px;
    cursor:pointer;
    :hover{
        color:#333;
    }
    .spin{
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin: center center;
    }
`
export const SearchInfoItem=styled.a.attrs({
    href:"javascrips:;"
})`
    :hover{
        color:#333;
    }
    display:inline-block;
    margin:0px 10px 10px 0px;
    line-height:20px;
    padding:0px 5px;
    border:1px solid #ddd;
    border-radius:3px;
    color:#969696;
    font-size:12px; 
    text-decoration:none;
`

export const Input=styled.input.attrs({
    placeholder:"搜索"
})`
    width:240px;
    height:38px;
    padding:0px 30px 0px 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    background:#eee;
    border-radius:19px;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:320px;
    }
    &.slide-enter{
        width:240px;
        transition:all .5s ease-out;
    }
    &.slide-enter-active{
        width:320px;
    }
    &.slide-exit{
        width:320px;
        transition:all .5s ease-out;
    }
    &.slide-exit-active{
        width:240px;
    }
`

export const Addition=styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
    margin-right:40px;
`
export const Button=styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0px 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:15px;
    cursor:pointer;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`