import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { actions } from './store';
import { actions as Loginactions } from './../../pages/Login/store'
import { HeaderWrapper, Logo, Nav, NavItem, Input, Addition, Button, InputSearch, InputSearchBox, InputSearchTitle, InputSearchSwitch, SearchInfoItem, Div } from './style.js'

class Header extends PureComponent {
    getshow = () => {
        let { focused, list, mouseIn, totalPage, page, haddleMouseEnter, haddleMouseLeave, changePage } = this.props;
        let newList = [];
        let dataList = list.toJS();
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            newList.push(
                <SearchInfoItem key={i}>{dataList[i]}</SearchInfoItem>
            )
        }

        if (focused || mouseIn) {
            return (
                <InputSearchBox onMouseEnter={haddleMouseEnter} onMouseLeave={haddleMouseLeave}>
                    <InputSearchTitle>
                        热门搜索
                <InputSearchSwitch onClick={e => changePage(page, totalPage, this.refs.span)}>
                            <span ref="span" className="iconfont spin">&#xe851;</span>
                            换一批
                </InputSearchSwitch>
                    </InputSearchTitle>
                    <div>
                        {
                            newList
                        }
                    </div>
                </InputSearchBox>
            )
        } else {
            return null;
        }
    }
    render() {
        let { focused, list, haddleInputBlur, haddleInputFocus, login, loginOut } = this.props;
        let { getshow } = this;
        return (
            <Div>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Nav>
                        <Link to="/">
                            <NavItem className="left active">
                                <span className="iconfont">&#xe627;</span>
                                首页
                            </NavItem>
                        </Link>
                        <NavItem className="left">
                            <span className="iconfont">&#xe61a;</span>
                            下载App
                        </NavItem>
                        {login ? <NavItem className="right" onClick={e => loginOut()} >退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>}
                        <NavItem className="right">
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <InputSearch>
                            <CSSTransition
                                in={focused}
                                timeout={500}
                                classNames="slide"
                            >
                                <Input className={focused ? "focused" : ""} onFocus={e => haddleInputFocus(list)} onBlur={haddleInputBlur}></Input>
                            </CSSTransition>
                            <span className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe60b;</span>
                            {getshow()}
                        </InputSearch>
                    </Nav>
                    <Addition>
                        <Link to="/witer">
                            <Button className="writting">
                                <span className="iconfont">&#xe617;</span>
                                写文章
                            </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </Div >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        focused: state.getIn(["header", 'focused']),
        list: state.getIn(["header", "list"]),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(["header", "totalPage"]),
        page: state.getIn(["header", "page"]),
        login: state.getIn(['login', 'login'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        haddleInputFocus: (list) => {
            if (list.size === 0)
                dispatch(actions.getList())
            dispatch(actions.inputFocus());
        },
        haddleInputBlur: () => {
            dispatch(actions.inputBlur());
        },
        haddleMouseEnter: () => {
            dispatch(actions.mouseEnter());
        },
        haddleMouseLeave: () => {
            dispatch(actions.mouseLeave());
        },
        changePage: (page, totalPage, span) => {
            let originAction = span.style.transform.replace(/[^0-9]/ig, '');
            if (originAction) {
                originAction = parseInt(originAction);
            } else {
                originAction = 0;
            }
            span.style.transform = 'rotate(' + (originAction + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actions.changePage(page + 1))
            } else {
                dispatch(actions.changePage(1))
            }
        },
        loginOut: () => {
            dispatch(Loginactions.loginOut());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)