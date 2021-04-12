/* eslint-disable no-plusplus */
import React, { ReactChild, ReactChildren } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./skeleton.module.scss";

function Skeleton({
  width,
  height,
  rows,
  columns,
  show,
  children,
}: SkeletonProps) {
  const totalelements = rows && columns ? rows * columns : 1;
  const divStyles = {
    width: `${width}px`,
    height: `${height}px`,
  };
  return (
    <>
      {show ? (
        <>
          {totalelements > 1 ? (
            <div className={styles.skeletonWrapper}>
              {[...Array(totalelements)].map(() => (
                <div
                  key={uuidv4()}
                  style={divStyles}
                  className={styles.skeleton}
                />
              ))}
            </div>
          ) : (
            <div className={styles.skeleton} />
          )}
        </>
      ) : (
        ""
      )}
      {children}
    </>
  );
}

interface SkeletonProps {
  show: boolean;
  children?:
    | ReactChild
    | ReactChildren
    | Array<ReactChild>
    | Array<ReactChildren>;
  rows?: number;
  columns?: number;
  width?: number;
  height?: number;
}
Skeleton.defaultProps = {
  children: null,
  rows: 1,
  columns: 1,
  width: 1,
  height: 1,
};
export default Skeleton;
