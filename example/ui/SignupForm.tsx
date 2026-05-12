import React from "react";
import Stack from "@xanui/ui/Stack";
import Section from "../Layout/Section";
import SignupForm from "../../src/SignupForm";
import Google from "../icons/Google";
import Facebook from "../icons/Facebook";
import Github from "../icons/Github";
import Twitter from "../icons/Twitter";

const SignupFormComponent = () => {
   return (
      <Stack
         direction={"column"}
         alignItems={"center"}
         justifyContent={"center"}
         height="100%"
      >
         <SignupForm
            fields={[
               {
                  label: "Full Name",
                  type: "text",
                  name: "name",
                  placeholder: "Enter your full name",
               },
               {
                  label: "Number",
                  type: "text",
                  name: "number",
                  placeholder: "Enter your number",
               },
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
               {
                  label: "Confirm Password",
                  type: "password",
                  name: "confirmPassword",
                  placeholder: "Confirm your password",
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
               {
                  provider: "github",
                  label: "GitHub",
                  icon: <Github width={16} height={16} />,
               },
               {
                  provider: "twitter",
                  label: "Twitter",
                  icon: <Twitter width={16} height={16} />,
               },
            ]}
         />
      </Stack>
   );
};

export default SignupFormComponent;
