import type { ReactElement } from "react";
import type { NextPage } from "next";
import { Layout } from "../app/components/layout";

const SignInPage: NextPage & { getLayout: any } = () => {
  return <div>Sign In</div>;
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SignInPage;
