<template>
  <div @contextmenu="handleRightClick">
    <!-- header-section start -->
    <HeaderSection msg="Header Component" />
    <!-- header-menu design start -->

    <!-- Middle Dynamic pages start -->
    <router-view class="view"></router-view>

    <!-- Midlle Dynamic Content End-->
    <FooterSection msg="Footer Component" :isHome="footer.isHome" />
  </div>
</template>
<script>
import HeaderSection from "./components/themes/HeaderSection.vue";
import FooterSection from "./components/themes/FooterSection.vue";

export default {
  name: "App",
  data() {
    return {
      footer: {
        isHome: false,
      },
      show_header: false,
    };
  },
  components: {
    HeaderSection,
    FooterSection,
  },
  methods: {
    handleRightClick(event) {
      if (process.env.NODE_ENV != "development") {
        event.preventDefault();
      }
    },
  },

};
</script>

