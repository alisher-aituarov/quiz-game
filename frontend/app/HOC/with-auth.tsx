/* eslint-disable react-hooks/rules-of-hooks */
import Router, { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '../constants/storage-keys';
import { useMounted } from '../hooks/useMounted';
import { LocalStorage } from '../utils/local-storage';

type TWithAuth = {
    WrappedComponent: JSX.Element;
};

export function withAuth<T extends TWithAuth = TWithAuth>(
    WrappedComponent: React.ComponentType<T> & { getLayout: (a: React.ReactElement) => React.ReactElement },
): React.ComponentType<T> {
    const InnerComponent = (props: T) => {
        const [redirecting, setRedirecting] = useState(false);

        const router = useRouter();
        const isMounted = useMounted();

        if (typeof window === 'undefined') {
            return null;
        }
        useEffect(() => {
            const accessToken = LocalStorage.get(STORAGE_KEYS.accessToken);

            if (!accessToken) {
                setRedirecting(true);
                router.push('/auth/sign-in');
            }
        }, [router]);

        if (redirecting) return null;

        return isMounted ? (
            WrappedComponent.getLayout ? (
                WrappedComponent.getLayout(<WrappedComponent {...props} />)
            ) : (
                <WrappedComponent {...props} />
            )
        ) : null;
    };

    InnerComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name}`;

    return InnerComponent;
}
