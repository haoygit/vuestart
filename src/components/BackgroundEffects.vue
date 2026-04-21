<script setup lang="ts"></script>

<template>
  <div class="doc-bg"></div>
</template>

<style scoped>
.doc-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: #fcfcfc;
  /* 极淡的点状背景，模拟纸张印刷感 */
  background-image: radial-gradient(#e5e6eb 0.5px, transparent 0.5px);
  background-size: 24px 24px;
  pointer-events: none;
}
</style>
