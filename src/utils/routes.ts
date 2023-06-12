export const ROUTES = {
  INDEX: "/",
  AUTH: {
    INDEX: "/login"
  },
  ADMIN: {
    INDEX: "admin",
    USERS: "admin/users",
    TESTS: "admin/tests",
    NEW_TEST: "admin/new-test",
    TEST_DETAILS: "admin/tests/:testId"
  },
  CLIENT: {
    INDEX: "user",
    TESTS: "user/tests"
  }
};
