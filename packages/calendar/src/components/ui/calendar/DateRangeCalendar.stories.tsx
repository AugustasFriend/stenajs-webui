import { Store, withState } from "@dump247/storybook-state";
import { storiesOf } from "@storybook/react";
import { addDays } from "date-fns";
import * as React from "react";
import { DateRangeCalendar } from "@stenajs-webui/calendar";
import { DateRangeFocusedInput } from "@stenajs-webui/calendar";
import { setDayStateValue } from "@stenajs-webui/calendar";

let statePerMonthWithTwoWeeksEnabled = {};
for (let i = 1; i < 7; i++) {
  statePerMonthWithTwoWeeksEnabled = setDayStateValue(
    statePerMonthWithTwoWeeksEnabled,
    addDays(new Date(), i),
    {
      highlights: ["enabled"]
    }
  );
}
for (let i = 10; i < 14; i++) {
  statePerMonthWithTwoWeeksEnabled = setDayStateValue(
    statePerMonthWithTwoWeeksEnabled,
    addDays(new Date(), i),
    {
      highlights: ["enabled"]
    }
  );
}

interface State {
  startDate?: Date;
  endDate?: Date;
  focusedInput: DateRangeFocusedInput;
}

storiesOf("calendar/Calendar/DateRangeCalendar", module)
  .add(
    "standard",
    withState<State>({
      startDate: undefined,
      endDate: undefined,
      focusedInput: "startDate"
    })(({ store }: { store: Store<State> }) => (
      <DateRangeCalendar
        startDate={store.state.startDate}
        endDate={store.state.endDate}
        focusedInput={store.state.focusedInput}
        setStartDate={startDate => store.set({ startDate })}
        setEndDate={endDate => store.set({ endDate })}
        setFocusedInput={focusedInput => store.set({ focusedInput })}
      />
    ))
  )
  .add(
    "with today highlighted",
    withState<State>({
      startDate: undefined,
      endDate: undefined,
      focusedInput: "startDate"
    })(({ store }: { store: Store<State> }) => (
      <DateRangeCalendar
        highlightToday
        startDate={store.state.startDate}
        endDate={store.state.endDate}
        focusedInput={store.state.focusedInput}
        setStartDate={startDate => store.set({ startDate })}
        setEndDate={endDate => store.set({ endDate })}
        setFocusedInput={focusedInput => store.set({ focusedInput })}
      />
    ))
  )
  .add(
    "with default highlights",
    withState<State>({
      startDate: undefined,
      endDate: undefined,
      focusedInput: "startDate"
    })(({ store }: { store: Store<State> }) => {
      return (
        <DateRangeCalendar
          startDate={store.state.startDate}
          endDate={store.state.endDate}
          focusedInput={store.state.focusedInput}
          setStartDate={startDate => store.set({ startDate })}
          setEndDate={endDate => store.set({ endDate })}
          setFocusedInput={focusedInput => store.set({ focusedInput })}
          defaultHighlights={["disabled"]}
          statePerMonth={statePerMonthWithTwoWeeksEnabled}
        />
      );
    })
  )
  .add(
    "with multiple months",
    withState<State>({
      startDate: undefined,
      endDate: undefined,
      focusedInput: "startDate"
    })(({ store }: { store: Store<State> }) => (
      <DateRangeCalendar
        numMonths={3}
        startDate={store.state.startDate}
        endDate={store.state.endDate}
        focusedInput={store.state.focusedInput}
        setStartDate={startDate => store.set({ startDate })}
        setEndDate={endDate => store.set({ endDate })}
        setFocusedInput={focusedInput => store.set({ focusedInput })}
      />
    ))
  )
  .add(
    "with multiple rows",
    withState<State>({
      startDate: undefined,
      endDate: undefined,
      focusedInput: "startDate"
    })(({ store }: { store: Store<State> }) => (
      <DateRangeCalendar
        numMonths={6}
        monthsPerRow={3}
        startDate={store.state.startDate}
        endDate={store.state.endDate}
        focusedInput={store.state.focusedInput}
        setStartDate={startDate => store.set({ startDate })}
        setEndDate={endDate => store.set({ endDate })}
        setFocusedInput={focusedInput => store.set({ focusedInput })}
      />
    ))
  );