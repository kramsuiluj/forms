import { defineStore } from "pinia";
import {ref} from "vue";

export const useFieldStore = defineStore('field.store', () => {
    const defaultForm = ref({
        title: "Untitled Form",
        description: "Write something to describe this form.",
        fields: []
    });

    return { defaultForm };
});
