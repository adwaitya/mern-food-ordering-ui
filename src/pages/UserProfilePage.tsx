import { useUpdateUser } from "@/api/User";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateUser();
  return <UserProfileForm isLoading={isLoading} onSave={updateUser} />;
};

export default UserProfilePage;
