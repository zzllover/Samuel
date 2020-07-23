import React from 'react';
import { useState } from 'react';
import { Carousel } from 'antd-mobile';
import style from './detailsInfo.less';
import gmap from '../../assets/gmap.png';

const DetailsInfo = props => {
  const [imgHeight, setImgHeight] = useState('100px');
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div id={'detailInfo'} className={style.container}>
      <div className={style.carouselWraper}>
        <div>
          <Carousel
            className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
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
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
        </div>
      </div>
      <div
        className={style.activityContent}
        style={{ height: isHidden ? 'auto' : '150px' }}
      >
        [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien
        arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi
        potenti. Maecenas et enim odio. Nullam massa metus, varius quis vehicula
        sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est
        nec hendrerit varius, enim dui hendrerit magna, ut pulvinar nibh lorem
        vel lacus. Mauris a orci iaculis, hendrerit eros sed, gravida leo. In
        dictum mauris vel augue varius there is south north asim
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
              <i className={'iconfont icon-jiantou-right-kuai'}></i>15 April
              2015
            </div>
            <div className={style.time}>
              <strong>8:30</strong>am
            </div>
          </div>
          <div className={style.endDate}>
            <i className={'iconfont icon-jiantou-left-kuai'}></i>15 April 2015
          </div>
        </div>
      </div>

      <div className={style.where}>
        <div className={style.title}>Where</div>
        <div className={style.addr}>
          <strong>Marina Bay Sands</strong>
          <h3>10 Bayfront Ave, S018956</h3>
        </div>
        <div className={style.pic}>
          <img src={gmap} />
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
