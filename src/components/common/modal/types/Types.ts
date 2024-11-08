import { Product } from "api/types/tableTypes";

export interface ModalTypes {
  headerTitle: string;
  isDisable: boolean;
  isOpen?: boolean;
  closeModal?: () => void;
  product?: Product;
  children?: React.ReactNode; 
}
