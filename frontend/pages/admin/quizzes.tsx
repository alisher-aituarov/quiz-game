import { ReactElement } from 'react';
import { AdminLayout } from '../../app/components/layout/admin';
import { QuizzesTable } from '../../app/components/modules/tables/quizzes';

const AdminQuizzesPage: NextPageWithLayout = () => {
    return <QuizzesTable />;
};

AdminQuizzesPage.getLayout = function (page: ReactElement) {
    return <AdminLayout className="bg-blue-100">{page}</AdminLayout>;
};

export default AdminQuizzesPage;
