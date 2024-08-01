import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };


  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <input className="wd-username" value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
            <br /><br />
          <input className="wd-password" value={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
            <br /><br />
          <input className="wd-firstname" value={profile.firstName}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
            <br /><br />
          <input className="wd-lastname" value={profile.lastName}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
            <br /><br />
          <input className="wd-dob" value={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date" />
            <br /><br />
          <input className="wd-email" value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
            <br /><br />
          <select className="wd-role" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <br /><br />
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
