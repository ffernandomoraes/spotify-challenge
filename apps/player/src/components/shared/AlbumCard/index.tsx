import { ImgHTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import LazyImage from '../LazyImage';

const AlbumCard = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-elevated-base hover:bg-elevated-highlight rounded-xl px-2.5 py-2.5 cursor-pointer transition-default w-full animate-fade-in'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-4 overflow-hidden'>{children}</div>
      </div>
    </div>
  );
};

const Image = ({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  return <LazyImage className={twMerge('w-20 h-20 rounded-lg object-cover', className)} {...props} />;
};

const Content = ({ children }: PropsWithChildren) => {
  return <div className='flex flex-col overflow-hidden'>{children}</div>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h3 className='text-white text-base font-medium line-clamp-2'>{children}</h3>;
};

const Description = ({ children }: PropsWithChildren) => {
  return <p className='text-gray-400 text-sm truncate'>{children}</p>;
};

AlbumCard.Image = Image;
AlbumCard.Content = Content;
AlbumCard.Title = Title;
AlbumCard.Description = Description;

export default AlbumCard;
