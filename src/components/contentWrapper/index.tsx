import React from "react";

const ContentWrapper: React.FC<IContentWrapper> = ({ children }) => {
  return (
    <div className="container mx-auto h-screen">
      <div className="flex justify-center items-center flex-col space-y-5">
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
