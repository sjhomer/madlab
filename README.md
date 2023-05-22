# 👨🏻‍🔬 MADLAB 🧪

> Putting noteworthy frameworks/templates/tools to the test in a real-world scenario.

Although there are great collections of frameworks/templates/tools to explore (such as [Awesome React Components](https://github.com/brillout/awesome-react-components)), sometimes the projects are not ready-to-use or may require additional configuration. Moreover, there's no advice on how to apply these projects in everyday scenarios or the advantages and disadvantages of using them. MADLAB's will focus on documenting my explorations and experiments with these tools, offering sensible standards to help you get started.

Despite my [veteran status in web development](https://dev.sjhomer.com), I have been unable to substantiate my views and insights in support of the open source community. By documenting my efforts here, I hope to change that. As we witness the rise of AI tooling and evolving methods for web application development in 2023, my mission is to equip developers, both new and old, with a deep understanding of the tools available to them and how to use them effectively. 

With AI code generation tools like [Copilot](https://github.com/features/copilot) and [GPT4](https://openai.com/product/gpt-4) becoming more popular, it's important to know their limitations and remain ahead of the curve. AI can provide significant assistance, but only if you learn to take advantage of the right frameworks and tools and have the ability to direct it towards your own ideas. 💪🏻

## Real World Application - The AI Powered Editor

The traditional [TODO app](https://todomvc.com/) was a helpful way to get started with a new framework, but it was never a good example of a real-world project. As AI tooling gains popularity, chatbot interfaces are becoming overdone. Nonetheless, people will not solely rely on chatbots for AI generation in the coming years.

We aspire to employ AI beyond conversational purposes. We require both usefulness and enjoyment to develop our ideas and content. Tools like Notion, Confluence, and Obsidian make working with content both efficient and enjoyable. Because they were not originally designed with AI concepts in mind, their ability to fully leverage AI tools will be restricted.

> The purpose of the MADLAB experiments is to examine how an AI Powered Editor (APE) can use AI to simplify the process of developing your ideas in a real-world situation. Though ambitious and broad, exploring this goal will help us understand approach limitations and how to use them to our advantage.

### 📝 APE Requirements

The primary goal of APE is to provide a simple and enjoyable way to develop your ideas. To achieve this, APE must meet the following requirements:

- **📝 Content Creation** - APE must provide a way to create and edit content.
- **📚 Content Management** - APE must provide a way to organize and manage content, including importing and exporting.
- **🔍 Content Discovery** - APE must provide a way to search and discover content.
- **📝 Content Generation** - APE must provide a way to generate content.
- **📝 Content Collaboration** - APE must provide a way to collaborate on content.
- **📝 Content Sharing** - APE must provide a way to share content.
- **📝 Content Security** - APE must provide a way to secure content.
- **📝 Content Privacy** - APE must provide a way to protect content privacy.
- **📝 Content Versioning** - APE must provide a way to version content, and allow restoration of earlier iterations.
- **📝 Content Insights** - APE must provide a way to gain insights from content.
- **📝 Content Publishing** - APE must provide a way to publish content.

## 📒 Examination Approach

My summaries and insights on various APE iterations are available in this repository, organized into different frameworks, each with its own project folder. Shared elements will naturally develop to support APE, and they will be consolidated for streamlined and reusable use across experiments.

To give you information about their present state and purpose, the projects will be categorized and organized. Although I aim for impartiality, my own biases and preferences may be apparent. "To err is human."

### Project Type

| 🗺️ **Exploration** | 🔬 **Experiment** |
| --- | --- |
| A project I'm exploring which follows closely to an out of the box template/configuration with minimal changes. These are more likely full frameworks or templates that were inventive enough to warrant a closer look. | A project I'm experimenting with blending concepts together, which may be a bit more opinionated, and any limitations or issues in trying to achieve a reasonable starting point. |

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

A natural fit for building desktop apps, Electron offers a lot of flexibility to approach the requirements of APE.

* The ability to be offline and run locally
* Access to the file system, allowing content to remain private and secure
* The ability to leverage AI models locally, without the need to send data to a server

In building with Electron however, the [default template](https://www.electronjs.org/docs/latest/tutorial/quick-start) leaves much to be desired. Thankfully there are a lot of great efforts by the community to make building these more straightforward, some incorporating your favourite frameworks, but also taking a lot of the pain out of building the app bundles too!

As we move into growth of open source LLMs, the ability to build desktop apps with ease running these models offline and more customized and varied uses case, such as allowing clear privacy when leveraging sensitive material, this makes Electron is a great toolset to support these efforts.

* **[Electron Forge](#electron-forge)** "Electron Forge unifies the existing (and well maintained) build tools for Electron development into a simple, easy to use package so that anyone can jump right in to Electron development."
* **[Nextron](#nextron)** This aptly named framework blends the power of Next.js with Electron, to provide a great starting point for building desktop apps alongside one of the most popular web app frameworks.

## [Electron Forge](https://www.electronforge.io/)

> A complete tool for building modern Electron applications.

Electron Forge is a great toolset that provides a lot of flexibility and power, while being framework agnostic. Leveraging of course their TypeScript template, it offers a better springboard for building Electron apps than the default Electron template, and by exposing the webpack controls allows you to fine tune and build out your app as you desire.

### 🗺️ ✅ [Electron Forge `v6.x`](./electron/electron-forge/v6.x/README.md)

```bash
npm init electron-app@latest my-new-app -- --template=webpack-typescript
```

## [Nextron](https://github.com/saltyshiomix/nextron)

> ⚡ Next.js + Electron ⚡

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
