import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm"


const ManagementRestaurantPage = () => {
const onSave = () => {

}
  return (
    <ManageRestaurantForm onSave={onSave} isLoading={false}/>
  )
}

export default ManagementRestaurantPage