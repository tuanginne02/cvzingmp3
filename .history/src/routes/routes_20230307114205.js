import config from '~/config';

//Layout
// import { HeaderOnly } from '~/layouts';
//Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import FollowingCp from '~/pages/Following/FollowingCp'
import FollowingKp from '~/pages/Following/FollowingKp'
import FollowingUSK from '~/pages/Following/FollowingUSK'
import MainFeed from '~/pages/Following/MainFeed'
import UserZing from '~/pages/UserZing'
import Radio from '~/pages/Radio'
import zingchart from '~/pages/zingchart'
import NewMusic from '~/pages/NewMusic'
import Category from '~/pages/Category';
import TopRank from '~/pages/TopRank';
import MV from '~/pages/MV';
import UpDateVIP 

// //Chưa Đăng Nhập
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.following_usk, component: FollowingUSK },
  { path: config.routes.following_Kp, component: FollowingKp },
  { path: config.routes.following_Cp, component: FollowingCp },
  { path: config.routes.mainfeed, component: MainFeed },
  { path: config.routes.profile, component: UserZing },
  { path: config.routes.radio, component: Radio },
  { path: config.routes.zingchart, component: zingchart },
  { path: config.routes.newmusic, component: NewMusic },
  { path: config.routes.category, component: Category },
  { path: config.routes.toprank, component: TopRank },
  { path: config.routes.mv, component: MV },

];
//Đã Đăng Nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };