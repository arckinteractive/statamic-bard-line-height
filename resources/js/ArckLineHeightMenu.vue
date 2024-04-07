<template>
    <div class="class-type-wrapper">
        <button
            class="bard-toolbar-button"
            :class="{ 'active': currentKey || showOptions }"
            v-html="button.html"
            v-tooltip="button.text"
            @click="showOptions = !showOptions"
        ></button>
        <div class="class-type-container" v-if="showOptions" v-click-outside="closeClassTypeMenu">
            <button v-for="(type, key) in classTypes" class="class-type-button" @click="setClassType(key)"
                    :class="{ 'active' : key == currentKey }">
                <span :class="getClass(key)">{{ type.name }}</span>
            </button>
        </div>
    </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
    directives: {
        clickOutside: vClickOutside.directive
    },
    mixins: [BardToolbarButton],
    computed: {
        classTypes() {
            return {
                'arck-line-height-50': {
                    name: 'Line Height 0.5',
                },
                'arck-line-height-75': {
                    name: 'Line Height 0.75',
                },
                'arck-line-height-100': {
                    name: 'Line Height 1',
                },
                'arck-line-height-125': {
                    name: 'Line Height 1.25',
                },
                'arck-line-height-150': {
                    name: 'Line Height 1.5',
                },
                'arck-line-height-175': {
                    name: 'Line Height 1.75',
                },
                'arck-line-height-200': {
                    name: 'Line Height 2',
                },
                'arck-line-height-225': {
                    name: 'Line Height 2.25',
                },
                'arck-line-height-250': {
                    name: 'Line Height 2.5',
                },
                'arck-line-height-275': {
                    name: 'Line Height 2.75',
                },
                'arck-line-height-300': {
                    name: 'Line Height 3',
                },
            };
        },
        currentKey() {
            return this.editor.getAttributes('ArckLineHeight').key;
        }
    },
    data() {
        return {
            showOptions: false
        };
    },
    methods: {
        closeClassTypeMenu() {
            // close the menu
            this.showOptions = false;
        },
        setClassType(classTypeKey) {
            // update the editor
            this.editor.commands.toggleArckLineHeight({
                key: classTypeKey == this.currentKey ? false : classTypeKey
            })
            // hide the menu
            this.showOptions = false;
        },
        getClass(key) {
            const classes = {
                'class-type-label': true
            };

            classes['arck-' + key] = true;

            return classes;
        },
    }
};
</script>
<style lang="postcss">
.class-type-wrapper {
    @apply inline-block relative;
}
.class-type-container {
    @apply absolute bg-white border border-gray-300 rounded-sm z-10 divide-y divide-gray-100 shadow-lg;
}
.class-type-button {
    @apply text-left px-3 py-2 w-full hover:bg-gray-100 flex items-center;
}
.class-type-button.active {
    @apply bg-gray-200;
}
.class-type-label {
    @apply block text-left whitespace-nowrap;
}

</style>
