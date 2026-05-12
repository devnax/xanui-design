interface SignupFormField {
   name: string;
   label: string;
   type?: string;
   placeholder?: string;
   icon?: React.ReactNode;
}

interface SignupWithOption {
   provider: "google" | "facebook" | "twitter" | "github";
   label: string;
   icon: React.ReactNode;
}

export interface SignupFormProps {
   fields: SignupFormField[];
   onSubmit?: (values: Record<string, any>) => void;
   loginWith?: SignupWithOption[];
}
