import React from "react";

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map(pageNumber => (
        <li
          key={pageNumber}
          className='page-item'
          >
            <a href ="!#" className="page-link">
              {pageNumber}
            </a>
          </li>
      ))}
    </div>
  );
};
export default Pagination