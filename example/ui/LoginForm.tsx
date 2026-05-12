import React from "react";
import Stack from "@xanui/ui/Stack";
import Section from "../Layout/Section";
import LoginForm from "../../src/LoginForm";
import Google from "../icons/Google";
import Facebook from "../icons/Facebook";

const LoginFormComponent = () => {
   return (
      <Stack
         direction={"column"}
         alignItems={"center"}
         justifyContent={"center"}
         height="100%"
      >
         <LoginForm
            fields={[
               {
                  label: "Email",
                  type: "email",
                  name: "email",
                  placeholder: "Enter your email",
               },
               {
                  label: "Password",
                  type: "password",
                  name: "password",
                  placeholder: "Enter your password",
               },
            ]}
            loginWith={[
               {
                  provider: "google",
                  label: "Google",
                  icon: <Google width={16} height={16} />,
               },
               {
                  provider: "facebook",
                  label: "Facebook",
                  icon: <Facebook width={16} height={16} />,
               },
            ]}
         />
      </Stack>
   );
};

export default LoginFormComponent;
