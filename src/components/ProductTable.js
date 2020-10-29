import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly }) => {
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
        if (product.name.indexOf(filterText) === -1) return;

        if (inStockOnly && !product.stocked) return;

        if (product.category !== lastCategory)
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );

        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });

    return (
        <table className="table-fixed lg:w-1/3 md:w-1/3 sm:w-1/2 my-5">
            <thead>
                <tr className="border-b border-t border-gray-700">
                    <th className="w-1/2 px-4 py-2 text-left">Name</th>
                    <th className="w-1/2 px-4 py-2 text-right">Price</th>
                </tr>
            </thead>

            <tbody>{rows}</tbody>
        </table>
    );
};

export default ProductTable;
