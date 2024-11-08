
import { ErrorResponse } from "api/types/axiosError";
import { showErrorToast } from "./toast";
import { removeLocalStorage } from "./localStorage";

export const errorHandler = (error: ErrorResponse) => {
  if ("response" in error && error.response) {
    const status = error.response.status;

    switch (status) {
      case 400:
        showErrorToast(`${error.response.data.message}`)
        break;
      case 401:
        removeLocalStorage("token")
        window.location.replace('/login')
        break;
      case 403:
        showErrorToast("عدم دسترسی")
        window.history.back()
        break;
      case 500:
        showErrorToast("خطای سرور. لطفا با مدیر سیستم تماس بگیرید")
        break;
      case 502:
        showErrorToast("سرور از انجام درخواست جلوگیری کرده است")
        break;
      default:
        showErrorToast("مشکلی هست لطفا پیگیری کنید")
    }
  } else if (error) {
    showErrorToast("لطفا از اتصال اینترنت خود اطمینان حاصل فرمایید")
  } else {
    showErrorToast("خطای ناشناخته")
  }
};