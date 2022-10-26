# Demo of the Tiptap / Vue 2 Drag Start Issue

## Native ( or 3rd-party ) Draggable events are not working once dragging is attempted in the editor.
### Steps to reproduce:
- Drag and Drop the items in the component outside the TipTap editor
- Focus the editor and try to drag an element
- Attempt to Drag and Drop in the component outside the TipTap editor
- This will fail

### Events:
- `window.addEventListener('dragstart', function(event) {console.log(event);})`
- `window.addEventListener('dragend', function(event) {console.log(event);})`
- `window.addEventListener('drag', function(event) {console.log(event);})`

These events will all log before you try to drag in the TipTap Editor.  
Once the TipTap Editor is focused and you try to drag, the only event that still fires is:
`window.addEventListener('dragstart', function(event) {console.log(event);})`
But this only happens inside the TipTapEditor.  All outside drag events do not fire.