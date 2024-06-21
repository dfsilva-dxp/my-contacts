import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { ERROR_MESSAGE } from "../constant/errorMessage";

type ErrorMessage =
  | "Item deletado com sucesso"
  | "Nome do contato é obrigatório."
  | "Este e-mail já está cadastrado para outro contato."
  | "Contato não encontrado. Por favor, verifique os dados da consulta."
  | "Categoria não encontrado. Por favor, verifique os dados da consulta.";

type ErrorMessageKey = keyof typeof ERROR_MESSAGE;

function parseErrorMessage(message: ErrorMessageKey): ErrorMessage {
  return ERROR_MESSAGE[message];
}

export function handleError(error: unknown): boolean {
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
  return false;
}
