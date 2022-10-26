<template>
  <div>
    <h1 class="text-xl">
      Demo Of Dragging Issue Inside Tiptap Vue Based Nodes
    </h1>

    <p>
      Inside the blue border is a TipTap editor, with content and a custom extension. The extension is using
      vuedraggable.
    </p>

    <div class="border border-1 border-blue-400 m-10">
      <editor-content :editor="editor" />
    </div>


    <p>
      Below is the same vuedraggable component. Note: Once you attempt to drag the elements of the draggable
      inside the editor, the below is also disabled and cannot be used.
    </p>

    <div class="border border-1 border-red-400 m-10">
      <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
        <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
      </draggable>
    </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import exampleExtension from './exampleExtension'

export default {
  components: {
    draggable,
    EditorContent,
  },

  data() {
    return {
      editor: null,
      myArray: [
        { name: 'Ξ First', id: 1 },
        { name: 'Ξ Second', id: 2 },
        { name: 'Ξ Third', id: 3 }
      ]
    }
  },

  mounted() {
    this.editor = new Editor({
      content: {
        type: 'doc',
        'content': [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Here is something to edit'
              }
            ]
          },
          {
            type: 'exampleExtension'
          }
        ]
      },
      extensions: [
        StarterKit,
        exampleExtension
      ],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}

</script>