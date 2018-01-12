import {state as AppRoute} from '../app.route';
import {state as DashboardRoute} from './dashboard/dashboard.route';
import {state as UsersRoute} from './users/users.route';
import {state as videoDetails} from './video-details/video-details.route';
import {state as SearchVideos} from './search-videos/search-videos.route';
import {state as Login} from './login/login.route';
import {state as Register} from './register/register.route';

export const STATES = [AppRoute, Login, Register, DashboardRoute, UsersRoute, videoDetails, SearchVideos];
