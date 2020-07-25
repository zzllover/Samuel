import React from 'react';
import { useState } from 'react';
import { Carousel } from 'antd-mobile';
import style from './detailsInfo.less';
import gmap from '../../assets/gmap.png';
import { timeToShow } from '../../utils/_time';

const DetailsInfo = props => {
  const [imgHeight, setImgHeight] = useState('100px');
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div id={'detailInfo'} className={style.container}>
      <div className={style.carouselWraper}>
        <div>
          {props.data1.length === 0 ? (
            ''
          ) : (
            <Carousel
              className="space-carousel"
              frameOverflow="visible"
              cellSpacing={8}
              slideWidth={0.6}
              dots={false}
            >
              {props.data1.map((val, index) => (
                <a
                  key={val}
                  href="#"
                  style={{
                    display: 'block',
                    position: 'relative',
                    height: imgHeight,
                  }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      setImgHeight('auto');
                    }}
                  />
                </a>
              ))}
            </Carousel>
          )}
        </div>
      </div>
      <div
        className={style.activityContent}
        style={{ height: isHidden ? 'auto' : '150px' }}
      >
        {props.description}
        <div
          className={style.viewmore}
          style={{ display: isHidden ? 'none' : 'block' }}
        >
          <span
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          >
            view more
          </span>
        </div>
      </div>
      <div className={style.when}>
        <div className={style.title}>When</div>
        <div className={style.date}>
          <div className={style.startDate}>
            <div className={style.date1}>
              <i className={'iconfont icon-jiantou-right-kuai'}></i>
              {timeToShow(props.begin_time)}
            </div>
            <div className={style.time}>
              <strong>8:30</strong>am
            </div>
          </div>
          <div className={style.endDate}>
            <i className={'iconfont icon-jiantou-left-kuai'}></i>
            {timeToShow(props.end_time)}
          </div>
        </div>
      </div>

      <div className={style.where}>
        <div className={style.title}>Where</div>
        <div className={style.addr}>
          <strong>{props.location}</strong>
          <h3>{props.location_detail}</h3>
        </div>
        <div className={style.pic}>
          <img src={gmap} />
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
