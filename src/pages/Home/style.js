import  styled from 'styled-components'

export const HomeWarpp = styled.div`
    overflow:hidden;
    width:960px;
    margin:60px auto 0px auto;
`

export const HomeLeft = styled.div`
    float:left;
    width：625px;
    padding:30px 0px 0px 15px;
    .banner-img{
        width:625px;
        height:270px;
    }

`

export const HomeRight = styled.div`
    float:right;
    width：280px;
    margin-left:40px;
    padding-top:30px
    
`

export const TopicWarpp= styled.div`
    overflow:hidden;
    width:625px;
    margin-top:30px;
    border-bottom:1px solid #f0f0f0;
`

export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    background:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    margin-right:20px;
    margin-bottom:20px;
    font-size:14px;
    .topic-img{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`
export const TopicItem2 = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    button{
        outline:none;
        border:none;
        resize:none;
        background:#fff;
    }
`

export const NewsItem = styled.div`
    overflow:hidden;
    width:625px;
    padding:30px 0px;
    border-bottom:1px solid #f0f0f0;
    .news-img{
        float:right;
        width:150px;
        height:100px;
        border-radius:4px;
    }
`;

export const NewsItemLeft=styled.div`
    h3{
        font-size:18px;
        font-weight:bold;
        line-height:38px;
        margin:-7px 0px 4px;
        color:#333;
    }
    p{
        margin:0px 0px 8px;
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`;

export const NewsItemLeftBottom=styled.div`
    font-size:12px;
    color:#b4b4b4;
    .number{
        color:#ea6f5a;
        font-weight:600;
    }
    .pice{
        margin:0px 10px;
    }
    .xin{
        margin-left:10px;
    }
`
export const GetMore = styled.div`
    width:1005;
    height:20px;
    padding:10px 0px;
    margin:30px 0px 60px;
    text-align:center;
    background:#a5a5a5;
    color:#fff;
    border-radius:20px;
    cursor:pointer;
`

export const NavItem=styled.div`
    width:280px;
` 

export const NavItemPic = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
    margin:0px 0px 6px 0px;
`

export const AuthorWarpp = styled.div`
    width:280px;
`
export const AuthorItemBottom = styled.div`
    width:234px;
    height:60px;
    padding:10px 22px;
    border:1px solid #f0f0f0;
    margin-bottom:30px;
    background:#fff;
    border-radius:6px;
    .nav-img{
        display:inline-block;
        float:left;
        width:60px;
        height:60px;
        margin-right:15px;
    }
`
export const AuthorItemBottomContent=styled.div`
    margin-top:15px;
    text-align:center;
    font-size:15px;
    color:#333;
    p{
        font-size:13px;
        color:#999;
        margin-top:4px;
    }
`

export const AuthorItem = styled.div`
    overflow:hidden;
    dispaly:inline-block;
    font-size:14px;
    .author{
        float:left;
        color:#969696;
    }
    .change{
        float:right;
        color:#787878;
    }
    .changexuan{
        float:left;
        font-size:14px;
        dispaly:block;
        margin-right:3px;
        transition:all .2s ease-in;
        transform-origin: center center;
    }
    .change:hover{
        color:#333;
        cursor:pointer;
    }
`
export const AuthorUl= styled.ul`
    overflow:hidden;
    width:280px;
    list-type:none;
    button{
        width:280px;
        margin-top:15px;
        padding:7px 7px 7px 12px;
        outline:none;
        onsize:none;
        border:none;
        border:1px solid #dcdcdc;
        border-radius:5px;
        color:#787878;
        background:#f7f7f7;
        font-size:13px;
    }
`
export const AuthorLi=styled.li`
    overflow:hidden;
    margin-top:15px;
    line-height:20px;
    .author-img{
        float:left;
        width:48px;
        height:48px;
        border:1px solid #ddd;
        border-radius:50%;
    }
    div{
        float:left;
        margin-left:10px;
        margin-right:45px;
    }
    .author{
        font-size:14px;
        color:#333;
        margin-bottom:5px;
    }
    .content{
        font-size:12px;
        color:#969696;
    }
    .guan{
        float:right;
        font-size:13px;
        color:#42c02e;
    }
`
export const ScrollTop = styled.div`
    position:fixed;
    right:40px;
    bottom:50px;
    .top{
        display:block;
        width:50px;
        height:50px;
        line-height:50px;
        text-align:center;
        cursor:pointer;
        border:1px solid #cccccc;
        font-size:18px;
    }
`
export const ScrollItem = styled.div`
    position:fixed;
    right:100px;
    bottom:60px;
    background:#000;
    height:30px;
    line-height:30px;
    width:70px;
    color:#fff;
    font-size:14px;
    border-radius:5px;
`

