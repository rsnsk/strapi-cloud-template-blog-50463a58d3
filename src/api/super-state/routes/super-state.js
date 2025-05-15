'use strict';

/**
 * super-state router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::super-state.super-state');
