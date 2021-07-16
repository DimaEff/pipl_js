import React, {Suspense} from 'react';


const withSuspense = (Component, fallbackElement = <div>Loading...</div>) => {

    return () => {
        return (
            <Suspense fallback={fallbackElement}>
                <Component/>
            </Suspense>
        );
    };
};

export default withSuspense;