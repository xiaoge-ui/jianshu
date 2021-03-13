import React, { Component } from 'react';
import Content from './component/Content'
import { DetailWarpp, Div } from './style';

class Detail extends Component {
    render() {
        return (
            <Div>
                <DetailWarpp>
                    <Content {...this.props} />
                </DetailWarpp>
            </Div>

        );
    }
}

export default Detail;