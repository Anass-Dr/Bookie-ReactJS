import { useState, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import axiosInstance from "../../config/axios";
import { toast } from "react-toastify";

const AccountInfo = () => {
  const [user, setUser] = useState({});
  const auth = useAuth();

  useEffect(() => {
    const getUser = async () => {
      if (!auth.user) return;
      try {
        const user = await axiosInstance.get(
          `/users/${auth.user?.profile.sub}`
        );
        setUser({
          ...user.data,
          firstName: user.data?.fullName.split(" ")[0],
          lastName: user.data?.fullName.split(" ")[1],
        });
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };
    getUser();
  }, [auth]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="account_dashboard_body">
      <div className="account_dashboard_content">
        <div className="account_dashboard_content_header">
          Personal Information
        </div>
        <div className="content_body">
          <form action="#">
            <div className="row gy-4">
              <div className="col-12">
                <div className="profile-picture-form">
                  <div className="preview">
                    <img
                      className="img-fluid"
                      src="/assets/img/profile-img.png"
                      alt=""
                    />
                  </div>
                  <div className="upload_btn">
                    Upload New Photo
                    <input type="file" id="profile-picture-file" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label className="floating-label">First Name</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    required
                  />
                  <label className="floating-label">Last Name</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group ">
                  <label className="form-label">Your Date of Birth</label>
                  <input type="date" className="form-control" required />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <div className="d-flex flex-row">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        value=""
                        id="genderMale"
                        name="gender_radio"
                      />
                      <label className="form-check-label" htmlFor="genderMale">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value=""
                        id="genderFemale"
                        name="gender_radio"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="genderFemale"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    id="email_address"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                  <label className="floating-label" htmlFor="email_address">
                    Email Address
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    id="phone"
                    required
                  />
                  <label className="floating-label" htmlFor="phone">
                    Mobile Number
                  </label>
                </div>
              </div>
            </div>

            <div className="account_dashboard_content_title mt-3">
              <h4>Password </h4>
            </div>
            <div className="row mt-1 gy-3">
              <div className="col-lg-6">
                <div className="form-group pass-field-with-icon">
                  <input
                    type="password"
                    id="toggle_passowrd_field"
                    className="form-control"
                    required
                  />
                  <label className="floating-label">New Password</label>
                  <i
                    data-toggleTarget="#toggle_passowrd_field"
                    className="icon fas fa-eye toggle-password"
                  ></i>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group pass-field-with-icon">
                  <input
                    type="password"
                    id="toggle_passowrd_field2"
                    className="form-control"
                    required
                  />
                  <label className="floating-label">Confirm Password</label>
                  <i
                    data-toggleTarget="#toggle_passowrd_field2"
                    className="icon fas fa-eye toggle-password"
                  ></i>
                </div>
              </div>
            </div>
            <button className="bj_theme_btn mt-3">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
