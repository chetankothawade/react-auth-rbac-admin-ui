// src/services/invoiceService.js

import http from "../utils/http";

const invoiceService = {
    /**
     * Get list of invoices with pagination, search, sort
     * @param {Object} params - page, search, sortedField, sortedBy
     */
    list: (params = {}) => {
        return http.get(`invoices?${new URLSearchParams(params).toString()}`);
    },

    /**
     * Get single template by UUID
     * @param {String} uuid
     */
    get: (uuid) => {
        return http.get(`invoices/${uuid}`);
    },

    /**
     * Create a new template
     * @param {Object} payload - form data
     */
    create: (payload) => {
        return http.post("invoices", payload);
    },

    /**
     * Update template by UUID
     * @param {String} uuid 
     * @param {Object} payload 
     */
    update: (uuid, payload) => {
        return http.put(`invoices/${uuid}`, payload);
    },

    updatePayment: (uuid, payload) => {
        return http.put(`invoices/${uuid}/payment`, payload);
    },

    /**
     * Delete template by UUID
     * @param {String} uuid
     */
    delete: (uuid) => {
        return http.delete(`invoices/${uuid}`);
    },

    /**
     * Update template active/inactive status
     * @param {String} uuid
     * @param {String} status - "active" | "inactive"
     */
    updateStatus: (uuid, status) => {
        return http.put(`invoices/${uuid}/active`, { status });
    },

    templateList: () => {
        return http.get(`templates/list`);
    },

    currencyList: () => {
        return http.get(`currencies/list`);
    },

    clientList: () => {
        return http.get(`clients/list`);
    },

    /**
     * Download invoice PDF by UUID
     * @param {String} uuid
     */
    downloadPdf: (uuid) => {
        return http.get(`invoices/${uuid}/pdf`, {
            responseType: "blob",   // IMPORTANT!
        });
    },

    sendEmail: (uuid) => {
        return http.post(`invoices/${uuid}/send-email`);
    },
};

export default invoiceService;
