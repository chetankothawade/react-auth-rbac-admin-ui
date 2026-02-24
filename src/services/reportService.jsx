import http from "../utils/http";

const reportService = {
  summary(params = {}) {
    return http.get("/reports/invoice-status-matrix", {
      params,
    });
  },
};

export default reportService;
