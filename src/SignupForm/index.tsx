import React, { useState } from "react";
import Stack from "@xanui/ui/Stack";
import Input from "@xanui/ui/Input";
import Button from "@xanui/ui/Button";
import Box from "@xanui/ui/Box";
import Text from "@xanui/ui/Text";
import Link from "@xanui/ui/Link";
import IconButton from "@xanui/ui/IconButton";
import VisibilityOff from "@xanui/icons/VisibilityOff";
import Visibility from "@xanui/icons/Visibility";
import Facebook from "../../example/icons/Facebook";
import Google from "../../example/icons/Google";
import Github from "../../example/icons/Github";
import Twitter from "../../example/icons/Twitter";
import { SignupFormProps } from "./Types";

const SignupForm = ({ fields, loginWith, onSubmit }: SignupFormProps) => {
   const [visible, setVisible] = useState(false);

   return (
      <Stack
         gap={2}
         width={350}
         p={3}
         border={"1px solid"}
         borderColor="default.divider"
         radius={2}
      >
         <Stack gap={1}>
            {fields.map((field) =>
               field.type === "password" ? (
                  <Box key={field.name}>
                     <Input
                        placeholder={field.placeholder}
                        label={field.label}
                        type={visible ? "text" : "password"}
                        endIcon={
                           <Box>
                              <IconButton
                                 color="default"
                                 variant="text"
                                 size="small"
                                 onClick={() => setVisible((v) => !v)}
                              >
                                 {visible ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                           </Box>
                        }
                     />
                     <Link
                        color="default.muted"
                        fontSize={12}
                        fontWeight={500}
                        mt={1}
                        ml={1}
                        display="inline-block"
                     >
                        Forgot password?
                     </Link>
                  </Box>
               ) : (
                  <Input
                     key={field.name}
                     label={field.label}
                     type={field.type}
                     name={field.name}
                     placeholder={field.placeholder}
                  />
               ),
            )}

            <Button variant="fill">Login</Button>
         </Stack>
         <Stack gap={2} mt={2}>
            <Stack alignItems="center">
               <Box
                  border="1px solid"
                  borderColor="default.divider"
                  width="100%"
               />

               <Text
                  mt={-1.5}
                  fontSize={12}
                  textAlign="center"
                  bgcolor="default.surface"
                  display="inline"
                  px={1}
               >
                  Or Sign in with
               </Text>
               <Stack gap={1} mt={1.5} width="100%">
                  {loginWith?.map((option) => (
                     <Button
                        key={option.provider}
                        variant="outline"
                        color="default"
                        size="small"
                        width="100%"
                        startIcon={option.icon as React.ReactNode as any}
                     >
                        {option.label}
                     </Button>
                  )) || []}
               </Stack>
            </Stack>

            <Text color="default.muted" fontSize={12} textAlign="center">
               Don't have an account? <Link fontWeight={500}>Sign Up</Link>
            </Text>
         </Stack>
      </Stack>
   );
};

export default SignupForm;
