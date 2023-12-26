// @ts-nocheck

import { defineStore } from "pinia";

export const useOptionsStore = defineStore("options", () => {
  const semaphore = ref({
    isFetching: false,
    isInitialised: false,
    isRequestError: false,
    isPropertiesLoading: false,
  });

  const options = ref({
    cats: {},
    category: "",
    subcategory: "",
    properties: [],
  });

  const isActionSafe = computed(() => {
    return (
      semaphore.value.isInitialised &&
      !semaphore.value.isFetching &&
      !semaphore.value.isRequestError
    );
  });

  const reports = ref({
    isShown: false,
    data: [],
  });

  async function init() {
    semaphore.value.isInitialised = true;
    try {
      semaphore.value.isFetching = true;
      const cats = await useBaseFetcher("get_all_cats");
      options.value.cats = cats.data;
      console.log(options.value.cats);

      semaphore.value.isFetching = false;
    } catch (error) {
      semaphore.value.isRequestError = true;
    }
  }

  async function getProperties() {
    semaphore.value.isPropertiesLoading = true;
    try {
      const properties = await useBaseFetcher(
        "properties?cat=" + options.value.subcategory.id
      );
      semaphore.value.isPropertiesLoading = false;
      options.value.properties = properties.data
        .map((property) => ({
          ...property,
          options: [...property.options, { name: "Other", id: 0, value: "" }],
          query: "",
        }))
        .map((property) => ({
          ...property,
          selected: property.options[0],
        }));
    } catch (error) {
      semaphore.value.isRequestError = true;
    }
  }

  // not usealble?
  async function getOptions(id: number) {
    try {
      const options = await useBaseFetcher("get-options-child/" + id);
      console.log(options.data);
    } catch (error) {
      semaphore.value.isRequestError = true;
    }
  }

  function createReport() {
    
    const report = {
      category: { name: "category", value: options.value.category.name },
      subcategory: {
        name: "subcategory",
        value: options.value.subcategory.name,
      },
      properties: options.value.properties.map((property) => ({
        name: property.name,
        value: property.selected.name === "Other" ? property.query : property.selected.name,
      })),
    };
    console.log(report);
    
    reports.value.data = [
      report.category,
      report.subcategory,
      ...report.properties,
    ];
    reports.value.isShown = true;
  }

  return {
    isActionSafe,
    semaphore,
    options,
    reports,
    init,
    getProperties,
    getOptions,
    createReport,
  };
});
