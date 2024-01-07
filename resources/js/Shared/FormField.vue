<script setup>
import { ref } from "vue";
import ToggleSwitch from "@/Shared/ToggleSwitch.vue";
import IconDownArrow from "@/Shared/Icons/IconDownArrow.vue";
import IconDelete from "@/Shared/Icons/IconDelete.vue";
import { useFormStore } from "@/stores/formStore.js";

const form = useFormStore();
let show = ref(false);
let dropdown;
const selected = ref('Short Text');

defineProps({ field: Object, active: { type: Boolean, default: false } });

function select(option) {
    selected.value = option;

    if (show.value) {
        show.value = false;
    }
}

document.addEventListener('click', (event) => {
    if (show.value) {
        if (!dropdown.contains(event.target)) {
            show.value = false;
        }
    }
})
</script>

<template>
    <div class="w-full cursor-pointer"  ref="fieldContainer">
        <section>
            <div class="border-gray-700 p-4 rounded" :class="{'border border-l-8': active, 'border-b-2': ! active}">
                <div class="flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="Write down a question."
                        class="w-2/3 p-2 text-black"
                        :class="{
                            'w-full': ! active
                        }"
                    >

                    <div class="relative text-gray-300 text-sm" ref="dropdown" v-if="active">
                        <button
                            @click.prevent="show = ! show"
                            class="border p-2 bg-gray-800 border-gray-700 w-32 font-semibold flex items-end justify-between"
                        >
                            {{ selected }}

                            <IconDownArrow class="w-4 h-4 ml-2"/>
                        </button>

                        <ul v-show="show" class="absolute left-0 bg-gray-800 border border-gray-700 w-full mt-1">
                            <li class="cursor-pointer hover:bg-gray-600 p-2 border-b border-gray-700" @click.prevent="select('Short Text')">Short Answer</li>
                            <li class="cursor-pointer hover:bg-gray-600 p-2" @click.prevent="select('Paragraph')">Paragraph</li>
                        </ul>
                    </div>
                </div>

                <input
                    type="text"
                    class="mt-4 border-b border-gray-700 bg-gray-900 text-sm text-gray-500 w-2/3"
                    :value="selected"
                    :class="{
                        'w-full': ! active
                    }"
                    disabled
                >

                <footer class="mt-10 border-t border-gray-700 flex justify-end" v-if="active">
                    <div class="mt-4 flex space-x-5 divide-solid divide-x items-center">
                        <button @click.prevent="form.removeField(field)">
                            <IconDelete class="w-5 h-5 text-red-950" />
                        </button>

                        <div class="space-x-2 pl-4 flex">
                            <span class="text-xs">Required</span>

                            <ToggleSwitch />
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    </div>
</template>
