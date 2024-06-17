export function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length < 10 && phoneNumber.length > 11) {
    throw new Error("O número de telefone deve conter exatamente 11 dígitos.");
  }

  const ddd = phoneNumber.slice(0, 2);
  const prefix = phoneNumber.slice(2, 7);
  const suffix = phoneNumber.slice(7);

  const formattedPhoneNumber = `(${ddd}) ${prefix}-${suffix}`;

  return formattedPhoneNumber;
}
