/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE?: string;
  readonly DFX_NETWORK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const process: {
  env: {
    DFX_NETWORK?: string;
    NODE_ENV?: string;
    CANISTER_ID_BACKEND?: string;
    BASE_URL?: string;
    STORAGE_GATEWAY_URL?: string;
    II_URL?: string;
  };
};
