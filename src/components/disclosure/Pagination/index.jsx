import React from "react";
import { Page, Button } from "./style";


function Pagination({ total, limit, page, setPage }) {
  console.log(total / limit)
  const numPages = Math.ceil(total / limit);

  return (
    <Page>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Page>
  );
}


export default Pagination;
