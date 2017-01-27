# characterizer-discourse-plugin
---

This plugin translates a list of "Characters" to a mention tag. 
A mention tag is simply an `<a class="mention" href="/users/[username]>` tag.

When typing in a post, this plug-in will replace any mention of one of the
hard-coded character names with a mention linking to a User's card, and a 
formatted version of the character name. It essentially translates an alias for 
a user, displays it nicely, and creates a mention to the actual user.

There is a plugin setting named characterizer_name_list which is used to 
perform the mappings. It's format is:

    regexString:options:username:linktext 
And each one is separated by #'s. For example:

    \b(rapp)|(Rapalapaskank)\b:ig:sean:Rapp#\b(nasd|NasD Axe|tublak|tuglak|nasty axe|tublack)\b:ig:greg:NasD Axe

### Future Improvements
- Add a custom user field for the character name
- Somehow detect mentions of these aliases without hurting performance too badly
- Error handling for poorly formatted characterizer_name_list values

Also, this only supports the newer dialect engine.

### Note
This plugin will not cause these mentions to show up in the user's Mentions page. However I have
forked discourse into a version which, with some tiny little tweaks, will actually do that.