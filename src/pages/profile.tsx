import React, { Component } from 'react';

import { Tabs } from 'antd-mobile';
import Header from './header/header';
import style from './profile.less';
import testImg from '../assets/testImg/touxiang.jpg';

export default class Profile extends Component {
  render() {
    const tabs = [
      {
        title: (
          <span className={style.tabtitle}>
            <i className={'iconfont icon-aixin1'}></i>
            <span>12 liked</span>
          </span>
        ),
      },
      {
        title: (
          <span className={style.tabtitle}>
            <i className={'iconfont icon-gou'}></i>
            <span>12 going</span>
          </span>
        ),
      },
      {
        title: (
          <span className={style.tabtitle}>
            <i className={'iconfont icon-xiongzhang'}></i>
            <span>0 passed</span>
          </span>
        ),
      },
    ];

    return (
      <div>
        <Header />
        <div className={style.main}>
          <div className={style.top}>
            <div className={style.userpic}>
              <img src={testImg} alt="" />
            </div>
            <div className={style.username}>Username</div>
            <div className={style.useremail}>
              <i className={'iconfont icon-email'}></i>
              <span>ximing.peng@shopee.com</span>
            </div>
          </div>
          <div className={style.bottom}>
            <Tabs
              tabs={tabs}
              initialPage={2}
              animated={false}
              useOnPan={false}
              tabBarUnderlineStyle={{
                backgroundColor: '#AECB4F',
                height: 3,
                border: 'none',
              }}
              tabBarActiveTextColor={'#AECB4F'}
            ></Tabs>
          </div>
        </div>
      </div>
    );
  }
}
