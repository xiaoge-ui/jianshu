import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    background: #f9f9f9;
    padding: 10px 0px 0px;
    margin-top: 56px;
`
export const DetailWarpp = styled.div`
    width:1032px;
    margin:0px auto;
    padding:10px 16px 0px;
    background:#fff;
`

export const ContentWarpp =styled.div`
    width:730px;
    padding:32px;
    h1{
        font-weight:700;
        font-size:30px;
        margin:0px 0px 15px;
        color:#404040;
    }
`

export const ContentItem =styled.div`
    overflow:hidden;
    margin-bottom:30px;
    .content-img{
        display:block;
        border-radius:50%;
        border:1px solid #eee;
        width:50px;
        height:50px;
    }
    .content-pic{
        width:68px;
        height:68px;
        position:absolute;
        top:143px;
        left:268px;
        z-index:0;
    }
    .title{
        margin-bottom:10px;
        color:#404040;
        span{
            display:inline-block;
            border:1px solid #ec7259;
            font-size:12px;
            padding:2px 9px;
            border-radius:10px;
            color:#ec7259;
            margin-left:5px;
        }
    }
    .content{
        font-size:13px;
        color:#969696;
        .zuan{
            color:#ec7259;
        }
        .time{
            display:inline-block;
            margin:0px 10px;
        }
    }
`
export const ContentInfo =styled.div`
    width:666px;
    color:#404040;
    p{
        margin-bottom:20px;
        line-height:1.8;
        font-size:16px;
    }
    img{
        width:666px;
        height:1184px;
        margin:0px auto;
    }
`