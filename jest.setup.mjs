describe.suite = (suite, methods, userDescribe, timeout) => {
  const wrappedDescribe = () => {
    for (const exported in methods) {
      const func = methods[exported];
      if (typeof func !== "function") continue;
      describe(`${func.testname || func.name}`, () => {
        userDescribe(func);
      });
    }
  };

  return describe(`\n${suite}`, wrappedDescribe, timeout);
};
