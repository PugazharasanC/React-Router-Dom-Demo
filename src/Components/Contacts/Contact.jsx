import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div>Contact Us Page</div>
      <input
        type="text"
        placeholder="Name"
        value={inputName}
        onChange={(event) => {
          setInputName(event.target.value);
        }}
      />
      <input
        type="button"
        value="navigate"
        onClick={() => {
          console.log(inputName);
          navigate(`/contact/${inputName}`);
        }}
      />
      <Outlet />
    </>
  );
};

export default Contact;
