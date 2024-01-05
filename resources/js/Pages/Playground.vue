<script setup>
import { ref } from "vue";
import ToggleSwitch from "@/Shared/ToggleSwitch.vue";

let show = ref(false);
let dropdown;
const selected = ref('Short Answer');
const checked = ref(false);

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
    <div class="max-w-lg mx-auto">
        <section>
            <div class="border border-gray-700 p-4 mt-10">
                <div class="flex justify-between items-center">
                    <input type="text" placeholder="Write down a question." class="w-2/3 p-2">

                    <div class="relative text-gray-300 text-sm" ref="dropdown">
                        <button
                            @click.prevent="show = ! show"
                            class="border p-2 bg-gray-800 border-gray-700 w-32"
                        >
                            {{ selected }}
                        </button>

                        <ul v-show="show" class="absolute left-0 bg-gray-800 border border-gray-700 w-full mt-1">
                            <li class="cursor-pointer hover:bg-gray-600 p-2 border-b border-gray-700" @click.prevent="select('Short Answer')">Short Answer</li>
                            <li class="cursor-pointer hover:bg-gray-600 p-2" @click.prevent="select('Paragraph')">Paragraph</li>
                        </ul>
                    </div>
                </div>

                <input type="text" class="mt-4 border-b border-gray-700 bg-gray-900 text-sm text-gray-500 w-2/3" :value="selected" disabled>

                <footer class="mt-10 border-t border-gray-700 flex justify-end">
                    <div class="mt-4 flex space-x-5 divide-solid divide-x items-center">
                        <button class="text-xs py-1 px-4 bg-red-700 text-gray-300 rounded">Delete</button>

                        <div class="space-x-2 pl-4 flex">
                            <span class="text-xs">Required</span>

                            <ToggleSwitch @send="checked" />
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    </div>
</template>


