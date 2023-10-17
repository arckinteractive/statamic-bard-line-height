
import { ArckLineHeight } from './ArckLineHeight';
import ArckLineHeightMenu from './ArckLineHeightMenu.vue';

Statamic.booting(() => {
    Statamic.$bard.addExtension(() => ArckLineHeight);
    Statamic.$bard.buttons((buttons, button) => {
        return button({
            name: 'ArckLineHeight',
            text: 'Line Height',
            command: (editor) => editor.chain().focus().toggleArckLineHeight().run(),
            args: {
                key: ""
            },
            html: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M626.29 392H269.71c-7.57 0-13.71 7.16-13.71 16v16c0 8.84 6.14 16 13.71 16h356.58c7.57 0 13.71-7.16 13.71-16v-16c0-8.84-6.14-16-13.71-16zM176 144c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C-4.64 126 .36 144 16 144h56v224H16c-14.29 0-21.31 17.31-11.29 27.31l80 80a16 16 0 0 0 22.62 0l80-80C196.64 386 191.64 368 176 368h-56V144zm450.31 88h-356.6c-7.57 0-13.71 7.16-13.71 16v16c0 8.84 6.14 16 13.71 16h356.58c7.57 0 13.71-7.16 13.71-16v-16c0-8.84-6.14-16-13.71-16zm0-160h-356.6C262.14 72 256 79.16 256 88v16c0 8.84 6.14 16 13.71 16h356.58c7.57 0 13.71-7.16 13.71-16V88c0-8.84-6.14-16-13.71-16z" class=""></path></svg>',
            component: ArckLineHeightMenu
        });
    });
});
