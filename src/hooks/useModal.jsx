import { useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function useModal(initialValue = false)
{
  const [isOpen, setIsOpen] = useState(initialValue);
  const openModal = () =>
  {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () =>
  {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return [isOpen, openModal, closeModal];
}
