import { defineStore } from "pinia";
import { useFieldStore } from "@/stores/fieldStore.js";
import { useFormStore } from "@/stores/formStore.js";
import {computed} from "vue";

export const useCountStore = defineStore('fields.count', () => {
    const fieldStore = useFormStore();

    const count = computed(() => fieldStore.form.fields.length);

    return { count };
});
