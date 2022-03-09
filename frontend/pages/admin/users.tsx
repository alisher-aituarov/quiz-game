import { ReactElement } from 'react';
import { AdminLayout } from '../../app/components/layout/admin';
import { UsersTable } from '../../app/components/modules/tables/users';

const AdminUsersPage: NextPageWithLayout = () => {
    return <UsersTable />;
};

AdminUsersPage.getLayout = function (page: ReactElement) {
    return <AdminLayout className="bg-blue-100">{page}</AdminLayout>;
};

export default AdminUsersPage;
