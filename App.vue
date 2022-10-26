<template>
  <div>
    <h1>This is the editor</h1>

    <editor-content :editor="editor" />

    <h3>
      Same outside of editor:
    </h3>

    <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
    </draggable>
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
        { name: 'Ralph', id: 1 },
        { name: 'Seton', id: 2 },
        { name: 'Uberdosis', id: 3 }
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