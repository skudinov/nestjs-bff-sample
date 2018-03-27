
let _expected;
export const mock = {
  // aux functions
  expect: (expected) => _expected = expected,
  // mocked functions
  setup: () => {
  },
  fetch: (url) => Promise.resolve({json: () => _expected}),
};

