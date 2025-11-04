import { useContext } from "react";
import InputFeild from "../ui/inputFeilds/InputFeild";
import InputLabel from "../ui/inputFeilds/InputLabel";
import NumberInput from "../ui/inputFeilds/NumberInput";
import TextInput from "../ui/inputFeilds/TextInput";
import { InputContext } from "../contexts/InputContext";
import Error from "../ui/Error";
import DateInput from "../ui/inputFeilds/DateInput";

const BillingDetails = () => {
  const {
    formState: { errors },
  } = useContext(InputContext);
  return (
    <>
      {/* card number */}
      <InputFeild>
        <InputLabel htmlFor="cardNumber" labelTitle="Card Number" />
        <NumberInput id="cardNumber" minLength={16} maxLength={16} />
        {errors.cardNumber && <Error msg={errors.cardNumber.message} />}
      </InputFeild>

      {/* cardholder name */}
      <InputFeild>
        <InputLabel htmlFor="cardholderName" labelTitle="Cardholder Name" />
        <TextInput id="cardholderName" minLength={3} />
        {errors.cardholderName && <Error msg={errors.cardholderName.message} />}
      </InputFeild>

      <div className="flex gap-2">
        {/* expiry date */}
        <div className="flex-1">
          <InputFeild>
            <InputLabel htmlFor="expiryDate" labelTitle="Expiry Date" />
            <DateInput id="expiryDate" />
            {errors.expiryDate && <Error msg={errors.expiryDate.message} />}
          </InputFeild>
        </div>

        {/* cvv */}
        <div className="flex-1">
          <InputFeild>
            <InputLabel htmlFor="cvv" labelTitle="CVV" />
            <NumberInput id="cvv" minLength={3} maxlength={3} />
            {errors.cvv && <Error msg={errors.cvv.message} />}
          </InputFeild>
        </div>
      </div>
    </>
  );
};

export default BillingDetails;
