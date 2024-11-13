<template>
    <div class="text-base lg:text-xl font-semibold text-primary mb-4">
      {{ formatDate() }}
    </div>
</template>

<script setup lang="ts">
import formatDate from '@/utils/index'
</script>
