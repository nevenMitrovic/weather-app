<template>
    <div class="text-xl font-semibold text-secondary mb-4">
      {{ formatDate() }}
    </div>
</template>

<script setup lang="ts">
import formatDate from '@/utils/globalUtils'
</script>
