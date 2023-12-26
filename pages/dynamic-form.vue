<script lang="ts" setup>
const store = useOptionsStore();
onMounted(() => {
  store.init();
});

async function atSubCategoryChange() {
  await store.getProperties();
  // console.log();
}

function handleSubmit() {
  store.createReport();
}
</script>

<template>
  <main>
    <section class="alley" v-if="store.isActionSafe">
      <form
        action=""
        method="POST"
        class="flex flex-col items-center justify-center"
        @submit.prevent="handleSubmit"
      >
        <select name="" id="" class="w-80" v-model="store.options.category">
          <option value="" selected></option>
          <option
            v-for="option in store.options.cats.categories"
            :value="option"
          >
            {{ option.name }}
          </option>
        </select>

        <select
          name=""
          id=""
          class="w-80"
          @change="atSubCategoryChange"
          v-model="store.options.subcategory"
          :disabled="store.options.category === ''"
        >
          <option
            v-for="option in store.options.category.children"
            :value="option"
          >
            {{ option.name }}
          </option>
        </select>

        <div v-if="store.semaphore.isPropertiesLoading">loading.....</div>
        <div class="" v-else>
          <div class="" v-for="property in store.options.properties">
            <h2>{{ property.name }}</h2>
            <Combobox v-model="property.selected">
              <ComboboxInput @change="" :displayValue="(p) => p.name">
              </ComboboxInput>

              <ComboboxOptions>
                <ComboboxOption
                  v-for="option in property.options"
                  :value="option"
                >
                  {{ option }}
                </ComboboxOption>
              </ComboboxOptions>
              <div class="" v-if="property.selected.name === 'Other'">
                <input
                  type="text"
                  placeholder="Enter the custom value please"
                  class="w-80"
                  v-model="property.selected.value"
                />
              </div>
            </Combobox>
          </div>
        </div>

        <button
          type="submit"
          class="mt-10 bg-black text-white p-5 font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="store.options.subcategory === ''"
        >
          Submit
        </button>
      </form>
    </section>
    <!-- <div>c: {{ store.options.subcategory }}</div> -->
    <section class="alley" v-if="store.reports.isShown">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in store.reports.data">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style></style>
