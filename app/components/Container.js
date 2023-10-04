'use client';

const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto px-4 h-full">
      {children}
    </div>
  );
}

export default Container;