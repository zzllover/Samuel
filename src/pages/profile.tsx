import React, { Component } from 'react';
import ListItem from './list/listItem';
import { Tabs } from 'antd-mobile';
import { Link } from 'umi';
import Header from './header/header';
import NoActivity from './noresult/noAcitvity';
import { StickyContainer, Sticky } from 'react-sticky';
import style from './profile.less';
import testImg from '../assets/testImg/touxiang.jpg';

function renderTabBar(props) {
  return (
    <Sticky topOffset={-45}>
      {({ style }) => (
        <div style={{ ...style, zIndex: 1, top: '45px' }}>
          <Tabs.DefaultTabBar {...props} />
        </div>
      )}
    </Sticky>
  );
}

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
            <span>0 past</span>
          </span>
        ),
      },
    ];

    const data1 = [{}, {}, {}];
    const data2 = [];
    const data3 = [{}];

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
            <div className={style.tabWraper}>
              <StickyContainer>
                <Tabs
                  tabs={tabs}
                  renderTabBar={renderTabBar}
                  initialPage={0}
                  animated={false}
                  useOnPan={false}
                  tabBarUnderlineStyle={{
                    backgroundColor: '#AECB4F',
                    height: 3,
                    border: 'none',
                  }}
                  tabBarActiveTextColor={'#AECB4F'}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                  >
                    <div className={style.container}>
                      {data1.map((item, index) => {
                        return (
                          <Link to="/detail" key={index}>
                            <ListItem />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                  >
                    {data2.length !== 0 ? (
                      data2.map((item, index) => {
                        return (
                          <Link to="/detail" key={index}>
                            <ListItem />
                          </Link>
                        );
                      })
                    ) : (
                      <NoActivity />
                    )}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                  >
                    {data3.length !== 0 ? (
                      data3.map((item, index) => {
                        return (
                          <Link to="/detail" key={index}>
                            <ListItem />
                          </Link>
                        );
                      })
                    ) : (
                      <NoActivity />
                    )}
                  </div>
                </Tabs>
              </StickyContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
