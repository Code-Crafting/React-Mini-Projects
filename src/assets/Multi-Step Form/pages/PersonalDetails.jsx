import { useContext } from "react";
import EmailInput from "../ui/inputFeilds/EmailInput";
import InputFeild from "../ui/inputFeilds/InputFeild";
import InputLabel from "../ui/inputFeilds/InputLabel";
import NumberInput from "../ui/inputFeilds/NumberInput";
import TextInput from "../ui/inputFeilds/TextInput";
import { InputContext } from "../contexts/InputContext";
import Error from "../ui/Error";

const PersonalDetails = () => {
  const {
    formState: { errors },
  } = useContext(InputContext);
  return (
    <>
      <div className="flex gap-2">
        {/* first name */}
        <div className="flex-1">
          <InputFeild>
            <InputLabel htmlFor="firstName" labelTitle="First Name" />
            <TextInput id="firstName" minLength={3} />
            {errors.firstName && <Error msg={errors.firstName.message} />}
          </InputFeild>
        </div>

        {/* last name */}
        <div className="flex-1">
          <InputFeild>
            <InputLabel htmlFor="lastName" labelTitle="Last Name" />
            <TextInput id="lastName" minLength={3} />
            {errors.lastName && <Error msg={errors.lastName.message} />}
          </InputFeild>
        </div>
      </div>

      {/* email */}
      <InputFeild>
        <InputLabel htmlFor="email" labelTitle="Email Address" />
        <EmailInput id="email" />
        {errors.email && <Error msg={errors.email.message} />}
      </InputFeild>

      {/* phone number */}
      <InputFeild>
        <InputLabel htmlFor="number" labelTitle="Phone Number" />
        <NumberInput id="number" minLength={10} maxLength={10} />
        {errors.number && <Error msg={errors.number.message} />}
      </InputFeild>
    </>
  );
};

export default PersonalDetails;
