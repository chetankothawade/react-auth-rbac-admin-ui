import http from "../utils/http";

const moduleService = {
    /* -------------------------------------------------------------
       LIST MODULES  (with optional parentId)
       ------------------------------------------------------------- */
    list: (parentId = null, params = {}) => {
        const query = new URLSearchParams(params).toString();
        const url = parentId
            ? `/modules/${parentId}?${query}`
            : `/modules?${query}`;
        return http.get(url);
    },

    /* -------------------------------------------------------------
       GET SINGLE MODULE
       ------------------------------------------------------------- */
    get: (id) => {
        return http.get(`/modules/${id}`);
    },

    /* -------------------------------------------------------------
       CREATE MODULE
       ------------------------------------------------------------- */
    create: (data) => {
        return http.post(`/modules`, data);
    },

    /* -------------------------------------------------------------
       UPDATE MODULE
       ------------------------------------------------------------- */
    update: (id, data) => {
        const url =
            data.is_sub_module === "Y"
                ? `/modules/${id}?parentId=${data.parent_id}`
                : `/modules/${id}`;

        return http.put(url, data);
    },

    /* -------------------------------------------------------------
       DELETE MODULE
       ------------------------------------------------------------- */
    delete: (id) => {
        return http.delete(`/modules/${id}`);
    },

    /* -------------------------------------------------------------
       UPDATE STATUS (activate/inactivate)
       ------------------------------------------------------------- */
    updateStatus: (id, status) => {
        return http.put(`modules/${id}/active`, { status });
    },

    /* -------------------------------------------------------------
      GET  MODULE LIST
      ------------------------------------------------------------- */
    getList: () => {
        return http.get(`/modules/module/getList/`);
    },

};

export default moduleService;
