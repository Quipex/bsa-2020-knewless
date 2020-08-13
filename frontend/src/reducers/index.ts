import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import data from '../screens/Home/reducers';
import notify from '../containers/Notifications/reducer';
import authorSettings from '../screens/AuthorSettings/reducer';
import studentSettings from '../screens/StudentSettings/reducer';
import mainPage from '../screens/MainPage/reducers';
import authorMainPage from '../screens/AuthorMainPage/reducers';
import landing from '../screens/Landing/reducers';
import lecturePage from '../screens/LecturePage/reducers/index';
import auth from '../screens/Authentication/reducer';
import addcourse from '../screens/AddCourse/reducers';
import authorPublicData from '../screens/AuthorPublicPage/reducers';
import { appRouter } from 'containers/AppRouter/reducer';
import addPathPage from '../screens/AddPath/reducers';

export default combineReducers({
  toastr,
  authorSettings,
  studentSettings,
  data,
  notify,
  lecturePage,
  mainPage,
  authorMainPage,
  landing,
  addcourse,
  auth,
  authorPublicData,
  appRouter,
  addPathPage
});
