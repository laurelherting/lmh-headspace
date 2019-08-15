# Really important thing to remember - dispatch calls do NOT return something to use.
- You have to access it from the store.
- ex. I was trying to do `const notes = await getNotes();`. Nope. 
You have to call `await getNotes();` and then further down just reference
`this.props.note.items` in my case.

