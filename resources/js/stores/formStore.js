import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useFieldStore } from "@/stores/fieldStore.js";
import { FormFieldTemplates } from "@/Shared/templates/FormFieldTemplates.js";

export const useFormStore = defineStore('form', () => {
    const fieldStore = useFieldStore();

    const form = ref({
        title: "Untitled Form",
        description: "Write something to describe this form.",
        fields: []
    });

    if (fieldStore.fields) {
        form.value.fields = fieldStore.fields;
    }

    function addField(type) {
        if (type === 'text') {
            fieldStore.fields.push({
                id: form.value.fields.length + 1,
                type: 'text',
                tag: FormFieldTemplates.text
            })
        }

        if (type === 'image') {
            fieldStore.fields.push({
                id: form.value.fields.length + 1,
                type: 'file',
                tag: FormFieldTemplates.image
            })
        }

        if (type === 'date') {
            fieldStore.fields.push({
                id: form.value.fields.length + 1,
                type: 'date',
                tag: FormFieldTemplates.date
            })
        }

        console.log(fieldStore.fields);
    }

    function removeField(field) {
        let fieldIndex;

        for (let i = 0; i < fieldStore.fieldsCount; i++) {
            if (field === fieldStore.fields[i]) {
                fieldIndex = i;
            }
        }

        fieldStore.fields.splice(fieldIndex, 1);
    }

    return { form, addField, removeField, fieldStore };
});
