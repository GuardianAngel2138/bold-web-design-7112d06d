
import React, { useEffect, useRef } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

interface GLightboxProps {
  children: React.ReactNode;
  gallery?: string;
  href?: string;
  type?: 'image' | 'video' | 'inline' | 'external';
  title?: string;
  description?: string;
  className?: string;
}

const GLightboxComponent: React.FC<GLightboxProps> = ({
  children,
  gallery = 'gallery',
  href,
  type = 'image',
  title,
  description,
  className = ''
}) => {
  const lightboxRef = useRef<any>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current && href) {
      // Initialize GLightbox
      lightboxRef.current = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        openEffect: 'zoom',
        closeEffect: 'fade',
        slideEffect: 'slide',
      });

      return () => {
        if (lightboxRef.current) {
          lightboxRef.current.destroy();
        }
      };
    }
  }, [href]);

  if (!href) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={elementRef} className={className}>
      <a
        href={href}
        className="glightbox"
        data-gallery={gallery}
        data-type={type}
        data-title={title}
        data-description={description}
      >
        {children}
      </a>
    </div>
  );
};

export default GLightboxComponent;
