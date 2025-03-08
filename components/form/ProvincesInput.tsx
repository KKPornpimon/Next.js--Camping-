import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {provinces} from '@/utils/provinces';

const ProvincesInput = ({name, defaultValue}: {name: string, defaultValue?: string}) => {

  return (
    <div className="mb-2">
      <Label> {name} </Label>
      <Select
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        name={name}
        required
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {
            provinces.map((item) => {
              return (
                <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                  <span className="capitalize flex items-center gap-4">
                    {item.PROVINCE_NAME}
                  </span>
                </SelectItem>
              )
            })
          }
          
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvincesInput;
