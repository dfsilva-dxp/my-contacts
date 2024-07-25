import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Breadcrumb,
  Container,
  Form,
  Header
} from "@/presenter/components";

import { DI } from "@/di/ioc";

import { ENDPOINTS } from "@/utils/common/constant/endpoints";

import { GetContactViewModelResponse } from "../view-models/getContactViewModel";
import { UpdateContactViewModelResponse } from "../view-models/useUpdateContactViewModel";
import { ContactFormData } from "../view-models/useFormViewModel";

import { Contact } from "@/domain/model/Contacts";
import { FormHandle } from "@/presenter/components/Form";

const EditContactView = () => {
  const [contact, setContact] = useState<Contact | undefined>(undefined);
  const formRef = useRef<FormHandle>(null);
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

        setContact(response);
        formRef?.current?.resetFormData(response);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Box>
        <Header />
        <Breadcrumb title={`Editar ${contact?.name}`} url={ENDPOINTS.HOME} />
        <Form whenSubmit={onSubmit} isLoading={isLoading} ref={formRef} />
      </Box>
    </Container>
  );
};

export default EditContactView;
