import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Breadcrumb,
  Container,
  Form,
  Header
} from "@/presenter/components";

import { DI } from "@/di/ioc";

import { GetContactViewModelResponse } from "../view-models/getContactViewModel";
import { UpdateContactViewModelResponse } from "../view-models/useUpdateContactViewModel";
import { ContactFormData } from "../view-models/useFormViewModel";

import { ENDPOINTS } from "@/utils/common/constant/endpoints";

const EditContactView = () => {
  const [contactName, setContactName] = useState<string | undefined>(undefined);
  const { id } = useParams();

  const { getContactById, isLoading } = DI.resolve<GetContactViewModelResponse>(
    "getContactViewModel"
  );

  const { updateContact } = DI.resolve<UpdateContactViewModelResponse>(
    "updateContactViewModel"
  );

  const onSubmit = async ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => {
    if (id) {
      await updateContact({
        id,
        formData: { name, email, phone, category_id }
      });
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const response = await getContactById(id);

        setContactName(response?.name);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Box>
        <Header />
        <Breadcrumb title={`Editar ${contactName}`} url={ENDPOINTS.HOME} />
        <Form
          whenSubmit={onSubmit}
          onGetContactById={getContactById}
          isLoading={isLoading}
        />
      </Box>
    </Container>
  );
};

export default EditContactView;
