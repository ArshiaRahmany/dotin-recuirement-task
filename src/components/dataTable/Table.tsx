import React, { useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import Loading from "components/common/loading/Loading";
import Modal from "components/common/modal/Modal";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { fetchDataTable } from "store/dataTable/DataTableSlice";
import { RootState } from "store/rootReducer";
import { Cart, Product } from "api/types/tableTypes";
import "datatables.net-select-dt";
import "datatables.net-buttons-dt";
import "datatables.net-searchpanes-dt";
import "datatables.net-responsive-dt";
import "assets/UI/table.css";
import { columns } from "./constants/column";

DataTable.use(DT);

const Table: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.dataTable
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchDataTable());
  }, [dispatch]);

  useEffect(() => {
    const allProducts = data?.carts.flatMap((cart: Cart) => cart.products);
    setProducts(allProducts || []);
  }, [data]);

  // any type because of rowCallBack options type
  const handleRowClick = (row: Product | any) => {
    const product = products.find((p) => p.title === row?.title);
    setSelectedProduct(product || null);
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <Loading className="w-[120px]" />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <DataTable
            data={products}
            columns={columns}
            options={{
              responsive: true,
              select: true,
              paging: true,
              searching: true,
              dom: '<"top"f>rt<"bottom"lip><"clear">',
              pagingType: "full_numbers",
              language: {
                searchPlaceholder: "جستجوی محصولات...",
                paginate: {
                  first: "<<",
                  last: ">>",
                  next: ">",
                  previous: "<",
                },
                lengthMenu: "نمایش _MENU_ رکورد در هر صفحه",
                zeroRecords: "هیچ رکوردی یافت نشد",
                info: "نمایش _START_ تا _END_ از _TOTAL_ رکورد",
                infoEmpty: "نمایش 0 تا 0 از 0 رکورد",
                infoFiltered: "(فیلتر شده از _MAX_ رکورد)",
                loadingRecords: "در حال بارگذاری...",
                processing: "در حال پردازش...",
                search: "جستجو:",
                emptyTable: "هیچ داده ای در جدول وجود ندارد",
              },
              rowCallback: (row, data) => {
                row.addEventListener("click", () => handleRowClick(data));
              },
            }}
            className="display min-w-full divide-y divide-gray-200 bg-gray-100 shadow-md rounded-lg"
          />
          {selectedProduct && (
            <Modal
              isOpen={!!selectedProduct}
              closeModal={() => setSelectedProduct(null)}
              headerTitle={selectedProduct.title}
              isDisable={false}
              product={selectedProduct}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Table;
