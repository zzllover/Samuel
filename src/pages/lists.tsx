import React from 'react';
import ListItem from './list/listItem';
import { Link } from 'umi';
import Search from './search/search';
import { Drawer, NavBar, Icon } from 'antd-mobile';
import Header from './header/header';
import style from './lists.less';

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
    return (
      <div className={style.main}>
        <Drawer
          sidebar={sliderbar}
          open={this.state.open}
          onOpenChange={this.onOpemChange}
        >
          <Header
            curPath={this.props.route.path}
            changeOpen={this.onOpemChange}
          />
          <div className={style.container}>
            {this.state.contentList.map((item, index) => {
              return (
                <Link to="/detail" key={index}>
                  <ListItem />
                </Link>
              );
            })}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Lists;
