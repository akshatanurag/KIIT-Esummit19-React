import * as React from "react";
import { client } from "../utils/api-client";
import { getTokenFromLocalStorage } from "../utils/auth-provider";
import MySwal from "../Components/Swal";
import Payment from "./Payment";
import { FullPageSpinner } from "../utils/lib";
import { useAuth } from "../Context/auth-context";

const ProfileEditForm = ({ setDisplay }) => {
  const {
    user: { userDetails, token },
    setStepInfo,
  } = useAuth();

  const formDataObj = {
    fullName: userDetails.fullName,
    mob_no: "",
    w_mob_no: "",
    gender: "",
    uni: "",
    alt_email: "",
    roll: undefined,
    year: undefined,
  };

  const [uni, setUni] = React.useState("");
  const [formData, setFormData] = React.useState(formDataObj);

  React.useEffect(
    () =>
      setStepInfo({
        progress: 0,
        breadCrumb: "Complete Profile",
      }),
    [setStepInfo]
  );

  const handleSubmit = (e) => {
    setDisplay("loading");
    e.preventDefault();
    client("profile", {
      data: formData,
      token,
    })
      .then(async ({ response, data }) => {
        // console.log(data);
        MySwal.fire("Profile Saved", `${data.message}`, "success").then(() => {
          setDisplay("payment");
          setStepInfo({
            progress: 50,
            breadCrumb: "Complete Payment",
          });
        });
      })
      .catch((e) => {
        MySwal.fire("Failure", `${e.message}`, "error");
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="fullName">Name</label>
          <input
            type="name"
            required
            className="form-control"
            id="fullName"
            placeholder="Full Name"
            disabled
            value={userDetails?.fullName}
          />
        </div>
        <div className="form-group col-md-6">
          <label for="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            disabled
            required
            value={userDetails?.email}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="mob_no">Mobile Number</label>
          <input
            type="number"
            required
            className="form-control"
            id="mob_no"
            placeholder="Enter Mobile Number"
            value={formData.mob_no}
            onChange={(e) =>
              setFormData({ ...formData, mob_no: e.target.value })
            }
          />
        </div>
        <div className="form-group col-md-6">
          <label for="w_mob_no">Whats App Number</label>
          <input
            type="number"
            className="form-control"
            id="w_mob_no"
            placeholder="Enter Whats App Number"
            required
            value={formData.w_mob_no}
            onChange={(e) =>
              setFormData({ ...formData, w_mob_no: e.target.value })
            }
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            className="form-control"
            required
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="">--None--</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Others</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label for="university">University</label>
          <select
            name="university"
            id="university"
            className="form-control"
            required
            onChange={(e) => {
              if (e.target.value === "kiit university") {
                setFormData({ ...formData, uni: e.target.value });
                setUni(e.target.value);
              } else {
                setFormData({ ...formData, uni: "" });
                setUni("O");
              }
            }}
            value={uni}
          >
            <option value="">--None--</option>
            <option value="kiit university">KIIT (D) University</option>
            <option value="O">Others</option>
          </select>
        </div>
      </div>
      {uni === "O" ? (
        <div className="form-row">
          <div className="form-group col-md-12">
            <label for="uni">University Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="uni"
              placeholder="Enter University Name"
              value={formData.uni}
              onChange={(e) =>
                setFormData({ ...formData, uni: e.target.value })
              }
            />
          </div>
        </div>
      ) : uni === "kiit university" ? (
        <>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label for="alt_email">KIIT Mail ID</label>
              <input
                type="email"
                name="alt_email"
                className="form-control"
                id="alt_email"
                placeholder="Enter KIIT Email ID"
                value={formData.alt_email}
                onChange={(e) =>
                  setFormData({ ...formData, alt_email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="uni">Roll Number</label>
              <input
                type="number"
                name="roll"
                className="form-control"
                id="roll"
                placeholder="Enter KIIT Roll No."
                value={formData.roll}
                onChange={(e) =>
                  setFormData({ ...formData, roll: e.target.value })
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label for="year">Select Current year</label>
              <select
                name="year"
                id="year"
                className="form-control"
                required
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
              >
                <option value="">--None--</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="O">Others</option>
              </select>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <button
        type="submit"
        className="btn btn-primary"
        style={{ float: "right" }}
      >
        Submit
      </button>
    </form>
  );
};

export { ProfileEditForm };
