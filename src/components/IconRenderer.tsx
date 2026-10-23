import React from "react";
import {
  SunMedium,
  Building2,
  GraduationCap,
  Compass,
  Code2,
  CreditCard,
  Briefcase,
  HelpCircle,
  LucideProps
} from "lucide-react";

interface IconRendererProps extends LucideProps {
  name: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, ...props }) => {
  switch (name) {
    case "SunMedium":
      return <SunMedium {...props} />;
    case "Building2":
      return <Building2 {...props} />;
    case "GraduationCap":
      return <GraduationCap {...props} />;
    case "Compass":
      return <Compass {...props} />;
    case "Code2":
      return <Code2 {...props} />;
    case "CreditCard":
      return <CreditCard {...props} />;
    case "Briefcase":
      return <Briefcase {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
};
