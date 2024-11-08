import { IoCloseCircleOutline } from "react-icons/io5";
import { ModalTypes } from "./types/Types";
import { Product } from "api/types/tableTypes";

const Modal = ({
  isOpen,
  closeModal,
  headerTitle,
  isDisable,
  product,
}: ModalTypes & { isOpen: boolean; closeModal: () => void; product: Product | null }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal modal-open fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" role="dialog">
      <div className="modal-box p-4 bg-white">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold mb-5">{headerTitle}</h3>
          <IoCloseCircleOutline
            className="cursor-pointer"
            size={23}
            onClick={closeModal}
          />
        </div>
        <div className="my-6 p-6 text-start">
          <p><strong>عنوان:</strong> {product.title}</p>
          <p><strong>قیمت:</strong> ${product.price}</p>
          <p><strong>تعداد:</strong> {product.quantity}</p>
          <p><strong>جمع کل:</strong> ${product.total}</p>
          <p><strong>درصد تخفیف:</strong> {product.discountPercentage}%</p>
          <p><strong>جمع پس از تخفیف:</strong> ${product.discountedTotal}</p>
        </div>
        <div className="modal-action flex justify-center">
          <label
            onClick={closeModal}
            className="btn w-[40%] mx-2 btn-outline py-[-5px] bg-gray-100 hover:bg-gray-200 hover:text-black rounded-2xl px-5 text-black"
          >
            بستن
          </label>
        </div>
      </div>
    </div>
  );
};

export default Modal;
