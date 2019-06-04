import { Store, withState } from "@dump247/storybook-state";
import { Inline } from "@stenajs-webui/core";
import { storiesOf } from "@storybook/react";
import { addDays } from "date-fns";
import * as React from "react";
import { DateRangeCalendarOnChangeValue } from "../calendar/features/DateRangeSelection";
import { DateRangeInput } from "./DateRangeInput";

interface DateRangeState {
  value: DateRangeCalendarOnChangeValue;
}

storiesOf("calendar/Input/DateRangeInput", module)
  .add(
    "standard",
    withState<DateRangeState>({
      value: {
        endDate: undefined,
        startDate: undefined
      }
    })(({ store }: { store: Store<DateRangeState> }) => (
      <div style={{ display: 'inline-block'}}>
        <DateRangeInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      </div>
    ))
  )
  .add("empty", () => (
    <div style={{ display: 'inline-block'}}>
      <DateRangeInput value={{}} />
    </div>
  ))
  .add("with preselected value", () => (
    <div style={{ display: 'inline-block'}}>
      <DateRangeInput
        value={{ startDate: new Date(), endDate: addDays(new Date(), 5) }}
      />
    </div>
  ));