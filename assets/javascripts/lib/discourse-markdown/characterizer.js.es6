import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {

  opts.features['characterizer'] = !!siteSettings.characterizer_plugin_enabled;
});

function characterizer(text, opts) {
  //const abbreviationCouples = list.split("|").map(couple => couple.split(":"));
  text = text.replace(/\b(rapp)|(Rapalapaskank)\b/ig, "<a href='/users/sean' class='mention'>Rapp</a>")
              .replace(/\b(nasd|NasD Axe|tublak|tuglak|nasty axe|tublack)\b/ig, "<a href='/users/greg' class='mention'>NasD Axe</a>")
              .replace(/\b(browneye|brown eye|tight butthole)\b/ig, "<a href='/users/keith' class='mention'>Browneye</a>").replace(/\b(BE)\b/g, "<a href='/users/keith' class='mention'>Browneye</a>")
              .replace(/\b(snaggs|snags)\b/ig, "<a href='/users/christian' class='mention'>Snaggs</a>")
              .replace(/\b(durem)\b/ig, "<a href='/users/strole' class='mention'>Durem</a>")
              .replace(/\b(midling)\b/ig, "<a href='/users/dave' class='mention'>Midling</a>")
              .replace(/\b(otto)\b/ig, "<a href='/users/dave' class='mention'>Otto</a>")
              .replace(/\b(gorp)\b/ig, "<a href='/users/tyler' class='mention'>Gorp</a>")
              .replace(/\b(licsmak)\b/ig, "<a href='/users/kevin' class='mention'>Licksmak</a>")
              .replace(/\b(gamora|gomorrah|gomorra|gomora|gamorah|gamorra)\b/ig, "<a href='/users/fatima' class='mention'>Gomora</a>")
              .replace(/\b(DM|dungeon master|GM|game master)\b/ig, "<a href='/users/andre' class='mention'>Dungeon Master</a>");

  return text;
};

export function setup(helper) {

  helper.addPreProcessor(text => {
    return characterizer(text, helper.getOptions());
  });
  
};