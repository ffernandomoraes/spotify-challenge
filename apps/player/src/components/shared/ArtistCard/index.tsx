import { HTMLAttributes, ImgHTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const ArtistCard = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className='flex flex-col group animate-fade-in' {...props}>
      {children}
    </div>
  );
};

const Image = ({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      {...props}
      className={twMerge(
        'w-full aspect-square opacity-100 md:opacity-90 group-hover:opacity-100 object-cover rounded-xl md:rounded-4xl outline-offset-5 outline-2 outline-transparent group-hover:outline-brand/70 transition-default',
        className
      )}
    />
  );
};

const Content = ({ children }: PropsWithChildren) => {
  return <div className='mt-3 px-3'>{children}</div>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h3 className='text-gray-400 font-medium group-hover:text-white transition-default truncate'>{children}</h3>;
};

const Description = ({ children }: PropsWithChildren) => {
  return <p className='text-sm text-gray-400'>{children}</p>;
};

ArtistCard.Image = Image;
ArtistCard.Content = Content;
ArtistCard.Title = Title;
ArtistCard.Description = Description;

export default ArtistCard;
