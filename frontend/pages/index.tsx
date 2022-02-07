import { ReactElement } from "react";
import { Layout } from "../app/components/layout";

const HomePage: NextPageWithLayout = () => {
  return <div>HOME</div>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
