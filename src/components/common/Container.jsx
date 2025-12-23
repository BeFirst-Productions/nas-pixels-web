export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-[120px] 2xl:px-[120px] ${className}`}>
      {children}
    </div>
  );
}