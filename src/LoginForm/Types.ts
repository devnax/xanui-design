interface LoginFormField {
   name: string;
   label: string;
   type?: string;
   placeholder?: string;
   icon?: React.ReactNode;
}

interface LoginWithOption {
   provider: "google" | "facebook" | "twitter" | "github";
   label: string;
   icon: React.ReactNode;
}

export interface LoginFormProps {
   fields: LoginFormField[];
   onSubmit?: (values: Record<string, any>) => void;
   loginWith?: LoginWithOption[];
}
