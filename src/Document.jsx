import React, { useEffect } from 'react';

function DocumentTitleUpdater() {
    useEffect(() => {
        document.title = 'Updated Title';
    }, []);

    return (
        <div>
            <h2>Document Title Updated</h2>
            <p>The document title has been updated.</p>
        </div>
    );
}

export default DocumentTitleUpdater;
