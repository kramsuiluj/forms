import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { FormFieldTemplates } from "@/Shared/templates/FormFieldTemplates.js";
import { useFieldStore } from "@/stores/fieldStore.js";

export const useFormStore = defineStore('form', () => {
    const fieldStore = useFieldStore();

    // This is the state where I store my fields.
    const form = ref();

    if (!read()) {
        form.value = fieldStore.defaultForm;

        localStorage.setItem('form', JSON.stringify(form.value));
    }

    const tempFields = ref({
        previous: {},
        current: {},
        next: {}
    });

    let previousFieldIndex = 0;
    let currentFieldIndex = 0;
    let nextFieldIndex = 0;

    function moveDown(field) {
        if (field !== undefined) {
            if (field !== form.value.fields[fieldsCount]) {
                for (let i = 0; i < fieldsCount.value; i++) {
                    if (field === form.value.fields[i]) {
                        currentFieldIndex = i;
                        nextFieldIndex = i + 1;
                    }
                }

                tempFields.value.current = form.value.fields[currentFieldIndex];
                tempFields.value.next = form.value.fields[nextFieldIndex];

                form.value.fields[currentFieldIndex] = tempFields.value.next;
                form.value.fields[nextFieldIndex] = tempFields.value.current;

                tempFields.value.current = {};
                tempFields.value.next = {};
            }

            write();
        }
    }

    function moveUp(field) {
        if (field !== form.value.fields[0]) {
            for (let i = 0; i < fieldsCount.value; i++) {
                if (field === form.value.fields[i]) {
                    previousFieldIndex = i - 1;
                    currentFieldIndex = i;
                }
            }

            tempFields.value.previous = form.value.fields[previousFieldIndex];
            tempFields.value.current = form.value.fields[currentFieldIndex];

            form.value.fields[previousFieldIndex] = tempFields.value.current;
            form.value.fields[currentFieldIndex] = tempFields.value.previous;

            write();
        }
    }

    // Check if the localstorage has a key named "form".
    if (read()) {
        // If it does assign the value of the "form" from localstorage to the form state.
        form.value = read();

        // I check here if it was assigned, and yes it does, but it does not reflect in the web page.
        console.log(form.value);
    }

    const fieldsCount = computed(() => form.value.fields.length);
    const fieldsLastIndex = computed(() => form.value.fields.length - 1);

    function write() {
        localStorage.setItem('form', JSON.stringify(form.value));
    }

    function remove() {
        localStorage.removeItem('form');
    }

    function read() {
        return JSON.parse(localStorage.getItem('form'));
    }

    function addField(type) {
        if (type === 'text') {
            form.value.fields.push({
                id: form.value.fields.length + 1,
                type: 'text',
                tag: FormFieldTemplates.text
            })
        }

        if (type === 'image') {
            form.value.fields.push({
                id: form.value.fields.length + 1,
                type: 'file',
                tag: FormFieldTemplates.image
            })
        }

        if (type === 'date') {
            form.value.fields.push({
                id: form.value.fields.length + 1,
                type: 'date',
                tag: FormFieldTemplates.date
            })
        }

        if (read()) {
            remove();

            write();

            console.log(read());
        } else {
            write();

            console.log(read());
        }
    }

    function removeField(field) {
        let fieldIndex;

        for (let i = 0; i < form.value.fields.length; i++) {
            if (field === form.value.fields[i]) {
                fieldIndex = i;
            }
        }

        form.value.fields.splice(fieldIndex, 1);

        if (read()) {
            remove();

            write();

            console.log(read());
        }
    }

    return { form, addField, removeField, fieldStore, fieldsLastIndex, moveDown, moveUp };
});
