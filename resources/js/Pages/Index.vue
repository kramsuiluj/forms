<script setup>
import FormHeader from "@/Shared/FormHeader.vue";
import FormOptions from "@/Shared/FormOptions.vue";
import FormOption from "@/Shared/FormOption.vue";
import FormFieldsContainer from "@/Shared/FormFieldsContainer.vue";
import { useFormStore } from "@/stores/formStore.js";

const { form, addField, removeField } = useFormStore();
const fields = form.fields;
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
        <FormOption @click="addField('text')">Text</FormOption>
        <FormOption>Textarea</FormOption>
        <FormOption>Image</FormOption>
        <FormOption>Date</FormOption>
    </FormOptions>

    <FormFieldsContainer>
        <template #message v-if="! fields.length">
            <p class="text-sm text-gray-300 italic">Your form is empty. Please place a field.</p>
        </template>

        <div class="space-y-2">
            <div
                v-if="fields"
                v-for="field in fields"
                :key="field"
                class="flex"
            >
                <div v-html="field.tag" class="w-full" />

                <button class="ml-5" @click="removeField(field)">&#x00D7;</button>
            </div>
        </div>
    </FormFieldsContainer>
</template>
