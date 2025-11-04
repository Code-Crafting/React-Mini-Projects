import BillingDetails from "../pages/BillingDetails";
import PersonalDetails from "../pages/PersonalDetails";
import ProfessionalDetails from "../pages/ProfessionalDetails";

export const currentStepPage = [
  {
    Page: PersonalDetails,
    title: "Personal Details",
  },
  {
    Page: ProfessionalDetails,
    title: "Professional Details",
  },
  {
    Page: BillingDetails,
    title: "Billing Details",
  },
];
