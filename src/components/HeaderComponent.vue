<template>
  <header class="text-gray-600 body-font">
    <div class="bg-indigo-500">
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <RouterLink to="/" class="mr-5 hover:text-gray-900">Home</RouterLink>
        <RouterLink to="/about" class="mr-5 hover:text-gray-900"
          >About</RouterLink
        >
        <RouterLink to="/SignUp" class="mr-5 hover:text-gray-900"
          >SignUp</RouterLink
        >
        <RouterLink to="/ItemList" class="mr-5 hover:text-gray-900"
          >Items</RouterLink
        >
        <RouterLink to="/CartItems" class="mr-5 hover:text-gray-900"
          >Cart</RouterLink
        >
      </nav>
      <form @submit.prevent="logout" action="#" method="POST">
        <button>LogOut</button>
      </form>
    </div>
  </header>
</template>

<script>
import { useCookies } from "vue3-cookies";
export default {
  methods: {
    logout: function () {
      const { cookies } = useCookies();
      cookies.remove("id");
      this.$router.push({ path: "/ItemList" });
    },
  },
};
</script>
