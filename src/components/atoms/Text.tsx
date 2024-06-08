import React from 'react';

type TextProps = {
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default Text;