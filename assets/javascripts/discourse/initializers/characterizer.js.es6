
import { withPluginApi } from 'discourse/lib/plugin-api';
// This file may be totally unnecessary.

export default {
  name: 'characterizer',
  initialize() {

     withPluginApi('0.1', api => {       
       // not even going to do anything in here.
     });

  }
}