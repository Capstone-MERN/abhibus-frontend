import { Tabs } from "antd";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import { useState } from "react";
import "./Styles/Auth.scss";

const Auth = () => {
  const [activeKey, setActiveKey] = useState("1");

  const handleSignupSuccess = () => {
    setActiveKey("1");
  };
  const items = [
    {
      key: "1",
      label: "Login",
      children: <Login />,
    },
    {
      key: "2",
      label: "Signup",
      children: <SignUp handleSignupSuccess={handleSignupSuccess} />,
    },
  ];
  return (
    <div className="Auth-container">
      <div className="form-container">
        <Tabs
          defaultActiveKey="1"
          activeKey={activeKey}
          onChange={setActiveKey}
          items={items}
        />
      </div>
    </div>
  );
};

export default Auth;
