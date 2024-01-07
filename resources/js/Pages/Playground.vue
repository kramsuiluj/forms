<script setup>
import SendSomething from "@/Shared/Play/SendSomething.vue";
import { ref } from "vue";

const greeting = ref('See if this changes.');

function listenToSend(message) {
    greeting.value = message.value;
    console.log(message.value);
}
</script>

<template>
    <SendSomething @send="listenToSend" />
    {{ greeting }}
</template>
