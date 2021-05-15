import Pagination from "@material-ui/lab/Pagination";
import './CustomPagination.css';

const CustomPagination = ({setPage, numOfPages = 10}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    };

    return ( 
    <div className="pagination">
        <Pagination 
            count={numOfPages} 
            onChange={(e) => handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
            color="primary"
         />
    </div>
    );
};

export default CustomPagination;