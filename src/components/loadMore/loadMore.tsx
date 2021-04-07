import React, { useState } from "react";
import { Button } from "..";

function LoadMore({
  label,
  onClick,
  classSelector,
  initialValue,
}: LoadMoreProps) {
  const [pageNumber, setPageNumber] = useState(initialValue);
  const loadMore = () => {
    setPageNumber(pageNumber + 1);
    return onClick(pageNumber);
  };

  return (
    <Button label={label} classSelector={classSelector} onClick={loadMore} />
  );
}

interface LoadMoreProps {
  onClick: (page: number) => void;
  classSelector: string;
  label: string;
  initialValue: number;
}

export default LoadMore;
