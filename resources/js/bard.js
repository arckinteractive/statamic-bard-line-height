import { ArckLineHeight } from './ArckLineHeight';
import ArckLineHeightMenu from './ArckLineHeightMenu.vue';

Statamic.$bard.addExtension(() => ArckLineHeight);
Statamic.$bard.buttons(() => {
    return {
        name: 'arcklineheight',
        text: 'Line Height',
        command: (editor) => editor.commands.toggleArckLineHeight(),
        icon: 'arck-line-height',
        component: ArckLineHeightMenu
    };
});
