<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import Preview from "./components/Preview.vue";
import Options from "./components/Options.vue";
import useMainStore from "./stores/main";
import tinycolor from "tinycolor2";
import Header from "./components/Header.vue";

const i18n = useI18n();
const store = useMainStore();

const backgroundColor = computed(() =>
  tinycolor(`#${store.selectedStyleOptions.backgroundColor}`)
);

const backgroundColorStart = computed(() =>
  backgroundColor.value.darken(10).toHexString()
);

const backgroundColorEnd = computed(() =>
  backgroundColor.value.darken(6).toHexString()
);

watchEffect(() => (document.documentElement.lang = i18n.locale.value));
</script>

<template>
  <div class="app">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-preview">
      <Preview />
    </div>
    <div class="app-options">
      <Options />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: v-bind("backgroundColorStart");
  background: linear-gradient(
    0deg,
    v-bind("backgroundColorStart") 50%,
    v-bind("backgroundColorEnd") 100%
  );

  &-header,
  &-preview,
  &-options {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &-header {
    padding: 0 20px;
    max-width: 1000px;
  }

  &-options {
    flex-grow: 1;
    overflow: hidden;
  }
}
</style>
