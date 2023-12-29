<template>
    <main class="max-w-xl mx-auto border mt-4 bg-gray-800 rounded-lg p-3">
        <section>
            <slot name="message" />
        </section>

        <section>
            <slot />
        </section>
    </main>
</template>
