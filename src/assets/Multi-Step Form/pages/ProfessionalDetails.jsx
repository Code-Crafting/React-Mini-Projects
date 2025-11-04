import { useContext } from "react";
import { InputContext } from "../contexts/InputContext";
import Error from "../ui/Error";
import InputFeild from "../ui/inputFeilds/InputFeild";
import InputLabel from "../ui/inputFeilds/InputLabel";
import Select from "../ui/inputFeilds/Select";
import TextInput from "../ui/inputFeilds/TextInput";
import { Controller } from "react-hook-form";
import { experienceData } from "../constant/experienceData";

const ProfessionalDetails = () => {
  const {
    formState: { errors },
    control,
  } = useContext(InputContext);
  return (
    <>
      {/* company */}
      <InputFeild>
        <InputLabel htmlFor="company" labelTitle="Company" />
        <TextInput id="company" />
        {errors.company && <Error msg={errors.company.message} />}
      </InputFeild>

      {/* position */}
      <InputFeild>
        <InputLabel htmlFor="position" labelTitle="Position" />
        <TextInput id="position" />
        {errors.position && <Error msg={errors.position.message} />}
      </InputFeild>

      {/* experience */}
      <InputFeild>
        <InputLabel htmlFor="experience" labelTitle="Experience" />
        <Controller
          name="experience"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              options={experienceData}
            />
          )}
        />
        {errors.experience && <Error msg={errors.experience.message} />}
      </InputFeild>

      {/* industry */}
      <InputFeild>
        <InputLabel htmlFor="industry" labelTitle="Industry" />
        <TextInput id="industry" />
        {errors.industry && <Error msg={errors.industry.message} />}
      </InputFeild>
    </>
  );
};

export default ProfessionalDetails;
