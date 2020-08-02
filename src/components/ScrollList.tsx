/* eslint-disable react/prop-types */
import React from "react"
import InfiniteLoader from "react-window-infinite-loader"
import { FixedSizeList as List } from "react-window"

type Props<TResult> = {
  hasNextPage: boolean
  isNextPageLoading: boolean
  items: TResult[]
  loadNextPage: (
    startIndex: number,
    stopIndex: number
  ) => Promise<TResult> | null
  height: number | string
  width: number | string
  itemSize: number
  children: makeItemRow
}

export type makeItemRow = ({
  index,
  style,
  isItemLoaded,
}: {
  index: number
  style: React.CSSProperties
  isItemLoaded: boolean
}) => JSX.Element

type ListRow = ({
  index,
  style,
}: {
  index: number
  style: React.CSSProperties
}) => JSX.Element

// eslint-disable-next-line @typescript-eslint/no-empty-function
const loadNothing: (startIndex: number, stopIndex: number) => null = () => null

/**
 * Generic Scrollable List.
 */
export default function ScrollList<T>({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
  children: makeRow,
  ...props
}: Props<T>) {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? loadNothing : loadNextPage

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length

  const Item: ListRow = ({ index, style }) =>
    makeRow({ index, style, isItemLoaded: isItemLoaded(index) })

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          itemCount={itemCount}
          onItemsRendered={onItemsRendered}
          ref={ref}
          {...props}
        >
          {Item}
        </List>
      )}
    </InfiniteLoader>
  )
}
