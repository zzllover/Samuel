import React, { Component } from 'react';
import Toast from './toast/toast';
import Header from './header/header';
import Footer from './footer/footer';
import DetailsInfo from './detailComponent/detailsInfo';
import LikedGoing from './detailComponent/participants';
import Comments from './detailComponent/comments';
import style from './detail.less';
import testImg from '../assets/testImg/touxiang.jpg';
import throttle from './utils/throttle.js';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.tabBar = React.createRef();
    this.detailInfo = React.createRef();
    this.likedgoing = React.createRef();
    this.comments = React.createRef();
    this.state = {
      showToast: false,
      active: 0,
    };
  }

  componentDidMount() {
    this.windowOnScroll();
    var box0 = document.getElementById('detailInfo');
    var box1 = document.getElementById('likedgoing');
    var box2 = document.getElementById('comment');
    this.box0 = box0;
    this.box1 = box1;
    this.box2 = box2;
  }

  windowOnScroll() {
    let _this = this;
    const s = _this.tabBar.current.offsetTop;
    const phoneHight = document.documentElement.clientHeight - 65; //屏幕高度 - 底部nav：表示刚出可视位置
    const throttled = throttle(
      function() {
        let h = document.body.scrollTop || document.documentElement.scrollTop;
        if (_this.tabBar.current !== null) {
          const arr = [_this.box0, _this.box1, _this.box2];
          arr.forEach((item, index) => {
            if (
              item.getBoundingClientRect().top <= phoneHight ||
              item.getBoundingClientRect().top <= phoneHight > 89
            ) {
              _this.setState({
                active: index,
              });
            }
          });
          if (s - h <= 45) {
            _this.tabBar.current.style.position = 'sticky';
            _this.tabBar.current.style.top = '45px';
          } else {
            _this.tabBar.current.style.position = 'relative';
            _this.tabBar.current.style.top = '';
          }
        }
      },
      150,
      false,
    );
    window.onscroll = throttled;
  }

  handleChangeToast = () => {
    this.setState({
      showToast: !this.state.showToast,
    });
  };
  handleReply = () => {
    this.selectWhichTab(2); //点击回复按键时页面跳转到 tab2
  };

  selectWhichTab = (index: Number) => {
    this.setState({
      active: index,
    });
    if (index === 0) {
      this.box0.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
    if (index === 1) {
      this.box1.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
    if (index === 2) {
      this.box2.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };

  render() {
    const tabs1 = [
      { icon: 'iconfont icon-zhuyi', name: 'Details' },
      { icon: 'iconfont icon-person', name: 'Participants' },
      { icon: 'iconfont icon-chat', name: 'Comments' },
    ];

    return (
      <div>
        <Header />
        <div className={style.wraper}>
          <div className={style.commonInfo}>
            <span className={style.channelName}>Channel Name</span>
            <div className={style.activityName}>
              Activity Title Name Make it Longer May Longer than One Line
            </div>
            <div className={style.user}>
              <div className={style.usericon}>
                <img src={testImg} />
              </div>
              <div className={style.text}>
                <div className={style.username}>Username</div>
                <div className={style.publishtime}>Published 2 days ago</div>
              </div>
            </div>
          </div>

          <div className={style.tabBar} ref={this.tabBar}>
            {tabs1.map((val, index) => {
              return (
                <span
                  key={index}
                  className={this.state.active === index ? style.active : ''}
                  onClick={() => {
                    this.selectWhichTab(index);
                  }}
                >
                  <i className={val.icon} />
                  {val.name}
                </span>
              );
            })}
          </div>
          {this.state.showToast ? (
            <Toast
              color={'#E5F7A9'}
              top={'89px'}
              text={'I am a toast :) Slide down & slide up'}
            />
          ) : null}
          <DetailsInfo
            data1={[
              'AiyWuByWklrrUDlFignR',
              'TekJlZRVCjLFexlOCuWn',
              'IJOtIlfsYdTyaDTRVrLI',
            ]}
          />
          <LikedGoing />
          <Comments />
          <Footer
            onClickReply={this.handleReply}
            onClickSend={this.handleChangeToast}
          />
        </div>
      </div>
    );
  }
}
