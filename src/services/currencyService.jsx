// src/services/currencyService.js

import http from "../utils/http";

const currencyService = {
    /**
     * Get list of currencies with pagination, search, sort
     * @param {Object} params - page, search, sortedField, sortedBy
     */
    list: (params = {}) => {
        return http.get(`currencies?${new URLSearchParams(params).toString()}`);
    },

    /**
     * Get single template by UUID
     * @param {String} uuid
     */
    get: (uuid) => {
        return http.get(`currencies/${uuid}`);
    },

    /**
     * Create a new template
     * @param {Object} payload - form data
     */
    create: (payload) => {
        return http.post("currencies", payload);
    },

    /**
     * Update template by UUID
     * @param {String} uuid 
     * @param {Object} payload 
     */
    update: (uuid, payload) => {
        return http.put(`currencies/${uuid}`, payload);
    },

    /**
     * Delete template by UUID
     * @param {String} uuid
     */
    delete: (uuid) => {
        return http.delete(`currencies/${uuid}`);
    },

    /**
     * Update template active/inactive status
     * @param {String} uuid
     * @param {String} status - "active" | "inactive"
     */
    updateStatus: (uuid, status) => {
        return http.put(`currencies/${uuid}/active`, { status });
    },
};

export default currencyService;
