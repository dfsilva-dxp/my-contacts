import httpClient from "@/utils/common/services/httpClient";

import { PATHS } from "@/utils/common/constant/paths";

class ContactsService {
  async listContacts() {
    return httpClient.get(PATHS.CONTACTS);
  }
}

export default new ContactsService();
