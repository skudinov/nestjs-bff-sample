export const fetch_h2_mock = (expected) => { return {
  setup: (opts) => {
  },
  fetch: (url) => {
    return Promise.resolve({json: () => expected});
  }
}};
