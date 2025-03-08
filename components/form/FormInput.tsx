import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
    name: string,
    type: string,
    label?: string,
    defaultValue?: string,
    placeholder?: string
}

const FormInput = (props: FormInputProps) => {
    const { name, type, label, defaultValue, placeholder } = props
  return (
    <div className="mb-2">
      <Label htmlFor={name}> {label} </Label>
      <Input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        defaultValue={defaultValue}
        className="max-w-sm" 
    />
    </div>
  );
};
export default FormInput;
