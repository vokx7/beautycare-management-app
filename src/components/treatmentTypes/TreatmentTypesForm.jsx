import { StyledButtonForm } from "../styles/StyledButtonForm";
import { StyledInput } from "../styles/StyledInput";
import { StyledInputDiv } from "../styles/StyledInputDiv";
import { FieldErrors } from "../FieldErrors";
import { ArrowIcon, StyledSelectInput } from "../StyledSelectInput";
import { SlArrowDown } from "react-icons/sl";

export const TreatmentTypesForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <StyledInputDiv>
        <label htmlFor="name">Name: </label>
        <StyledInput
          placeholder="Type service's name"
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
        />
        <FieldErrors errors={errors.name} />
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="duration">Duration [mins]: </label>
        <StyledInput
          placeholder="e.g. 60"
          type="number"
          name="duration"
          id="duration"
          value={values.duration}
          onChange={handleChange}
        />
        <FieldErrors errors={errors.duration} />
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="price">Price [$]: </label>
        <StyledInput
          placeholder="e.g. 99.99"
          type="text"
          name="price"
          id="price"
          value={values.price}
          onChange={handleChange}
        />
        <FieldErrors errors={errors.price} />
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="specialty">Specialty: </label>
        <div style={{ position: "relative" }}>
          <StyledSelectInput
            name="specialty"
            value={values.specialty}
            onChange={handleChange}
          >
            <option value="manicure">manicure</option>
            <option value="cosmetology">cosmetology</option>
            <option value="hairdressing">hairdressing</option>
          </StyledSelectInput>
          <ArrowIcon>
            <SlArrowDown />
          </ArrowIcon>
        </div>
      </StyledInputDiv>
      <StyledButtonForm type="submit" disabled={isPending}>
        Save
      </StyledButtonForm>
    </form>
  );
};
