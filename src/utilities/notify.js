import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Notify extends Component {
  render() {
    const { message } = this.props.viewStore.notify
    return (
      <div style={{color: 'white'}}>
        { message }
      </div>
    );
  }
}

export default Notify;
