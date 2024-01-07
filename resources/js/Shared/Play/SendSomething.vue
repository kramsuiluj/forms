<script setup>
import { ref } from "vue";

const emit = defineEmits(['send']);
const something = ref('Something has been sent!');

function send() {
    emit('send', something);
}
</script>

<template>
    <span @click.prevent="send">Send Something</span>
</template>
