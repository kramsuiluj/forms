<template>
    <header class="max-w-xl mx-auto">
        <section class="border mt-6 rounded-lg p-3 bg-gray-800 space-y-4">
            <h2 class="font-semibold text-2xl">Examples Form</h2>

            <p>
                This is a form description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti est id labore quaerat, sint suscipit.
            </p>
        </section>
    </header>

    <section class="max-w-xl mx-auto">
        <div class="fixed right-56 mt-20 border p-3 rounded-lg">
            <div class="flex flex-col space-y-3">
                <button class="border px-2 text-sm rounded-lg bg-gray-800">Text</button>
                <button class="border px-2 text-sm rounded-lg bg-gray-800">Textarea</button>
                <button class="border px-2 text-sm rounded-lg bg-gray-800">Image</button>
                <button class="border px-2 text-sm rounded-lg bg-gray-800">Date</button>
            </div>
        </div>
    </section>

    <main class="max-w-xl mx-auto border mt-4 bg-gray-800 rounded-lg p-3">
        <section>
            <p>Your form is empty.</p>
        </section>

        <section>
            <input type="text" class="p-2 rounded-lg w-full">
        </section>
    </main>
</template>
<script setup>
</script>
