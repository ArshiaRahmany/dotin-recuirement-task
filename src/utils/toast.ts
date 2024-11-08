import { toast } from "react-toastify";

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: "top-center",
    theme: "colored",
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    position: "top-center",
    theme: "colored",
  });
};
