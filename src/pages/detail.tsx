import React, { Component } from 'react';
import Header from './header/header';
import DetailsInfo from './detailComponent/detailsInfo';
import style from './detail.less';
import testImg from '../assets/testImg/touxiang.jpg';

export default class Detail extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <div>
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
          <DetailsInfo
            data1={[
              'AiyWuByWklrrUDlFignR',
              'TekJlZRVCjLFexlOCuWn',
              'IJOtIlfsYdTyaDTRVrLI',
            ]}
          />
        </div>
      </div>
    );
  }
}
