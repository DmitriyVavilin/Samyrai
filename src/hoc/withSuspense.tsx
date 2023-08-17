import React from 'react';
import {Preloader} from "Preloader/Preloader";

export function withSuspense<P>(Component: React.ComponentType & any) {
    return (props: P)  => {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component {...props} />
            </React.Suspense>
        );
    };
}