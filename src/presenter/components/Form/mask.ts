import { FormEvent } from "react";

function maskCep(evt: FormEvent<HTMLInputElement>) {
  evt.currentTarget.maxLength = 9;
  let value = evt.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  evt.currentTarget.value = value;
  return evt;
}

function maskCurrency(evt: FormEvent<HTMLInputElement>) {
  let value = evt.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  evt.currentTarget.value = value;
  return evt;
}

function maskCpf(evt: FormEvent<HTMLInputElement>) {
  evt.currentTarget.maxLength = 14;
  let value = evt.currentTarget.value;
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    evt.currentTarget.value = value;
  }
  return evt;
}

function maskPhone(evt: FormEvent<HTMLInputElement>) {
  let value = evt.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  evt.currentTarget.value = value;

  return evt;
}

export { maskCep, maskCurrency, maskCpf, maskPhone };
