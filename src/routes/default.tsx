import { Route, Routes } from "react-router-dom";

import {
  EditContactPage,
  HomePage,
  NewContactPage,
  NotFoundPage
} from "@/presenter/pages";

import { ROUTES } from "@/utils/common/constant/routes";
const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.NEW} element={<NewContactPage />} />
      <Route path={ROUTES.EDIT} element={<EditContactPage />} />
      <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default DefaultRoutes;
