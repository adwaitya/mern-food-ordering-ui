import { useCreateRestaurant, useGetRestaurant, useUpdateRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";


const ManagementRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
  useCreateRestaurant();
const { restaurant } = useGetRestaurant();
const { updateRestaurant, isLoading: isUpdateLoading } =
  useUpdateRestaurant();

  const isEditing = !!restaurant;
  return (
    <Tabs defaultValue="manage-restaurant">
    <TabsList>
      <TabsTrigger value="orders">Orders</TabsTrigger>
      <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
    </TabsList>
    {/* <TabsContent
      value="orders"
      className="space-y-5 bg-gray-50 p-10 rounded-lg"
    >
      <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
      {orders?.map((order) => (
        <OrderItemCard order={order} />
      ))}
    </TabsContent> */}
    <TabsContent value="manage-restaurant">
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={createRestaurant}
        isLoading={isCreateLoading || isUpdateLoading}
      />
    </TabsContent>
  </Tabs>
  )
}

export default ManagementRestaurantPage