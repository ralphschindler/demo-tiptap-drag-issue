import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-2'
import ExampleExtensionUi from './ExampleExtensionUi.vue'

export default Node.create({
    name: 'exampleExtension',

    draggable: true,

    group () {
        return 'block'
    },

    parseHTML () {
        return [
            { tag: 'facebook-embed' }
        ]
    },

    renderHTML ({ HTMLAttributes }) {
        return ['facebook-embed', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
    },

    addAttributes () {
        return {
            url: {
                default: ''
            }
        }
    },

    addCommands () {
        return {
            insertExampleExtension: options => ({ commands }) => {
                return commands.insertContent({
                    type: this.name,
                    attrs: options
                })
            }
        }
    },

    addNodeView () {
        return VueNodeViewRenderer(ExampleExtensionUi)
    }
})