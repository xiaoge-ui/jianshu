import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AuthorWarpp, AuthorItemBottom, AuthorItemBottomContent, AuthorItem, AuthorUl, AuthorLi } from './../style';

class Author extends PureComponent {

    change = () => {
        let originAction = this.refs.span.style.transform.replace(/[^0-9]/ig, '');
        if (originAction) {
            originAction = parseInt(originAction);
        } else {
            originAction = 0;
        }
        this.refs.span.style.transform = 'rotate(' + (originAction + 360) + 'deg)';
    }
    render() {
        let { AuthorList } = this.props;
        let { change } = this;
        return (
            <AuthorWarpp>
                <AuthorItemBottom>
                    <img className="nav-img" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt="" />
                    <AuthorItemBottomContent>
                        下载简书手机App &gt;
                        <br />
                        <p>随时随地发现和创作内容</p>
                    </AuthorItemBottomContent>
                </AuthorItemBottom>
                <AuthorItem>
                    <span className="author">推荐作者</span>
                    <span className="change" onClick={e => { change() }}>
                        <span ref="span" className="iconfont changexuan">&#xe851;</span>
                        换一换
                    </span>
                </AuthorItem>
                <AuthorUl>
                    {
                        AuthorList.map(item => {
                            return (
                                <AuthorLi key={item.get("id")}>
                                    <img className="author-img" src={item.get("imgUrl")} alt="" />
                                    <div>
                                        <p className="author">{item.get("author")}</p>
                                        <p className="content">写了{item.get("content")}字 · {item.get("enjoy")}喜欢</p>
                                    </div>
                                    <p className="guan">+关注</p>
                                </AuthorLi>
                            )
                        })
                    }

                    <button>查看全部 &gt;</button>
                </AuthorUl>
            </AuthorWarpp>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        AuthorList: state.getIn(['home', "AuthorList"])
    }
}

export default connect(mapStateToProps)(Author);