import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const getUserCurrentUser = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Faild to create user");
    }
    return response.json();
  };
  const {
    data: currentUser,
    isLoading,
    error,
    isSuccess,
  } = useQuery("fetchCurrentUser", getUserCurrentUser);

  if (error) {
    toast.error(error.toString());
  }
  return { currentUser, isLoading, error, isSuccess };
};

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Faild to create user");
    }
  };
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createUserRequest);

  return { createUser, isLoading, isError, isSuccess };
};

type UpdateUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};
export const useUpdateUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updateUserRequest = async (formData: UpdateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Faild to update user");
    }
  };
  const {
    mutateAsync: updateUser,
    isLoading,
    error,
    isSuccess,
    reset,
  } = useMutation(updateUserRequest);

  if (isSuccess) {
    toast.success("User profile updated!");
  }

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { updateUser, isLoading, error, isSuccess, reset };
};
