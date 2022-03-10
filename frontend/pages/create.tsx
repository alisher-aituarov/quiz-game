import { ReactElement } from 'react';
import { Layout } from '../app/components/layout';
import { QuestionForm } from '../app/components/modules/forms/question';

const CreateQuestionPage: NextPageWithLayout = () => {
    return <QuestionForm />;
};

CreateQuestionPage.getLayout = function (page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default CreateQuestionPage;
