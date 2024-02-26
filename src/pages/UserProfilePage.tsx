import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const onSave = (data) => {};
  return <UserProfileForm isLoading={false} onSave={onSave} />;
};

export default UserProfilePage;
