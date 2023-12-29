import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormStore = defineStore('form', () => {
    const form = ref({
        title: "Untitled Form",
        description: "Write something to describe this form.",
        fields: []
    });

    function addField(type) {
        if (type === 'text') {
            form.value.fields.push({
                type: 'text',
                tag: `<input type="text" class="p-2 w-full rounded-lg">`
            })
        }
    }

    function removeField(field) {
        form.value.fields.pop(field);
    }

    return { form, addField, removeField };
});
