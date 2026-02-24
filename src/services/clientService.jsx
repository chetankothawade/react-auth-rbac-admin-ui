import http from "../utils/http";

const clientService = {
  /**
   * List clients with filters & pagination
   * GET /clients
   */
  list: (params = {}) => {
    return http.get("clients", { params });
  },

  /**
   * Create a new client
   * POST /clients
   */
  create: (data) => {
    return http.post("clients", data);
  },

  /**
   * Export clients
   * GET /clients/export
   */
  export: (filter) => {
    return http.get("clients/export", {
      params: { filter },  // not range
      responseType: "blob",
    });
  },

  /**
   * Import clients (CSV upload)
   * POST /clients/import
   */
  import: (formData) => {
    return http.post("clients/import", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  /**
   * Get list for dropdown (lightweight)
   * GET /clients/list
   */
  dropdownList: () => {
    return http.get("clients/list");
  },

  /**
   * Fetch import logs
   * GET /clients/import/logs
   */
  importLogs: (params = {}) => {
    return http.get("clients/import/logs", { params });
  },

  /**
   * Get a single client by UUID
   * GET /clients/{uuid}
   */
  get: (uuid) => {
    return http.get(`clients/${uuid}`);
  },

  /**
   * Update personal details
   * PUT /clients/{uuid}/personal
   */
  updatePersonal: (uuid, data) => {
    return http.put(`clients/${uuid}/personal`, data);
  },

  /**
   * Update company details
   * PUT /clients/{uuid}/company
   */
  updateCompany: (uuid, data) => {
    return http.put(`clients/${uuid}/company`, data);
  },

  /**
   * Update contact info
   * PUT /clients/{uuid}/contact
   */
  updateContact: (uuid, data) => {
    return http.put(`clients/${uuid}/contact`, data);
  },

  /**
   * Update banking info
   * PUT /clients/{uuid}/banking
   */
  updateBanking: (uuid, data) => {
    return http.put(`clients/${uuid}/banking`, data);
  },

  /**
   * Update notes
   * PUT /clients/{uuid}/notes
   */
  updateNotes: (uuid, data) => {
    return http.put(`clients/${uuid}/notes`, data);
  },

  /**
   * Update active/inactive status
   * PUT /clients/{uuid}/active
   */
  updateStatus: (uuid, status) => {
    return http.put(`clients/${uuid}/active`, { status });
  },

  /**
   * Delete a client
   * DELETE /clients/{uuid}
   */
  delete: (uuid) => {
    return http.delete(`clients/${uuid}`);
  },

  /**
  * Get countries list
  * GET /countries
  */
  countryList: () => {
    return http.get(`countries`);
  },

};

export default clientService;
