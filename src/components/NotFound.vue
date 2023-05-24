<template>
  <div class="grid">
    <div>
      <img src="@/assets/404.png" class="w-50" alt="Error 404" />
      <h1 class="fw-light fw-bold mt-2 mb-0">
        Sorry, page not found.
      </h1>
      <p>We can't seem to find the page you are looking for.</p>
      <button type="button" class="btn btn-sm btn-primary" @click="$router.go(-1)">
        &leftarrow; Back to
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.grid {
  display: grid;
  place-items: center;
  height: 100vh !important;
  width: 100%;
  text-align: center;
}
</style>
