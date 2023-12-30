<template>
    <header class="max-w-xl mx-auto">
        <section class="mt-6 border border-gray-700 rounded-lg p-3 bg-gray-800 space-y-4">
            <h2 class="font-semibold text-2xl">
                <slot name="title" />
            </h2>

            <p>
                <slot name="description" />
            </p>
        </section>
    </header>
</template>
