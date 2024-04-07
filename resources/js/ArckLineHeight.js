const { Mark } = Statamic.$bard.tiptap.core;

export const ArckLineHeight = Mark.create({

    name: "ArckLineHeight",

    addAttributes() {
        return {
            key: {
                default: '',
                parseHTML: element => {element.querySelector('span.arck-line-height')?.getAttribute('data-class')},
            },

        }
    },

    parseHTML() {
        return [
            {
                tag: 'span.arck-line-height'
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        const num = parseInt(HTMLAttributes.key.replace('arck-line-height-', '')) / 100;
        return [
            'span',
            {
                ...HTMLAttributes,
                class: 'arck-line-height',
                'data-class': HTMLAttributes.key,
                'style': `line-height: ${num};`
            },
            0
        ]
    },

    addCommands() {
        return {
            toggleArckLineHeight: attributes => ({ chain }) => {
                if (attributes.key) {
                    return chain()
                        .setMark(this.name, attributes)
                        .run()
                }

                return chain()
                    .unsetMark(this.name, { extendEmptyMarkRange: true })
                    .run()
            },
        }
    },
})
