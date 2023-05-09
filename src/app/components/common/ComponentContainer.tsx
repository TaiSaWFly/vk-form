import React, { ReactNode } from "react";

interface ComponentContainerProps {
    children: ReactNode;
}

const ComponentContainer: React.FC<ComponentContainerProps> = ({
    children
}) => {
    return <div className="container">{children}</div>;
};

export default ComponentContainer;
