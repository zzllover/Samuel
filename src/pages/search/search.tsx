import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import style from './search.less';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.search}>
        <div className={style.content}>
          <div className={style.date}>
            <h3>DATE</h3>
            <div>
              <span>ANYTIME</span> <span>TODAY</span> <span>TOMORROW</span>
              <span>THIS WEEK</span> <span>THIS MONTH</span>
              <span>LATER</span>
            </div>
          </div>
          <div className={style.channel}>
            <h3>CHANNEL</h3>
            <div>
              <span>All</span> <span>Channel 3</span> <span>Channel 3</span>
              <span>Channel 3</span> <span>Channel 3</span>
              <span>Channel 3</span> <span>Channel 3</span>
            </div>
          </div>
        </div>

        <button className={style.search_btn}>
          <i className={'iconfont icon-search'}></i>Search
        </button>
      </div>
    );
  }
}
