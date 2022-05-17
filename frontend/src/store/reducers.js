import VersionReducer from './version/reducer';
import NavigationDrawerReducer from './navigationDrawer/reducer';
import TimetableReducer from './timetable/reducer';
import BusStopReducer from './busStop/reducer';
import BusStopsReducer from './busStops/reducer';
import DebugToggleReducer from './debugToggle/reducer';
import NavigationReducer from './navigation/reducer';

const RootReducer = {
  version: VersionReducer,
  navigationDrawer: NavigationDrawerReducer,
  timetable: TimetableReducer,
  busStop: BusStopReducer,
  busStops: BusStopsReducer,
  debugToggle: DebugToggleReducer,
  navigation: NavigationReducer,
};

export default RootReducer;
