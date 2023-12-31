import { defineStore } from "pinia";
import { useFieldStore } from "@/stores/fieldStore.js";
import {computed} from "vue";

export const useCountStore = defineStore('fields.count', () => {
    const fieldStore = useFieldStore();

    const count = computed(() => fieldStore.fields.length);

    return { count };
});
