import React, { Component } from 'react';
import Header from './header/header';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        个人主页 +现实个人信息 +我要参与的项目 +我喜欢的
      </div>
    );
  }
}
