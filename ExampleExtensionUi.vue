<template>
  <node-view-wrapper>
    <div style="border: 1px solid black">
      <h3>Example Extension UI</h3>
      <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
        <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
      </draggable>
    </div>
  </node-view-wrapper>
</template>

<script>
import draggable from 'vuedraggable'
import { NodeViewWrapper } from '@tiptap/vue-2'

export default {
  components: {
    draggable,
    NodeViewWrapper
  },

  data () {
    return {
      myArray: [
        { name: 'Ralph', id: 1 },
        { name: 'Seton', id: 2 },
        { name: 'Uberdosis', id: 3 }
      ]
    }
  }
}
</script>
