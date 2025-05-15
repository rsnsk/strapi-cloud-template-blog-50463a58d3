'use strict';

console.log('✅ index.js is being executed');

const bootstrap = require("./bootstrap");

// ENV DEBUG
console.log('🧪 LLM ENV DEBUG (from index.js):', {
  LLM_TRANSLATOR_LLM_API_KEY: process.env.LLM_TRANSLATOR_LLM_API_KEY,
  STRAPI_ADMIN_LLM_TRANSLATOR_LLM_BASE_URL: process.env.STRAPI_ADMIN_LLM_TRANSLATOR_LLM_BASE_URL,
  STRAPI_ADMIN_LLM_TRANSLATOR_LLM_MODEL: process.env.STRAPI_ADMIN_LLM_TRANSLATOR_LLM_MODEL,
});

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap,
};
