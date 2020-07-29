import React, { ReactNode } from "react"

type GridProps = {
  children?: ReactNode
}

/**
 * Display a list of pokemon cards.
 */
export default function Grid({ children }: GridProps) {
  return (
    <div className={"CardGrid"}>
      {React.Children.map(children, (Node) => <li>{Node}</li>) || (
        <p>{"Nothing to see here"}</p>
      )}
    </div>
  )
}
