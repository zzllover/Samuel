import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import { history } from 'umi';
import Header from './header/header';
import Footer from './footer/footer';
import DetailsInfo from './detailComponent/detailsInfo';
import LikedGoing from './detailComponent/participants';
import Comments from './detailComponent/comments';
import style from './detail.less';
import testImg from '../assets/testImg/touxiang.jpg';
import throttle from '../utils/throttle.js';
import apis from '../services/services';
import { getToken } from '../utils/useToken';

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
      name: '',
      channel: {},
      creator: {},
      images: [],
      description: '',
      begin_time: '2020-07-24T23:14:55.147Z',
      end_time: '2020-07-24T23:14:55.147Z',
      location: '',
      location_detail: '',
      participants: [],
      eventLiker: [],
      comments: [],
      me_going: true,
      me_likes: true,
    };
  }

  getParticipants = async (id: String) => {
    let token = getToken();
    let res = await apis.Events.getParticipants(id, token);
    res.json().then(data => {
      this.setState({
        participants: data.users,
      });
    });
  };

  getEventLiker = async (id: String) => {
    let token = getToken();
    let res = await apis.Events.getEventLiker(id, null, token);
    res.json().then(data => {
      this.setState({
        eventLiker: data.users,
      });
    });
  };

  getComments = async (id: String) => {
    let token = getToken();
    let res = await apis.Events.getComments(id, null, token);
    res.json().then(data => {
      this.setState({
        comments: data.comments,
      });
    });
  };

  getEventById = async (id: String) => {
    let token = getToken();
    let res = await apis.Events.getEvent(id, token);
    res.json().then(data => {
      this.setState({
        name: data.event.name,
        channel: data.event.channel,
        creator: data.event.creator,
        images: data.event.images,
        description: data.event.description,
        begin_time: data.event.begin_time,
        end_time: data.event.end_time,
        location: data.event.location,
        location_detail: data.event.location_detail,
        me_going: data.event.me_going,
        me_likes: data.event.me_likes,
      });
    });
  };

  componentWillMount() {
    const eventId = this.props.location.query.eventid;
    console.log(eventId);
    if (eventId == undefined) {
      history.push('/main');
      return;
    }
    this.getEventById(eventId);
    this.getParticipants(eventId);
    this.getEventLiker(eventId);
    this.getComments(eventId);
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

  handleChangeLike = async () => {
    let token = getToken();
    const eventId = this.props.location.query.eventid;
    if (this.state.me_likes) {
      //已点赞，则取消
      await apis.Events.unlikeEvent(eventId, token);
    } else {
      await apis.Events.likeEvent(eventId, token);
    }
    this.getEventById(eventId);

    this.getEventLiker(eventId);
  };

  handleChangeGoing = async () => {
    let token = getToken();
    const eventId = this.props.location.query.eventid;
    if (this.state.me_going) {
      //已点赞，则取消
      await apis.Events.leaveEvent(eventId, token);
    } else {
      await apis.Events.participateEvent(eventId, token);
    }
    this.getEventById(eventId);
    this.getParticipants(eventId);
  };

  handleReply = () => {
    this.scrollToBottom();
  };

  commentEvent = async (id: String, comment: String) => {
    let token = getToken();
    await apis.Events.commentEvent(id, comment, token);
  };

  handleSend = (val: String) => {
    //发表评论
    //console.log(val)
    if (val.trim().length === 0) {
      Toast.fail('Do not reply with empty content', 1);
      return;
    }
    const eventId = this.props.location.query.eventid;
    this.commentEvent(eventId, val);
    this.getComments(eventId);
    this.scrollToBottom();
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

  scrollToBottom = () => {
    setTimeout(() => {
      if (this.state.comments.length !== 0) {
        let last = this.box2.children[this.box2.children.length - 1];
        //window.scrollTo(0, div1.scrollHeight + 200);
        last.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      } else {
        this.selectWhichTab(2);
      }
    }, 300);
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
            <span className={style.channelName}>{this.state.channel.name}</span>
            <div className={style.activityName}>{this.state.name}</div>
            <div className={style.user}>
              <div className={style.usericon}>
                <img src={this.state.creator.avatar} />
              </div>
              <div className={style.text}>
                <div className={style.username}>
                  {this.state.creator.username}
                </div>
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
            data1={this.state.images}
            description={this.state.description}
            begin_time={this.state.begin_time}
            end_time={this.state.end_time}
            location={this.state.location}
            location_detail={this.state.location_detail}
          />
          <LikedGoing
            participants={this.state.participants}
            eventLiker={this.state.eventLiker}
          />
          <Comments commentLists={this.state.comments} />
          <Footer
            onClickReply={this.handleReply}
            onClickSend={this.handleSend}
            onClickLike={this.handleChangeLike}
            onClickGoing={this.handleChangeGoing}
            me_going={this.state.me_going}
            me_likes={this.state.me_likes}
          />
        </div>
      </div>
    );
  }
}
