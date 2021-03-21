import React from 'react';
import FilterView from "./FilterView";

const ProductsFilter = ({products, filter, setFilter}) => {

    let [showFilter, setShowFilter] = React.useState(false);

    const updateFilter = (attribute, value) => {
        let updatedFilter = filter;
    
        if (filter.restrictions[attribute]) {
            if (filter.restrictions[attribute].includes(value)) {
                updatedFilter.remove(attribute, value);
            } else {
                updatedFilter.add(attribute, value);
            }
        } else {
            console.log("FALSE");
            updatedFilter.add(attribute, value);
        }
        setFilter(updatedFilter);
    }

    const clearFilter = () => {
        let updatedFilter = filter;
        updatedFilter.clear();
        setFilter(updatedFilter);
    }

    const filterContent = showFilter ? <FilterView products={products} filter={filter} onUpdate={updateFilter} onClear={clearFilter} /> : "";

    return (  
        <div className="products-filter">
            <button onClick={()=>{setShowFilter(!showFilter)}}>Filter</button>
            {filterContent}
        </div>  
    );
}
 
export default ProductsFilter;