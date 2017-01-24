(function() {
    if (Discourse.dialect_deprecated) { return; }
    
    function characterizer(text) {
        var siteSettings = Discourse.SiteSettings;

        if (siteSettings.characterizer_plugin_enabled) {
	        //var list = siteSettings.abbreviations_plugin_list;
	
	        /*var abbreviationCouples = list.split("|").map(function(couple) {
	            return couple.split(":");
	        });*/

        	text = text.replace(new RegExp("\\b((\\s)a|b(?=\\s))\\b","g"), 'replaced!');

        }
    return text;
    }
    

    Discourse.Dialect.addPreProcessor(function(text) {
        return characterizer(text);
    });
})();