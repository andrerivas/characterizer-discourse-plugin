import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {

  opts.features['characterizer'] = !!siteSettings.characterizer_plugin_enabled;
  opts.characterizer_name_list = siteSettings.characterizer_name_list;

});

// Helper function to do the formatting in one pass
function strFormat(format) {
  var args = Array.prototype.slice.call(arguments, 1);
  return format.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
      ;
  });
};

// Here we will read the characterizer_name_list setting and parse it as
// regexString:options:username:linktext separated by #'s.
// Each occurrence of a character name will be replaced by the urlTemplate.
function characterizer(text, opts) {

  const list = opts().characterizer_name_list;
  const names = list.split("#")
    .map(triplet => triplet.split(":"));

  const urlTemplate = "<a href='/users/{0}' class='mention'>{1}</a>";

  names.forEach(quad => {
    text = text.replace(new RegExp(quad[0], quad[1]), strFormat(urlTemplate, quad[2], quad[3]));
  });

  return text;
};

export function setup(helper) {

  helper.addPreProcessor(text => {
    return characterizer(text, helper.getOptions);
  });

};