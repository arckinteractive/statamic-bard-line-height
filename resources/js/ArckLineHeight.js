const { Mark, mergeAttributes } = Statamic.$bard.tiptap.core;

export const ArckLineHeight = Mark.create({
    name: 'arckLineHeight',

    addAttributes() {
        return {
            key: {
                default: '',
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: "span.arck-line-height",
                getAttrs: (dom) => ({
                    key: dom.getAttribute('data-class')
                })
            }
        ];
    },

    renderHTML({mark, HTMLAttributes}) {
        const num = parseInt(mark.attrs.key.replace('arck-line-height-', '')) / 100;

        return [
            "span",
            mergeAttributes(HTMLAttributes,
            {
                'class': 'arck-line-height',
                'data-class': mark.attrs.key,
                'style': `line-height: ${num};`
            }),
            0,
        ];
    },

    addCommands() {
        return {
            toggleArckLineHeight: (attributes) => ({ commands }) => {
                return commands.toggleMark(this.name, attributes);
            }
        }
    },

    pasteRules({type}) {
        return [];
    },

    plugins() {
        return [];
    }
});

