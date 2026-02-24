const ClientFormSkeleton = ({ fields = 6 }) => {
  return (
    <div className="p-3">
      {/* Tabs */}
      <div className="mb-4" style={{ display: "flex", gap: "16px" }}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="skeleton"
            style={{ width: "120px", height: "36px", borderRadius: "20px" }}
          />
        ))}
      </div>

      {/* Two-column form fields */}
      <div className="row">
        {[...Array(fields)].map((_, i) => (
          <div key={i} className="col-md-6 mb-3">
            {/* Label */}
            <div
              className="skeleton mb-2"
              style={{ width: "120px", height: "14px" }}
            />

            {/* Input */}
            <div
              className="skeleton"
              style={{ width: "100%", height: "42px", borderRadius: "4px" }}
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="d-flex justify-content-end mt-4">
        <div
          className="skeleton"
          style={{ width: "160px", height: "42px", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
};

export default ClientFormSkeleton;
