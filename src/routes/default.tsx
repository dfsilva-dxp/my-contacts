import { Switch, Route } from "react-router-dom";

import {
  EditContactPage,
  HomePage,
  NewContactPage,
  NotFoundPage
} from "@/pages";

import { ROUTES } from "@/utils/common/routes";
const DefaultRoutes = () => {
  return (
    <Switch>
      <Route path={ROUTES.HOME} exact component={HomePage} />
      <Route path={ROUTES.NEW} component={NewContactPage} />
      <Route path={ROUTES.EDIT} component={EditContactPage} />
      <Route path={ROUTES.NOTFOUND} component={NotFoundPage} />
    </Switch>
  );
};

export default DefaultRoutes;
