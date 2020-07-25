import React, { Component } from 'react';
import ListItem from './list/listItem';
import { Tabs } from 'antd-mobile';
import { Link } from 'umi';
import Header from './header/header';
import NoActivity from './noresult/noAcitvity';
import { StickyContainer, Sticky } from 'react-sticky';
import style from './profile.less';
import testImg from '../assets/testImg/touxiang.jpg';
import { getToken } from '../utils/useToken';
import apis from '../services/services';

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
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      avatar: '',
      email: '',
      liked: [],
      going: [],
      past: [],
    };
  }

  getUser = async () => {
    let token = getToken();
    let res = await apis.Users.getUser(token);
    res.json().then(data => {
      console.log(data);
      this.setState({
        username: data.username,
        avatar: data.avatar,
        email: data.email,
      });
    });
  };

  getUserEvents = async (type: String) => {
    let token = getToken();
    let res = await apis.Users.getUserEvents({ type: type }, token);
    res.json().then(data => {
      console.log(data.events);
      if (type === 'liked') {
        this.setState({
          liked: data.events,
        });
      } else if (type === 'going') {
        this.setState({
          going: data.events,
        });
      } else {
        this.setState({
          past: data.events,
        });
      }
    });
  };

  componentWillMount() {
    this.getUser();
    this.getUserEvents('liked');
    this.getUserEvents('going');
    this.getUserEvents('past');
  }

  render() {
    const tabs = [
      {
        title: (
          <span className={style.tabtitle}>
            <i className={'iconfont icon-aixin1'}></i>
            <span>{this.state.liked.length + ' liked'}</span>
          </span>
        ),
      },
      {
        title: (
          <span className={style.tabtitle}>
            <i className={'iconfont icon-gou'}></i>
            <span>{this.state.going.length + ' going'}</span>
          </span>
        ),
      },
      {
        title: (
          <span className={style.tabtitle}>
            <i className={'iconfont icon-xiongzhang'}></i>
            <span>{this.state.past.length + ' past'}</span>
          </span>
        ),
      },
    ];

    return (
      <div>
        <Header fixed1={true} />

        <div className={style.main}>
          <div className={style.top}>
            <div className={style.userpic}>
              <img src={this.state.avatar} alt="" />
            </div>
            <div className={style.username}>{this.state.username} </div>
            <div className={style.useremail}>
              <i className={'iconfont icon-email'}></i>
              <span>{this.state.email}</span>
            </div>
          </div>
          <StickyContainer>
            <div className={style.bottom}>
              <div className={style.tabWraper}>
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
                      {this.state.liked.length !== 0 ? (
                        this.state.liked.map((item, index) => {
                          return (
                            <Link to={`/detail?eventid=${item.id}`} key={index}>
                              <ListItem item={item} />
                            </Link>
                          );
                        })
                      ) : (
                        <NoActivity />
                      )}
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
                    <div className={style.container}>
                      {this.state.going.length !== 0 ? (
                        this.state.going.map((item, index) => {
                          return (
                            <Link to={`/detail?eventid=${item.id}`} key={index}>
                              <ListItem item={item} />
                            </Link>
                          );
                        })
                      ) : (
                        <NoActivity />
                      )}
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
                    <div className={style.container}>
                      {this.state.past.length !== 0 ? (
                        this.state.past.map((item, index) => {
                          return (
                            <Link to={`/detail?eventid=${item.id}`} key={index}>
                              <ListItem item={item} />
                            </Link>
                          );
                        })
                      ) : (
                        <NoActivity />
                      )}
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </StickyContainer>
        </div>
      </div>
    );
  }
}
