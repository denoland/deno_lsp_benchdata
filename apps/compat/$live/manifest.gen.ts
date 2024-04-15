// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$$0 from "./handlers/devPage.ts";
import * as $$$$1 from "./handlers/router.ts";
import * as $$$0 from "./loaders/secret.ts";
import * as $$$1 from "./loaders/state.ts";
import * as $$$$$$0 from "./sections/EmptySection.tsx";
import * as $$$$$$1 from "./sections/PageInclude.tsx";
import * as $$$$$$2 from "./sections/Slot.tsx";

const manifest = {
  "loaders": {
    "$live/loaders/secret.ts": $$$0,
    "$live/loaders/state.ts": $$$1,
  },
  "handlers": {
    "$live/handlers/devPage.ts": $$$$0,
    "$live/handlers/router.ts": $$$$1,
  },
  "sections": {
    "$live/sections/EmptySection.tsx": $$$$$$0,
    "$live/sections/PageInclude.tsx": $$$$$$1,
    "$live/sections/Slot.tsx": $$$$$$2,
  },
  "name": "$live",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;