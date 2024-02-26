import { useGetMyUser, useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading:isGetLoading } = useGetMyUser();
  const { updateUser, isLoading:isUpdateLoading } = useUpdateUser();
 
  if (isGetLoading) {
    return <span>Loading...</span>
  }
  console.log('currentUser', currentUser);
  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
  return <UserProfileForm currentUser={currentUser} isLoading={isUpdateLoading} onSave={updateUser} />;
};

export default UserProfilePage;
