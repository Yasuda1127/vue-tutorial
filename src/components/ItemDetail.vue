<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12" v-bind:key="item.id">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- images - start -->
        <div class="grid lg:grid-cols-5 gap-4">
          <div
            class="lg:col-span-4 bg-gray-100 rounded-lg overflow-hidden relative"
          >
            <img
              :src="item.imageUrl"
              loading="lazy"
              alt="Photo by Himanshu Dewangan"
              class="w-full h-full object-cover object-center"
            />

            <span
              class="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5"
              >sale</span
            >

            <a
              href="#"
              class="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 border text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 absolute right-4 top-4 px-3.5 py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- images - end -->

        <!-- content - start -->
        <div class="md:py-8">
          <!-- name - start -->
          <div class="mb-2 md:mb-3">
            <span class="inline-block text-gray-500 mb-0.5">Fancy Brand</span>
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
              Pullover with pattern
            </h2>
          </div>
          <!-- name - end -->

          <!-- rating - start -->
          <div class="flex items-center gap-3 mb-6 md:mb-10">
            <div
              class="h-7 flex items-center bg-indigo-500 text-white rounded-full gap-1 px-2"
            >
              <span class="text-sm">4.2</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>

            <span class="text-gray-500 text-sm transition duration-100"
              >56 ratings</span
            >
          </div>
          <!-- rating - end -->

          <!-- price - start -->
          <div class="mb-4">
            <div class="flex items-end gap-2">
              <span class="text-gray-800 text-xl md:text-2xl font-bold">{{
                item.price
              }}</span>
              <span class="text-red-500 line-through mb-0.5">{{
                item.price
              }}</span>
            </div>

            <span class="text-gray-500 text-sm">incl. VAT plus shipping</span>
          </div>
          <!-- price - end -->

          <!-- shipping notice - start -->
          <div class="flex items-center text-gray-500 gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>

            <span class="text-sm">2-4 day shipping</span>
          </div>

          <div class="w-20 h-12 flex border rounded overflow-hidden">
            <div
              type="number"
              value="1"
              class="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2"
            >
              {{ count }}
            </div>

            <div class="flex flex-col border-l divide-y">
              <button
                v-on:click="clickHandlerNext"
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
          <!-- shipping notice - end -->

          <!-- buttons - start -->
          <div class="flex gap-2.5">
            <!-- <RouterLink :to="`/cartItems/`"> -->
            <p>{{ priceCalc }}</p>
            <form
              method="POST"
              @submit.prevent="cartAdd"
              class="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              <button>Add to cart</button>
            </form>
            <!-- </RouterLink> -->
            <a
              href="#"
              class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >Buy now</a
            >
          </div>
          <!-- buttons - end -->
        </div>
        <!-- content - end -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { Item } from "../../types/type";

export default {
  data() {
    return {
      item: "items",
      userId: Number(""),
      count: 1,
      price: "price",
    };
  },
  mounted() {
    this.itemDetail();
  },
  methods: {
    itemDetail: function () {
      axios
        .get(`http://localhost:8000/items/${this.$route.params.id}`)
        .then((response) => {
          this.item = response.data;
          this.priceCalc = this.item.prices
          console.log(this.item.prices);
        });
    },
    cartAdd: function () {
      // const vm = this;
      const user = document.cookie;
      const userId = user.slice(3);
      console.log(userId);
      const carts = {
        userId: Number(userId),
        imageUrl: this.item.imageUrl,
        name: this.item.name,
        category: this.item.category,
        flavor: this.item.flavor,
        price: this.item.price,
        priceCalc: this.priceCalc,
        description: this.item.description,
        content: this.item.content,
        countity: this.count,
        deleted: false,
      };

      axios.post(`http://localhost:8000/carts/`, carts).then((response) => {
        let u = response.data;
        // console.log(u);
        this.$router.push({ path: "/CartItems" });
      });
    },
    clickHandlerNext: function () {
      this.count++;
      console.log(this.item.prices);
      this.priceCalc = this.priceCalc + this.item.prices;
      // this.item.priceCalc = this.item.prices * this.count;
      // console.log(this.item.priceCalc);
    },
    clickHandlerPrev: function () {
      // this.counter--;
      if (this.count > 1) {
        this.count--;
        console.log(this.item.prices);
        this.priceCalc = this.priceCalc - this.item.prices;
        // this.item.priceCalc = this.item.prices * this.count;
        // console.log(this.item.priceCalc);
      }
    },
  },
};
</script>
