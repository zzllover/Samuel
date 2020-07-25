import React from 'react';
import ListItem from './list/listItem';
import { Link } from 'umi';
import Search from './search/search';
import { Drawer, NavBar, Icon } from 'antd-mobile';
import Header from './header/header';
import style from './lists.less';
import apis from '../services/services';
import { getToken } from '../utils/useToken';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      contentList: [],
    };
  }

  getEvents = async () => {
    let token = getToken();
    let res = await apis.Events.getEvents(null, token);
    res.json().then(data => {
      //console.log(data)
      this.setState({
        contentList: data.events,
      });
    });
  };

  componentWillMount() {
    this.getEvents();
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
                <Link to={`/detail?eventid=${item.id}`} key={index}>
                  <ListItem item={item} />
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
