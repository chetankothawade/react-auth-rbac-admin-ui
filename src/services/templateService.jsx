// src/services/templateService.js

import http from "../utils/http";

const templateService = {
  /**
   * Get list of templates with pagination, search, sort
   * @param {Object} params - page, search, sortedField, sortedBy
   */
  list: (params = {}) => {
    return http.get(`templates?${new URLSearchParams(params).toString()}`);
  },

  /**
   * Get single template by UUID
   * @param {String} uuid
   */
  get: (uuid) => {
    return http.get(`templates/${uuid}`);
  },

  /**
   * Create a new template
   * @param {Object} payload - form data
   */
  create: (payload) => {
    return http.post("templates", payload);
  },

  /**
   * Update template by UUID
   * @param {String} uuid 
   * @param {Object} payload 
   */
  update: (uuid, payload) => {
    return http.put(`templates/${uuid}`, payload);
  },

  /**
   * Delete template by UUID
   * @param {String} uuid
   */
  delete: (uuid) => {
    return http.delete(`templates/${uuid}`);
  },

  /**
   * Update template active/inactive status
   * @param {String} uuid
   * @param {String} status - "active" | "inactive"
   */
  updateStatus: (uuid, status) => {
    return http.put(`templates/${uuid}/active`, { status });
  },
};

export default templateService;
