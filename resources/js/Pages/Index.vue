<script setup>
import FormHeader from "@/Shared/FormHeader.vue";
import FormOptions from "@/Shared/FormOptions.vue";
import FormOption from "@/Shared/FormOption.vue";
import FormFieldsContainer from "@/Shared/FormFieldsContainer.vue";
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
        <FormOption>Text</FormOption>
        <FormOption>Textarea</FormOption>
        <FormOption>Image</FormOption>
        <FormOption>Date</FormOption>
    </FormOptions>

    <FormFieldsContainer>
        <div></div>
    </FormFieldsContainer>
</template>
