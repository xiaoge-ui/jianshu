import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actions } from './store'
import { LoginWarpp, Loign, Input, Button } from './style';

class Login extends PureComponent {

    render() {
        let { LoginInfo, login } = this.props;
        if (login) {
            return <Redirect to="/" />
        } else {
            return (
                <LoginWarpp>
                    < Loign >
                        <Input placeholder="手机号或邮箱" innerRef={name => this.name = name} />
                        <Input placeholder="密码" type="password" innerRef={pwd => this.pwd = pwd} />
                        <Button onClick={e => LoginInfo(this.name.value, this.pwd.value)} >登录</Button>
                    </Loign >
                </LoginWarpp >

            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        login: state.getIn(['login', 'login'])
    }
}

export default connect(mapStateToProps, actions)(Login)