import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {

  opts.features['characterizer'] = !!siteSettings.characterizer_plugin_enabled;
});

function characterizer(text, opts) {
  //const abbreviationCouples = list.split("|").map(couple => couple.split(":"));
  text = text.replace(/rapp/ig, "<a href='/users/sean' class='mention'>Rapp</a>");
	text = text.replace(/nasd/ig, "<a href='/users/greg' class='mention'>NasD Axe</a>");
	text = text.replace(/BE/g, "<a href='/users/keith' class='mention'>Browneye</a>");

  return text;
};

export function setup(helper) {

  helper.addPreProcessor(text => {
    return characterizer(text, helper.getOptions());
  });
  
};