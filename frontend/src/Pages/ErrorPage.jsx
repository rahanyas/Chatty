const ErrorPage = () => {
    return (
<div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundColor: "#f8f9fa",
    color: "#333",
  }}
>
  <h1 style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>404</h1>
  <p style={{ fontSize: "1.2rem" }}>Page not found</p>
</div>

    )
};

export default ErrorPage;