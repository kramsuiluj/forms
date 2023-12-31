import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFieldStore = defineStore('fields', () => {
    const fields = ref([]);

    const tempFields = ref({
        previous: {},
        current: {},
        next: {}
    });

    const fieldsCount = computed(() => fields.value.length);
    const fieldsLastIndex = computed(() => fields.value.length - 1);

    let previousFieldIndex = 0;
    let currentFieldIndex = 0;
    let nextFieldIndex = 0;

    function moveDown(field) {
        if (field !== undefined) {
            if (field !== fields.value[fieldsCount]) {
                for (let i = 0; i < fieldsCount.value; i++) {
                    if (field === fields.value[i]) {
                        currentFieldIndex = i;
                        nextFieldIndex = i + 1;
                    }
                }

                tempFields.value.current = fields.value[currentFieldIndex];
                tempFields.value.next = fields.value[nextFieldIndex];

                fields.value[currentFieldIndex] = tempFields.value.next;
                fields.value[nextFieldIndex] = tempFields.value.current;

                tempFields.value.current = {};
                tempFields.value.next = {};
            }
        }
    }

    function moveUp(field) {
        if (field !== fields.value[0]) {
            for (let i = 0; i < fieldsCount.value; i++) {
                if (field === fields.value[i]) {
                    previousFieldIndex = i - 1;
                    currentFieldIndex = i;
                }
            }

            tempFields.value.previous = fields.value[previousFieldIndex];
            tempFields.value.current = fields.value[currentFieldIndex];

            fields.value[previousFieldIndex] = tempFields.value.current;
            fields.value[currentFieldIndex] = tempFields.value.previous;
        }
    }

    return {
        fields,
        tempFields,
        previousFieldIndex,
        currentFieldIndex,
        nextFieldIndex,
        fieldsCount,
        fieldsLastIndex,
        moveDown,
        moveUp
    };
});
