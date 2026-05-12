import React from "react";
import Text from "@xanui/ui/Text";
import Stack, { StackProps } from "@xanui/ui/Stack";

type Props = StackProps & {
   title: string;
};

const Section = ({ title, children, ...rest }: Props) => {
   return (
      <Stack gap={1} mb={3}>
         <Text fontWeight={600} color="default.muted">
            {title}
         </Text>
         <Stack {...rest}>{children}</Stack>
      </Stack>
   );
};

export default Section;
