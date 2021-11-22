import ArckLineHeight from './ArckLineHeight';
import ArckLineHeightMenu from './ArckLineHeightMenu.vue';

Statamic.$bard.extend(({mark}) => mark(new ArckLineHeight()));
Statamic.$bard.buttons(() => {
    return {
        name: 'arcklineheight',
        text: 'Line Height',
        command: 'classType',
        args: {
            key: ""
        },
        icon: 'arck-line-height',
        component: ArckLineHeightMenu
    };
});