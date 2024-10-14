import { defineConfig } from "cypress";
import {installPlugin} from "@chromatic-com/cypress"

import compareSnapshotsPlugin from 'cypress-image-diff-js/plugin'
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installPlugin(on, config);
      compareSnapshotsPlugin(on, config);

    },
    experimentalStudio: true,
  },
});
