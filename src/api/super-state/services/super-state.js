'use strict';

/**
 * super-state service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::super-state.super-state');
