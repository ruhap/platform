import create from "zustand";

type StoreState = {
  isModalOpen: boolean;
};

type StoreActions = {
  toggleModal: () => void;
};

export const useStore = create<StoreState & StoreActions>((set) => ({
  isModalOpen: false,
  toggleModal: () => {
    set((state) => ({
      isModalOpen: !state.isModalOpen,
    }));
  },
}));
