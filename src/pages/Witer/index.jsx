import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Witer extends Component {
    render() {
        let { login } = this.props;
        if (login) {
            return (
                <div>
                    写文章页面
                </div>
            );
        } else {
            return <Redirect to="/login" />
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.getIn(['login', 'login'])
    }
}

export default connect(mapStateToProps)(Witer)