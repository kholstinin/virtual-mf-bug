import routes from "virtual:routes";

import("./page").then(({ default: page }) => {
  console.log(page);
});

console.log(routes);
