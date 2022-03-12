import React, {useState} from "react";
import GlobalFilter from "@components/Disclosure/DisclosureFilter/GlobalFilter"
import GlobalList from "@components/Disclosure/DisclosureList/GlobalList"
import Pagination from "@components/Disclosure/Pagination";
import globalSample from "@utils/goDisclosureData";

const GoDisclosure = () => {
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const disclosureList = globalSample.list;

  return (
    <div className="disclosure">
      <GlobalFilter />
      <GlobalList 
        list={disclosureList} 
        offset={offset} 
        limit={limit}
      />
      <Pagination
        total={disclosureList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default GoDisclosure;
