import { Redirect } from 'umi';

export default props => {
  const useAuth = () => {
    return { isLogin: true };
  };
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
