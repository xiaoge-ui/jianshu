import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Author from './component/Author';
import Nav from './component/Nav';
import News from './component/News';
import Special from './component/Topic';
import { HomeWarpp, HomeLeft, HomeRight, ScrollTop, ScrollItem } from './style'
import { actions } from './store'

class Home extends PureComponent {

    render() {
        let { flagTop, flagItem, showItem, hideItem } = this.props;
        return (
            <HomeWarpp>
                <HomeLeft>
                    <img className="banner-img" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3754176062,3197304306&fm=26&gp=0.jpg" alt="big house" title="big house" />
                    <Special />
                    <News />
                </HomeLeft>
                <HomeRight>
                    <Nav />
                    <Author />
                </HomeRight>
                <ScrollTop onMouseEnter={e => showItem(true)} onMouseLeave={e => hideItem(false)}>
                    {flagItem ? <ScrollItem>回到顶部</ScrollItem> : null}
                    {flagTop ? <span className="iconfont top" onClick={e => window.scrollTo(0, 0)}>&#xe62b;</span> : null}
                </ScrollTop>
            </HomeWarpp >
        );
    }
    componentDidMount() {
        this.props.get_homeinfo();
        this.bindEvents();
    }
    bindEvents = () => {
        let { TopItem } = this.props;
        window.addEventListener("scroll", TopItem)
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        flagTop: state.getIn(['home', 'ScrollTop']),
        flagItem: state.getIn(['home', 'ScrollItem'])
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         get_homeinfo: () => {
//             dispatch(actions.get_homeinfo())
//         },
//         showItem: () => {
//             dispatch(actions.showItem())
//         },
//         hideItem: () => {

//         }
//     }
// }

export default connect(mapStateToProps, actions)(Home);