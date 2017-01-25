(function() {
    if (Discourse.dialect_deprecated) { return; }
    
    function characterizer(text) {
        var siteSettings = Discourse.SiteSettings;

        if (siteSettings.characterizer_plugin_enabled) {
            // This doesn't do jack!
        }
        return text;
    }
    

    Discourse.Dialect.addPreProcessor(function(text) {
        return characterizer(text);
    });
})();