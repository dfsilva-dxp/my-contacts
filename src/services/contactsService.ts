import { IContact } from "@/components/ContactTable/types";
import axiosService from "@/utils/common/services/axiosService";

class ContactsService {
  async listContacts() {
    const { data } = await axiosService.get<IContact[]>("contacts");
    return data;
  }
}

export default new ContactsService();
