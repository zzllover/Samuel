import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'umi';
import logo from '../../assets/logo-cat.svg';
import style from './header.less';
import testImg from '../../assets/testImg/touxiang.jpg';

export default class Header extends Component {
  //判断当前路由

  constructor(props) {
    super(props);
  }

  noticeChange = (...args) => {
    //通知父组件开关抽屉
    this.props.changeOpen();
  };

  render() {
    const navRight = (
      <Link to="/profile">
        <img src={testImg} className={style.userIcon} />{' '}
      </Link>
    );
    //Nav左变现实的团和事件
    const leftIcon =
      this.props.curPath === '/main' ? (
        <Icon type="search" />
      ) : (
        <Link to="/main">
          <i
            style={{ color: '#453257' }}
            className={'iconfont icon-home-copy'}
          />
        </Link>
      );
    const leftEvent =
      this.props.curPath === '/main' ? this.noticeChange : undefined;
    return (
      <div className={style.Nav}>
        <NavBar icon={leftIcon} onLeftClick={leftEvent} rightContent={navRight}>
          <img src={logo} className={style.logoCat} />
        </NavBar>
      </div>
    );
  }
}
