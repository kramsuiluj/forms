<script setup>
import FormHeader from "@/Shared/FormHeader.vue";
import FormOptions from "@/Shared/FormOptions.vue";
import FormOption from "@/Shared/FormOption.vue";
import FormFieldsContainer from "@/Shared/FormFieldsContainer.vue";
import { useFormStore } from "@/stores/formStore.js";
import IconText from "@/Shared/Icons/IconText.vue";
import IconTextarea from "@/Shared/Icons/IconTextarea.vue";
import IconImage from "@/Shared/Icons/IconImage.vue";
import IconDate from "@/Shared/Icons/IconDate.vue";
import IconEmptyBox from "@/Shared/Icons/IconEmptyBox.vue";
import IconUpArrow from "@/Shared/Icons/IconUpArrow.vue";
import IconDownArrow from "@/Shared/Icons/IconDownArrow.vue";
import IconOnHover from "@/Shared/Icons/IconOnHover.vue";
import { useCountStore } from "@/stores/countStore.js";
import FormField from "@/Shared/FormField.vue";
import {ref} from "vue";

const form = useFormStore();
const fieldActions = useCountStore();
const opened = true;
let activeField = ref();

function setActive(field) {
    activeField.value = field;
}
</script>

<template>
    <FormHeader>
        <template #title>
            Example Questionaire
        </template>

        <template #description>
            This is an example of a form description.
        </template>
    </FormHeader>

    <FormOptions>
        <FormOption @click="form.addField('text')">
            <IconText fill="white" />
        </FormOption>

        <FormOption>
            <IconTextarea fill="white" />
        </FormOption>

        <FormOption @click="form.addField('image')">
            <IconImage fill="white" />
        </FormOption>

        <FormOption @click="form.addField('date')">
            <IconDate fill="white" />
        </FormOption>
    </FormOptions>

    <FormFieldsContainer v-if="fieldActions.count">
        <div class="space-y-4">
            <div
                v-for="field in form.form.fields"
                :key="field.id"
                class="flex items-center space-x-4"
            >
                <div class="mt-1" v-if="form.form.fields.length > 1">
                    <IconOnHover
                        class="hover:bg-gray-700"
                        v-if="field !== form.form.fields[0]"
                        @click="form.moveUp(field)"
                    >
                        <IconUpArrow class="w-4 h-4" />
                    </IconOnHover>

                    <IconOnHover
                        class="hover:bg-gray-700"
                        v-if="field !== form.form.fields[form.fieldsLastIndex]"
                        @click="form.moveDown(field)"
                    >
                        <IconDownArrow class="w-4 h-4" />
                    </IconOnHover>
                </div>

                <FormField :field="field" @click.prevent="setActive(field)" :active="activeField === field" />
<!--                @setActive="active"-->

            </div>
        </div>
    </FormFieldsContainer>

    <div class="grid place-items-center gap-2 mt-20" v-if="! form.form.fields.length">
        <p class="text-sm text-gray-300 italic">Your form is empty. Please place a field.</p>

        <IconEmptyBox class="text-gray-400 w-10" />
    </div>
</template>
