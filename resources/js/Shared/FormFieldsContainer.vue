<template>
    <main class="max-w-xl mx-auto border-gray-700 mt-4 rounded-lg p-3">
        <section>
            <slot name="message" />
        </section>

        <section>
            <slot />
        </section>
    </main>
</template>
