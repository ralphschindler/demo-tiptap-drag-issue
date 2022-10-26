<template>
  <node-view-wrapper>
    <div class="border border-1 border-green-400 m-10">
      <h3 class="text-lg">Example Extension UI</h3>
      <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
        <div v-for="element in myArray" :key="element.id">
          {{ element.name }}
        </div>
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
        { name: 'Ξ First', id: 1 },
        { name: 'Ξ Second', id: 2 },
        { name: 'Ξ Third', id: 3 }
      ]
    }
  }
}
</script>
