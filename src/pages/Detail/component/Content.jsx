import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from './../store'
import { ContentWarpp, ContentItem, ContentInfo } from './../style'

class Content extends Component {
    render() {
        let { title, imgUrl, imgBack, author, xin, content, pice, picedu, time } = this.props;
        return (
            <ContentWarpp>
                <h1>{title}</h1>
                <ContentItem>
                    <div style={{ float: "left", marginRight: "10px" }}>
                        <img className="content-img" src={imgUrl} alt="" />
                        <img className="content-pic" src={imgBack} alt="" />
                    </div>
                    <div style={{ float: "left" }}>
                        <p className="title">{author}  <span>关注</span></p>
                        <p className="content">
                            <span className="iconfont zuan">&#xe811;</span>
                            <span className="zuan">{xin}</span>
                            <span className="time">{time}</span>
                            <span>字数 {pice}</span>
                            <span>阅读 {picedu}</span>
                        </p >
                    </div>
                </ContentItem>
                <ContentInfo dangerouslySetInnerHTML={{ __html: content }} />
            </ContentWarpp>
        );
    }
    componentDidMount() {
        let { detail_info, match } = this.props;
        detail_info(match.params.id);
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        title: state.getIn(['detail', 'title']),
        imgUrl: state.getIn(['detail', 'imgUrl']),
        imgBack: state.getIn(['detail', 'imgBack']),
        author: state.getIn(['detail', 'author']),
        xin: state.getIn(['detail', 'xin']),
        time: state.getIn(['detail', 'time']),
        pice: state.getIn(['detail', 'pice']),
        picedu: state.getIn(['detail', 'picedu']),
        content: state.getIn(['detail', 'content']),
    }
}

export default connect(mapStateToProps, actions)(withRouter(Content))