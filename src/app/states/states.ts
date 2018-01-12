import {state as AppRoute} from '../app.route';
import {state as DashboardRoute} from './dashboard/dashboard.route';
import {state as UsersRoute} from './users/users.route';
import {state as videoDetails} from './video-details/video-details.route';
import {state as SearchVideos} from './search-videos/search-videos.route';

export const STATES = [AppRoute, DashboardRoute, UsersRoute, videoDetails, SearchVideos];
