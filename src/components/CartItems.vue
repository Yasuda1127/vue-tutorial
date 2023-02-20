<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
      <div class="mb-6 sm:mb-10 lg:mb-16">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          Your Cart
        </h2>
      </div>

      <div
        class="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8"
      >
        <!-- product - start -->
        <div class="py-5 sm:py-8">
          <div
            class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5"
            v-for="(item, index) in carts"
            :key="item.id"
          >
            <div class="sm:-my-2.5">
              <a
                href="#"
                class="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative"
              >
                <img
                  :src="item.imageUrl"
                  loading="lazy"
                  alt="Photo by Thái An"
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>
            </div>

            <div class="flex flex-col justify-between flex-1">
              <div>
                <a
                  href="#"
                  class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1"
                  >{{ item.name }}</a
                >

                <span class="block text-gray-500">{{ item.category }}</span>
                <span class="block text-gray-500">{{ item.content }}</span>
              </div>

              <div>
                <span class="block text-gray-800 md:text-lg font-bold mb-1">{{
                  item.price
                }}</span>

                <span class="flex items-center text-gray-500 text-sm gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  In stock
                </span>
              </div>
            </div>

            <div
              class="w-full sm:w-auto flex justify-between border-t sm:border-none pt-4 sm:pt-0"
            >
              <div class="flex flex-col items-start gap-2">
                <div class="w-20 h-12 flex border rounded overflow-hidden">
                  <div
                    type="number"
                    value="1"
                    class="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2"
                  >
                    {{ counter }}
                  </div>

                  <div class="flex flex-col border-l divide-y">
                    <button
                      v-on:click="clickHandlerNext(index)"
                      class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100"
                    >
                      +
                    </button>
                    <button
                      v-on:click="clickHandlerPrev"
                      class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100"
                    >
                      -
                    </button>
                  </div>
                </div>

                <button
                  class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100"
                  @click.prevent="deleteItem"
                  :key="item.id"
                >
                  Delete
                </button>
              </div>

              <div class="pt-3 sm:pt-2 ml-4 md:ml-8 lg:ml-16">
                <span class="block text-gray-800 md:text-lg font-bold">{{
                  item.price
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- product - end -->
      </div>

      <!-- totals - start -->
      <div class="flex flex-col items-end gap-4">
        <div class="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
          <div class="space-y-1">
            <div class="flex justify-between text-gray-500 gap-4">
              <span>Subtotal</span>
              <span>$129.99</span>
            </div>

            <div class="flex justify-between text-gray-500 gap-4">
              <span>Shipping</span>
              <span>$4.99</span>
            </div>
          </div>

          <div class="border-t pt-4 mt-4">
            <div class="flex justify-between items-start text-gray-800 gap-4">
              <span class="text-lg font-bold">Total</span>

              <span class="flex flex-col items-end">
                <span class="text-lg font-bold">$134.98 USD</span>
                <span class="text-gray-500 text-sm">including VAT</span>
              </span>
            </div>
          </div>
        </div>

        <button
          class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
        >
          Check out
        </button>
      </div>
      <!-- totals - end -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      carts: "carts",
      item: "items",
      // userId: "userId",
      id: "id",
      counter: 0,
    };
  },
  mounted() {
    this.cartItems(),
      function () {
        axios
          .get("http://localhost:8000/carts/")
          .then((response) => (this.carts = response.data));
      };
  },
  methods: {
    cartItems: function () {
      const user = document.cookie;
      const userId = user.slice(3);
      // console.log(userId);
      const vm = this;
      axios
        .get(`http://localhost:8000/carts/` + "?" + "userId" + "=" + userId)
        .then((response) => {
          // console.log(response);
          vm.carts = response.data;
          // console.log(vm.carts);
        });
    },
    deleteItem: function (index) {
      this.cart.splice(index,1)
    },

    // deleteItem: function () {
    //   const user = document.cookie;
    //   const userId = user.slice(3);
    //   // console.log(userId);
    //   const vm = this;
    //   axios
    //     .delete(`http://localhost:8000/carts/${this.$route.params.id}`)
    //     .then((response) => {
    //       console.log(response.data);
    //       let item = response.data[0];
    //     });
    //   //   fetch(`http://localhost:8000/carts/${this.$route.params}`, {
    //   //     method: "DELETE",
    //   // });
    // },

    clickHandlerNext: function (event) {
      this.counter++;
    },
    clickHandlerPrev: function (event) {
      this.counter--;
    },
  },
};
</script>
