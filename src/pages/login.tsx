import React, { Component } from 'react';
import { history } from 'umi';
import loginStyle from './login.less';
import { InputItem, Toast } from 'antd-mobile';
import apis from '../services/services';
import { saveToken } from '../utils/useToken';

// function failToast() {
//   Toast.fail('Load failed !!!', 1);
// }
//先就使用React 实现登录页面
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  login = async () => {
    let res = await apis.auth.auth({
      username: this.state.username,
      password: this.state.password,
    });
    res.json().then(data => {
      if (data.token !== undefined) {
        saveToken(data.token);
        Toast.success('Load success !!!', 1);
        history.push('/main');
      } else {
        Toast.fail(data.error, 1);
      }
    });
  };

  handleUsername = username => {
    this.setState({
      username,
    });
  };

  handlePassword = password => {
    this.setState({
      password,
    });
  };

  render() {
    return (
      <div className={loginStyle.login_main}>
        <div className={loginStyle.mask}></div>
        <div className={loginStyle.content}>
          <h2>FIND THE MOST LOVED ACTIVITIES</h2>
          <h3>BLACK CAT</h3>
          <div className={loginStyle.cat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 32 32"
              width="50"
              height="50"
            >
              <title>logo-cat</title>
              <polygon
                points="26.47 14.44 23.07 19.93 23.07 27.38 25.83 29.84 19.2 29.84 21.89 27.36 21.89 19.72 15.69 10.95 19.62 10.95 21.48 9.19 18.18 4.17 14.73 3.14 15.15 -0.03 9.92 4.17 2.83 17.38 7.78 28.12 5.51 30.53 5.51 31.97 9.26 31.97 10.18 31.48 10.93 31.97 29.94 31.97 29.94 30.25 25.68 25.99 25.68 20.55 27.96 16.84 28.78 16.84 29.2 20.08 30.4 20.08 30.71 14.44 26.47 14.44"
                fill="#D5EF7F"
              />
            </svg>
          </div>
          <div className={loginStyle.input}>
            <InputItem
              value={this.state.username}
              onChange={this.handleUsername}
            >
              <div className={loginStyle.iconimg1}></div>
            </InputItem>
            <InputItem
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            >
              <div className={loginStyle.iconimg2}></div>
            </InputItem>
          </div>
        </div>

        <button className={loginStyle.login_btn} onClick={this.login}>
          SIGN IN
        </button>
      </div>
    );
  }
}

export default Login;
