import React from "react";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <div
            style={{
                display: "flex",
                maxWidth: 900,
                margin: "auto",
            }}
        >
            {children}
        </div>
    );
}

export default Layout