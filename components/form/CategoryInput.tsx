import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {categories} from '@/utils/category';

const CategoryInput = ({defaultValue}: {defaultValue?: string}) => {
  const name = "Categories";

  return (
    <div className="mb-2">
      <Label> {name} </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {
            categories.map((item) => {
              return (
                <SelectItem key={item.label} value={item.label}>
                  <span className="capitalize flex items-center gap-4">
                    <item.icon />
                    {item.label}
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
export default CategoryInput;
