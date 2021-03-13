import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWarpp, TopicItem, TopicItem2 } from './../style'

class Special extends Component {
    render() {
        let { topicList } = this.props;
        return (
            <TopicWarpp>
                {
                    topicList.map(item => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className="topic-img" src={item.get('imgURL')} alt="" />
                                {item.get("title")}
                            </TopicItem>
                        )
                    })
                }

                <TopicItem2>
                    <button>更多热门专场 &nbsp;&gt;</button>
                </TopicItem2>
            </TopicWarpp>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        topicList: state.getIn(['home', 'topicList'])
    }
}

export default connect(mapStateToProps)(Special)