import React from 'react'
import './index.css'

class Pagination extends React.Component {
  state = {
    pageNo: 1,
  }

  onNextPage = () => {
    const {apiCallback, totalPages} = this.props
    this.setState(
      prevState => {
        if (prevState.pageNo < totalPages) {
          return {pageNo: prevState.pageNo + 1}
        }
        return null
      },
      () => {
        const {pageNo} = this.state
        apiCallback(pageNo)
      },
    )
  }

  onPrevPage = () => {
    const {apiCallback} = this.props
    this.setState(
      prevState => {
        if (prevState.pageNo > 1) {
          return {pageNo: prevState.pageNo - 1}
        }
        return null
      },
      () => {
        const {pageNo} = this.state
        apiCallback(pageNo)
      },
    )
  }

  render() {
    const {pageNo} = this.state
    const {totalPages} = this.props

    return (
      <div className="pagination-container">
        <button
          type="button"
          className="control-btn"
          onClick={this.onPrevPage}
          disabled={pageNo === 1}
        >
          Prev
        </button>
        <p className="page-no">{pageNo}</p>
        <button
          type="button"
          className="control-btn"
          onClick={this.onNextPage}
          disabled={pageNo === totalPages}
        >
          Next
        </button>
      </div>
    )
  }
}

export default Pagination
