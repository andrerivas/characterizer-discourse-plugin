import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {

  opts.features['characterizer'] = !!siteSettings.characterizer_plugin_enabled;
});

function characterizer(text, opts) {
  //const abbreviationCouples = list.split("|").map(couple => couple.split(":"));

	text = text.replace('Rapp', "<a href='/users/sean' class='mention'>Rapp</a>");
	text = text.replace('NasD', "<a href='/users/greg' class='mention'>NasD</a>");
	
  return text;
};

export function setup(helper) {

  helper.addPreProcessor(text => {
    return characterizer(text, helper.getOptions());
  });
  
  //helper.inlineReplace('Rapp', text => ['a', {href: '/users/sean', class: 'mention'}, 'Rapp']);
}