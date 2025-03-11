import { createLandmarkAction } from "@/actions/actions"
import { SubmitButton } from "@/components/form/Button"
import CategoryInput from "@/components/form/CategoryInput"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import ImageInput from "@/components/form/ImageInput"
import ProvincesInput from "@/components/form/ProvincesInput"
import TextareaInput from "@/components/form/TextareaInput"
import MapLandmark from "@/components/map/MapLandmark"



const ProfileCreatePage = async () => {


  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize"> create landmark </h1>
      <div className="border p-8 rounded-md w-full">
        <FormContainer action={createLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {/* name */}
            <FormInput 
              name="name" 
              type="text" 
              label='Landmark Name'
              placeholder="Landmark Name"
            />

            {/* category */}
            <CategoryInput />
          </div>

          {/* description */}
          <TextareaInput name="description" />

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {/* price */}
            <FormInput 
                name="price" 
                type="number" 
                label='Price'
                placeholder="Price"
              />
              {/* province */}
            <ProvincesInput name="province" />
          </div>

          <div>
            <ImageInput />
          </div>

          <div className="mt-4 mb-4">
            <MapLandmark location={{lat: 13, lng: 100}} />
          </div>
          

          <SubmitButton text='create landmark' size='lg' />
        </FormContainer>
      </div>
    </section>
  )
}
export default ProfileCreatePage