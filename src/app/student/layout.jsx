import React from 'react';
import StudentSidebar from './components/sidebar';

const layout = ({children}) => {
    return (
        <div className="flex min-h-screen">
            <div className="w-64 bg-white text-black dark:text-white dark:bg-black p-4">
                <StudentSidebar />
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default layout;