
import { withPluginApi } from 'discourse/lib/plugin-api';
//alert('outside init!');

export default {
  name: 'characterizer',
  initialize() {
		//alert('init!');
     withPluginApi('0.1', api => {       
       api.onPageChange(() => console.log('user navigated!'));
     });

  }
}