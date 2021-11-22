export default class ArckLineHeight {
    name() {
        return "ArckLineHeight";
    }

    schema() {
        return {
            attrs: {
                key: '',
            },
            parseDOM: [
                {
                    tag: "span.arck-line-height",
                    getAttrs: (dom) => ({
                        key: dom.getAttribute('data-class')
                    })
                }
            ],
            toDOM: (mark) => {
                const num = parseInt(mark.attrs.key.replace('arck-line-height-', '')) / 100;
                
                return [
                    "span",
                    {
                        'class': 'arck-line-height',
                        'data-class': mark.attrs.key,
                        'style': `line-height: ${num};`
                    },
                    0,
                ];
            }
        };
    }

    commands({type, updateMark, removeMark}) {
        return attrs => {
            if (attrs.key) {
                return updateMark(type, attrs)
            }

            return removeMark(type)
        }
    }

    pasteRules({type}) {
        return [];
    }

    plugins() {
        return [];
    }
}