import { ReactElement } from 'react';
import { AdminLayout } from '../../app/components/layout/admin';
import { QuestionsTable } from '../../app/components/modules/tables/questions';

const AdminRootPage: NextPageWithLayout = () => {
    return <QuestionsTable />;
};

AdminRootPage.getLayout = function (page: ReactElement) {
    return <AdminLayout className="bg-blue-100">{page}</AdminLayout>;
};

export default AdminRootPage;
