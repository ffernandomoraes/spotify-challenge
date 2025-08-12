import { ImgHTMLAttributes, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const LazyImage = ({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.1 });

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef}>
      {isInView && (
        <img
          {...props}
          loading='lazy'
          onLoad={() => setIsLoaded(true)}
          className={twMerge('transition-opacity', isLoaded ? 'opacity-100' : 'opacity-0', className)}
        />
      )}
    </div>
  );
};

export default LazyImage;
