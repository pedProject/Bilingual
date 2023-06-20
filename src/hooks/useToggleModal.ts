import { useSearchParams } from "react-router-dom";

export const useToggleModal = (query: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isModalOpen = Boolean(searchParams.get(query));

  const openModalHandler = () => {
    searchParams.set(query, "open");
    setSearchParams(searchParams, {
      replace: true
    });
  };

  const closeModalHandler = () => {
    searchParams.delete(query);
    setSearchParams(searchParams, {
      replace: true
    });
  };

  return {
    onOpenModal: openModalHandler,
    isOpen: isModalOpen,
    onCloseModal: closeModalHandler
  };
};
