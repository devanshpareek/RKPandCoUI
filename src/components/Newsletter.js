import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import useLocalStorageState from "use-local-storage-state";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useLocalStorageState(
    "isAdminLoggedIn",
    false
  );

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    email === "admin123@gmail.com" &&
      password === "iamadmin" &&
      setIsAdminLoggedIn(true);
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Col lg={12} id="admin">
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Admin Dashboard</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
              </div>
              <div
                className="new-email-bx"
                style={{
                  marginTop: "1rem",
                }}
              >
                <input
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Admin Password"
                />
              </div>

              <div
                className="new-email-bx2"
                style={{
                  marginTop: "1rem",
                }}
              >
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
