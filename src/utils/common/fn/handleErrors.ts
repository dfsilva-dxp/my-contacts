import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { ERROR_MESSAGE } from "../constant/errorMessage";

type ErrorMessageKey = keyof typeof ERROR_MESSAGE;

function parseErrorMessage(message: ErrorMessageKey) {
  return ERROR_MESSAGE[message];
}

export function handleError(error: unknown) {
  if (error instanceof AxiosError) {
    const { response } = error;
    const headers = response?.headers;

    if (headers && headers["content-type"]?.includes("text/html")) {
      toast.error("404 Not Found");
      return false;
    }

    toast.error(
      parseErrorMessage(error.response?.data.message || error.response?.data)
    );
    return true;
  }

  console.error(error);
}
