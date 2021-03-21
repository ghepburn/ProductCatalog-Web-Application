import React, {useState} from 'react';


/**
 * 
 * @param {array} products
 * @param {array} children
 * @param {object} displaySettings
 *  
 * @returns Context of pages -- ex: Pages = [[prod1, prod2, prod3], [prod1, prod2, prod3]]
 */
const PaginatedPage = ({products, children, displaySettings}) => {

    let paginatedProducts = [];

    const rowsPerPage = displaySettings.getRowsPerPage();
    const productsPerRow = displaySettings.getItemsPerRow();
    const numberOfProducts = products.length;
    const numberOfRows = Math.ceil(numberOfProducts/productsPerRow);
    const numberOfPages = Math.ceil(numberOfRows/rowsPerPage);

    // Page navifation
    let [pageNumber, setPageNumber] = useState(1);

    const incrementPage = () => {
        if (pageNumber < numberOfPages) {
            setPageNumber(pageNumber + 1);
        }
    }
    const decrementPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    }

    /** Product Separation / Page Setup
     * Step #1: Split products into rows
     * Step #2: Split Rows into pages
     * Step #3: only pass one page as products prop
     *  */ 

    // Step #1: Split products into rows
    if (products.length) {
        let productRows = [];
        let count = 0;
        let productCount = 0;
        let row = [];
        products.map((product) => {
            count += 1;
            productCount += 1;
            row.push(product);

            // to grab leftover products
            if (productCount === products.length) {
                // Fill last row with blanks
                while (count < productsPerRow) {
                    const blank = {};
                    row.push(blank);
                    count += 1;
                }
            }

            if (count === productsPerRow) {
                const result = row;
                count = 0;
                row = [];

                productRows.push(result);
            }
        });

        // Step #2: split rows into pages
        // Ex: Pages = [Page1, Page2, Page3, Page4...]
        let pages = [];
        let page = [];
        let rowCount = 0;
        let i = 0;
        for (let row of productRows) {
            i += 1;
            rowCount += 1;
            page.push(row);
            if (i === rowsPerPage || rowCount === productRows.length) {
                pages.push(page);
                page = [];
                i = 0;
            }
        }

        // Step #3: Identify one page to pass
        paginatedProducts = pages.length ? pages[pageNumber-1] : [];
    }

    const paginatedPageChildren = React.Children.toArray(children).map((child) => {
        return(
            React.cloneElement(child, {products:paginatedProducts})
        );
    });


    return (  
        <div className="paginated-page">

             {paginatedPageChildren}

             <div className="paginaton-controls">
                <button onClick={decrementPage}>Back</button>
                <button onClick={incrementPage}>Next</button>
             </div>
        </div>
    );
}
 
export default PaginatedPage;