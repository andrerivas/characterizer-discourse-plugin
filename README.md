# characterizer-discourse-plugin
---

This plugin translates a hard-coded list of "Characters" to a mention tag. 
A mention tag is simply an `<a class="mention" href="/users/[username]>` tag.

When typing in a post, this plug-in will replace any mention of one of the
hard-coded character names with a mention linking to a User's card, and a 
formatted version of the character name. It essentially translates an alias for 
a user, displays it nicely, and creates a mention to the actual user.

### Future Improvements
- Add a custom user field for the character name
- Somehow detect mentions of these aliases without hurting performance too badly

### Notes
There is currently a setting in the code with a list of users and characters.
This is not in use at all right now. As a next step I may switch to using this 
list first before trying to use a custom user field.
