import React, { useState } from "react"
import { action } from "@storybook/addon-actions"

type NumInputProps = {
  min?: number
  max?: number
  defaultValue?: number
  title: string
  render: (value: number) => JSX.Element
}

export default function NumInput({
  min = 1,
  max = 100,
  defaultValue = 10,
  title,
  render,
}: NumInputProps) {
  const [value, setValue] = useState(defaultValue)
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "grey",
          display: "flex",
          marginBottom: "10px",
        }}
      >
        <p style={{ display: "inline" }}>{title.toUpperCase()}</p>
        <input
          style={{
            border: "2px white solid",
            display: "inline",
            marginLeft: "20px",
          }}
          type="number"
          onInput={(e) => {
            action(`${title}: ${value}`, { clearOnStoryChange: true })
            setValue(e.currentTarget.valueAsNumber)
          }}
          title={title}
          min={min}
          max={max}
          step={1}
          defaultValue={defaultValue}
        />
      </div>

      {render(value)}
    </React.Fragment>
  )
}
