import { useDispatch, useSelector } from "react-redux";
import { columns } from "./components/table-column";
import { ProductTable } from "./components/product-table";
import { fetchDataProduct, selectProducts } from "@/stores/product-data";
import { useState, useEffect } from "react";
import { Main } from "@/layout/main";
import { ProductForm } from "./components/product-form";
import { ColumnDef } from "@tanstack/react-table";
import { AddButton } from "./components/ui/add-btn";
import { useFetch } from "@/hooks/useFetch";

export default function Products() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const getData = useFetch(
    import.meta.env.VITE_BASE_URL + "/v1/cd86a97f-1f9c-4828-853b-4085dac3aff9"
  );

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      getData.then((data) => {
        dispatch(fetchDataProduct(data));
      });
    }
    return () => {
      ignore = true;
    };
  }, []);

  const data = useSelector(selectProducts);
  return (
    <Main>
      <div className="flex w-full h-24 items-center gap-2">
        <div className="flex items-center ">
          <input
            id="search-product"
            type="text"
            className="w-full rounded-lg border border-black px-3 pb-[0.2rem] leading-[35px]"
            placeholder="fitur pajangan..."
            onFocus={() => setShowForm(false)}
          />
        </div>
        <div className="w-32 ml-auto">
          <AddButton showForm={showForm} setShowForm={setShowForm} />
        </div>
      </div>
      {showForm && <ProductForm />}
      <ProductTable columns={columns as ColumnDef<unknown, unknown>[]} data={data} />
    </Main>
  );
}
