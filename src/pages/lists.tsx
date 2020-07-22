import React from 'react';
import ListItem from './list/listItem';
import { Drawer } from 'antd-mobile';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: false,
      contentList: [{}, {}],
    };
  }

  render() {
    const sliderbar = <div>asasdasdsadasdadasdasdsdaddasd</div>;
    return (
      <div>
        <Drawer sidebar={sliderbar} docked={this.state.docked}>
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
