import { Dispatch, SetStateAction } from "react"

export type SwitchType = {
  view: "list" | "grid",
  setView: Dispatch<SetStateAction<"list" | "grid">>,
}