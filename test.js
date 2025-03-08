import { printResult } from "./output.js";

const main = () => {
  const FOO = [1, 2, 3];
  const BAR = [4, 5, 6];
  const BAZ = [7, 8, 9];

  const result = [...FOO, ...BAR, ...BAZ];
  printResult(result);
};
main();
