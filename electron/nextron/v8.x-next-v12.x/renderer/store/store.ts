import { observable } from "@legendapp/state"
import { persistObservable } from "@legendapp/state/persist";

// Create an observable object
export const state = observable({ settings: { theme: 'dark' } })

// Automatically persist state. Refresh this page to try it.
persistObservable(state, { local: 'nextron' })
