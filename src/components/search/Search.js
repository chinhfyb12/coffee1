import React from 'react';
import { connect } from 'react-redux';
import './Search.css';

function Search(props) {
    return (
        <div className="search-cpn">
            <div className="row search-cpn__form justify-content-center align-items-center m-0">
                <form>
                    <div className="form-group d-flex m-0">
                        <input type="search" className="form-control" name="fSearch" placeholder="Tìm kiếm sản phẩm" />
                        <div className="btn search-btn">Tìm</div>
                    </div>
                </form>
                <div className="close-btn btn" onClick={ () => props.changeStatusFormSearch() }><i className="fas fa-times"></i></div>
            </div>
            <div className="row search-cpn__span"  onClick={ () => props.changeStatusFormSearch() }></div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeStatusFormSearch: () => dispatch({type: 'STATUS_FORM'})
    }
}

export default connect(null, mapDispatchToProps)(Search);