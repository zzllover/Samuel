import React from 'react';
import ListItem from './list/listItem';
import Search from './search/search';
import { Drawer, NavBar, Icon } from 'antd-mobile';
import logo from '../assets/logo-cat.svg';
import style from './lists.less';
import testImg from '../assets/testImg/touxiang.jpg';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      contentList: [{}, {}, {}, {}],
    };
  }
  onOpemChange = (...args) => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const sliderbar = <Search />;
    const navRight = <img src={testImg} className={style.userIcon} />;
    return (
      <div>
        <Drawer
          sidebar={sliderbar}
          open={this.state.open}
          onOpenChange={this.onOpemChange}
        >
          <div className={style.Nav}>
            <NavBar
              icon={<Icon type="search" />}
              onLeftClick={this.onOpemChange}
              rightContent={navRight}
            >
              <img src={logo} className={style.logoCat} />
            </NavBar>
          </div>
          <div>
            {this.state.contentList.map((item, index) => {
              return <ListItem key={index} />;
            })}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Lists;
