import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NewsItem, NewsItemLeft, NewsItemLeftBottom, GetMore } from '../style'
import { actions } from './../store'

const News = (props) => {
    let { NewsList, get_homeMore, page } = props;
    return (
        <div>
            {
                NewsList.map((item, index) => {
                    return (
                        <Link to={"/detail/" + item.get("id")} key={index} style={{ textDecoration: "none" }}>
                            <NewsItem>
                                <img className="news-img" src={item.get("imgURL")} alt="" />
                                <NewsItemLeft>
                                    <h3>{item.get("title")}</h3>
                                    <p>{item.get("content")}</p>
                                    <NewsItemLeftBottom>
                                        <span className="iconfont number">&#xe811;</span>
                                        <span className="number"> {item.get("number")} </span>
                                        <span className="pice"> {item.get("pice")} </span>
                                        <span className="iconfont book">&#xe602;</span>
                                        <span className="book">{item.get("book")}</span>
                                        <span className="iconfont xin">&#xe6c2;</span>
                                        <span>{item.get("xin")}</span>
                                    </NewsItemLeftBottom>
                                </NewsItemLeft>
                            </NewsItem>
                        </Link>
                    )
                })
            }
            <GetMore onClick={e => get_homeMore(page)}>
                阅读更多
            </GetMore>
        </div >
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        NewsList: state.getIn(['home', 'NewsList']),
        page: state.getIn(['home', 'NewsPage'])
    }
}

export default connect(mapStateToProps, actions)(News);
