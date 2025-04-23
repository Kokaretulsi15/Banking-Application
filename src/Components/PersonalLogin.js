
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/personallogin.css"; 
const PersonalLogin = () => {
  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center p-4">
        <div className="col-12 col-md-10 col-lg-8 login-box">
          <h4 className="login-header text-dark mb-4">Personal Login</h4>

          <form>
            {/* Username */}
            <div className="mb-3">
              <label className="form-label">Username<span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter username" required />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password<span className="text-danger">*</span></label>
              <input type="password" className="form-control" placeholder="Enter password" required />
            </div>

            {/* Login Button */}
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <span>New user? </span>
              <a href="/" className="text-primary">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalLogin;
