/// <reference path="../.astro/types.d.ts" />

// Matomo Analytics types
declare global {
  interface Window {
    _paq: any[][];
  }
  
  var _paq: any[][];
}

export {};