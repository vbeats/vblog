<template>
  <Layout>
    <template #home-footer>
      <div class="footer">
        Copyright © 2021-{{ new Date().getFullYear() }} 码步鱼
        <a href="https://beian.miit.gov.cn/" target="_blank">
          鲁ICP备2021022897号-5
        </a>
      </div>
    </template>
  </Layout>
</template>

<script>
import { defineComponent } from "vue";
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;

export default defineComponent({
  components: { Layout },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="stylus">
.footer {
  width: 100vw;
  display: flex;
  justify-content: center;

  a {
    margin-left: 12px;
    text-decoration: none;
    cursor: pointer;
    color: var(--c-text);
  }
}
</style>