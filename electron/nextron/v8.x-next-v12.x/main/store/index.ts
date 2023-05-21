import {observable, observe} from "@legendapp/state"
import fs from 'node:fs'

let appFile = './.nxtron/appState.json';
// Load appState from file storage
let initialAppState = {}
try {

  initialAppState = JSON.parse(fs.readFileSync(appFile, 'utf8'))
} catch (e) {
  // ignore
}

// Create an observable object
export const appState = observable(initialAppState || {settings: {theme: 'dark'}})

observe(() => {
  // Save updated appState to file storage
  fs.writeFileSync(appFile, JSON.stringify(appState.get()), 'utf8');
  console.log('appState.json updated');
})
