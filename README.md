# 👨🏻‍🔬 MADLAB 🧪

> A collection of experiments and explorations of notable frameworks, templates, or tools.

While there's some great collections of frameworks/templates/tools for you to go out and explore ([Awesome React Components](https://github.com/brillout/awesome-react-components) for example), sometimes the projects not ready to go or inaccessible out of the box. These guides beyond a wall of links too often don't have any guidance their real world usage or detailed pros/cons of working with them. 

Thus, the main purpose of MADLAB is to document my own explorations and experiments with these tools, and provide a bit of a guide to help you get started with them with some sensible standards baked in to help you get started.

As [veteran in the web development field](https://dev.sjhomer.com), I've categorically failed to substantiate my views and insights in support of the open source community. I'm hoping to change that by documenting my efforts here. Given the explosion of AI tooling in early 2023, and evolution of ways to build web applications, I desire empowering developers new and old alike with understanding of tools available to them, and how to use them effectively. 

With AI code generation 🤖 ([Copilot](https://github.com/features/copilot)/[GPT4](https://openai.com/product/gpt-4)/etc) is entering our field full force, it's more important than ever to stay ahead of the curve in what these tools can't accomplish. By learning and understand how to leverage these frameworks and tools to your advantage, AI can assist a great deal, yet are not helpful if you don't have the means to guide it in the right direction and build upon your own ideas. 💪🏻

## 📒 Examination Approach

Within this repo and documented below, you will find dedicate project folders to review alongside my summaries and insights.

Each of the project will follow into the following categories and states to help inform you about their current state and purpose. While I aim to be as objective as possible, I'm only human, and my own biases and preferences will likely shine through.

### Project Type

| 🗺️ **Exploration** | 🔬 **Experiment** |
| --- | --- |
| A project I'm exploring which follows closely to an out of the box template/configuration with minimal changes. These are more likely full frameworks or templates that were inventive enough to warrant a closer look. | A project I'm experimenting with, which may be a bit more opinionated, and any limitations or issues in trying to achieve a reasonable starting point. |

### State of the Project

| ✅ **Clear** | 🚧 **WIP** | ❌ **Failed** |
| --- | --- | --- |
| A sensible outcomes was reached, and the project is in a good state to use as a starting point. | A project which may need some TLC before it's ready to use as a starting point, but worth testing out. | A project which failed to achieve a reasonable outcome, and is not worth using as a starting point, as well as describing why it failed. |

### Architectural Flavours
When possible, many projects here will favour the following tools or libraries.

**[pnpm](https://pnpm.io/)** After your second npm install, the wastefulness of it gets old quick! Who wants to download modules for the thousand'th time, eh? pnpm is a great alternative to npm and yarn, and is a great way to save time and disk space. Unless there are blockers to leveraging this, pnpm will be the default package manager used in these projects.

**[TypeScript](https://www.typescriptlang.org/)** For a few years I held off on fully embracing TS, opting for a JSDOC TS approach to wanting to leave js/jsx fully behind... Yet, its critical adoption is undeniable over 2022/2023. With its advancements in inference and generics make it much more accessible, and I couldn't deny the benefits from making the switch fully. The odd project may be in JS, but TS will be the default. 

**[React](https://react.dev/)** A framework that needs no introduction. Having use it professionally for a long while, my affinity and fondness for it makes it my go to for UI development. While I'm not opposed to other frameworks, the good parts of React have been worth it for me to stick with it, so most solutions will lean towards this vs other frameworks.

**[Legend-state](https://github.com/LegendApp/legend-state)** State management in general has a lot of mixed baggage, and to offen adapting one toolset locks you in and limits your ability to mix and match implementations. Legend-state is a great library that provides a lot of flexibility and power, while being framework agnostic (though they have React hook integrations). It's been [battle tested by its creators for almost a decade](https://www.legendapp.com/open-source/state/why/) and has crazy performance. Its minimal and dead simple, while being able to use state away from Context Providers which is a huge win, and why this is my go to for state management now.

### Review Structure

Each project will have a README.md file that will contain the following sections:
```markdown
## [type] [state] [project name] [version(s)]
[description]
[learnings]
* ...
* ...
[conclusion]
* ...
```

# Electron Projects
Out of the box the default electron template leaves much to be desired. Thankfully there are a lot of great efforts by the community to make building these more straightforward, like incorporating your favourite frameworks, but also taking a lot of the pain out of building the app bundles too!

As we move into growth of open source LLMs, the ability to build desktop apps with ease running these models offline and more customized and varied uses case, such as allowing clear privacy when leveraging sensitive material, this makes Electron is a great toolset to support these efforts.

* [Nextron](#nextron)
* [Electron Forge](#electron-forge)

## [Nextron](https://github.com/saltyshiomix/nextron)

> ⚡ Next.js + Electron ⚡

THe aptly named framework Nextron blends the power of Next.js with Electron, to provide a great starting point for building desktop apps in one of the most popular frameworks for building web apps.

As of `May 2023`, the latest available version v8.x caps out at running Next `v12.x`, toting a future v9.x that will introduce `v13.x` support, but that didn't stop me from hacking to see what I could produce!

### 🗺️ ✅ [Nextron `v8.x` Next `v12.x` /pages](./electron/nextron/v8.x-next-v12.x/README.md)

Nextron v8.x official create-nextron-app template supports Next v12.x and various additional considerations. While you can only start with a single pre-defined template with a singular approach, you're able to peek at through their [template library](https://github.com/saltyshiomix/nextron/tree/main/examples) and blend them together without much issue.

```bash
npx create-nextron-app MY_APP --example basic-typescript
```

In this example, I've combined the following features:
* TypeScript
* IPC Communication
* State Management with Legend-State
* Emotion CSS-in-JS

### 🔬🚧 [Nextron `v8.x` Next `v13.x` /pages](./electron/nextron/v8.x-next-v13.x-pages/README.md)

This is a clone of the extended templatee with Next v12.x, but with v13.x swapped in, continuing to leverage with serving content via the `/pages` directory.

### 🔬❌ [Nextron `v8.x` Next `v13.x` /app](./electron/nextron/v8.x-next-v13.x-app-router/README.md)

As Nextron v9.x isn't available as May 2023 in any public away, I manually attempted to showhorn the [Vercel App Playground](https://github.com/vercel/app-playground) into Nextron with app routing to no avail. 

**Learnings:**
* Issues with tsconfig pathing alongside tailwind caused some hiccups that were unrecoverable. Something with postcss/webpack wasn't playing nice even from following the [official Nextron tailwind template config](https://github.com/saltyshiomix/nextron/tree/main/examples/with-tailwindcss), it just wouldn't come together
* More to the point, while Next v13 does run and is able to produce a homepage for the App Playground, the app routing does not work whatsoever. Likely do to all the internals of how Next app routing is leveraging SSR and something Nextron isn't able to accommodate for out of the box, understandably. 

> **Considerations:** I'll be waiting to see how a Nextron v9.x release with official Next v13 support improves things, as it's not viable at present.

## [Electron Forge](https://www.electronforge.io/)

> A complete tool for building modern Electron applications.
> 
> Electron Forge unifies the existing (and well maintained) build tools for Electron development into a simple, easy to use package so that anyone can jump right in to Electron development.

Electron Forge is a great toolset that provides a lot of flexibility and power, while being framework agnostic. Leveraging of course their TypeScript template, it offers a better springboard for building Electron apps than the default Electron template, and by exposing the webpack controls allows you to fine tune and build out your app as you desire.

### 🗺️ ✅ [Electron Forge `v6.x`](./electron/electron-forge/v6.x/README.md)

```bash
npm init electron-app@latest my-new-app -- --template=webpack-typescript
```

# Monorepo Projects

Sometimes individual projects will suite your needs, but once complexity or your team grows, it often becomes essential to structure and manage your work from a monorepo instead to keep things sane.

There are a slew of options to leverage, from npm/yarn/pnpm workspaces, to lerna, to nx, and more. Each have their own pros and cons, and it's important to understand what your needs are to make the right choice.

## Lerna vs. Nx
While [Lerna is now operated by Nrwl (who operate Nx)](https://lerna.js.org/docs/lerna-and-nx), each have their own unique benefits. 

`Nx` is a great option for monolithic projects where each package support the whole, while `Lerna` more desirable for projects that are comprised of more independent packages that can be versioned and published separately, such as a library of plugins. 

The nice part is that you can use both together, like benefitting from Nx's caching to reduce efforts working in Lerna! The Nx site has a [great guide on how to do so](https://nx.dev/guides/using-nx-with-lerna). 🥳

## Nextron plus Web
The ability to use one code base for multiple purposes is often a great advantage when well executed. With Nextron having Next inside Electron, it's only natural to question how to build a web app and electron app with the least effort.

You could say, "well why don't you just iframe your web app in electron?", and that may be a fair resolution for your needs, but there's a lot of opportunities for an actual installable native app for users to leverage vs only a web pqne.

For this reason, this project explores what a balanced structure allows to build the bulk of your experience once, and allow a service layer to control either the web or native builds.
