import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavItem, NavItemPic } from './../style';

class Nav extends Component {
    render() {
        let { NavList } = this.props;
        return (
            <NavItem>
                {
                    NavList.map(item => {
                        return (
                            <NavItemPic key={item.get("id")} imgUrl={item.get("imgUrl")} />
                        )
                    })
                }
            </NavItem>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        NavList: state.getIn(['home', 'NavList'])
    }
}

export default connect(mapStateToProps)(Nav);