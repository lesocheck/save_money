import {createStackNavigator} from 'react-navigation';
import Main from './main';
import Item from './Item';
import Items from './Items';
import Start from './Start';
import {MAIN, ITEM, ITEMS, START} from '../routes';

export default createStackNavigator(
  {
    [MAIN]: Main,
    [ITEM]: Item,
    [ITEMS]: Items,
    [START]: Start,
  },
  {
    headerMode: 'none',
  },
);
