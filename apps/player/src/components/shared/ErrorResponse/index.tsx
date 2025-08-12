type ErrorSectionProps = {
  title: string;
  description: string;
};

const ErrorSection = ({ title, description }: ErrorSectionProps) => {
  return (
    <div className='w-full flex min-h-80 flex-col items-center justify-center gap-8'>
      <div className='w-full flex flex-col items-center justify-center gap-2 px-4'>
        <h2 className='text-4xl font-bold text-center'>{title}</h2>
        <p className='text-lg text-gray-500 text-center'>{description}</p>
      </div>
    </div>
  );
};

export default ErrorSection;
