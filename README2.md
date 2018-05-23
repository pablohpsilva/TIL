## Softbox Frontend stack - Nowadays

* Editor/IDE
   * Eclipse
   * Atom
   * VSCode
* Version Control Systems
   * Git
* Package managers
   * NPM
* Linters
   * Nenhum
* CSS preprocessors
   * Nenhum
* JavaScript preprocessors
   * Nenhum
* Bundlers
   * Gulp
   * Grunt
   * Nenhum
* Unit Testing Tools
   * Nenhum
* CSS frameworks
   * Bootstrap
   * Angular Material
   * Kendo
* JavaScript frameworks
   * Angular 1.4 + Angular Material
   * Vue 2.1 + Vue-Material (0.6.2)
   * Vue 2.3 + Quasar-Framework 0.14

### What does the developer need to know?
* Git basics, one or two bundlers, multiples CSS frameworks (bootstrap + kendo) a JavaScript framework

### What to expect from frontend apps like these?
* "It's working on my machine... Come and see.";
* Variables being created on the fly and attached to a context of an application which you're not sure where starts and where it ends;
* Little to none unit testing;
* "KISStuped" getting in the way of important development cycle;
* "DRY? What's that?"
* Non-sharing company code/components/structure
* Junior code running the project

---

## Softbox Frontend stack - Future

* Editor/IDE
   * Online IDE (like [Stackblitz](https://stackblitz.com/))
   * VSCode
* Version Control Systems
   * Git + [Git Hooks (pre-commit, pre-push, pre-pull)](https://developer.github.com/webhooks/creating/)
   * [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)
   * [Changelog](https://github.com/vuematerial/vue-material/search?utf8=%E2%9C%93&q=changelog&type=) generated via commits
* Package managers
   * [yarn](https://yarnpkg.com/en/) [(*)](https://github.com/pnpm/node-package-manager-benchmark)
* NPM store
   * [Softbox NPM Org](https://www.npmjs.com/pricing)
* Linters
   * [ESLint](https://github.com/standard/eslint-config-standard) + [Standard Javascript](https://standardjs.com/)
   * [SonarLint + Sonar JavaScript](https://www.sonarlint.org/)
   * [stylelint](https://stylelint.io/)
* CSS preprocessors
   * [CSSNext](http://cssnext.io/)
   * [SASS](https://sass-lang.com/)
   * [Styled-Components](https://www.styled-components.com/)
* Javascript preprocessors
   * None until needed, otherwise: [Flow](https://flow.org/) or [TypeScript](https://www.typescriptlang.org/)
* Bundlers
   * [Webpack](https://webpack.js.org/)
* Unit Testing Tools
   * [Jest](https://facebook.github.io/jest/) + [vue-jest](https://github.com/vuejs/vue-jest) **OR** [Enzyme(react)](https://github.com/airbnb/enzyme)
* Code Coverage Tools
   * [Jest](https://facebook.github.io/jest/)
* CSS frameworks
   * None until needed
* JavaScript frameworks
   * React
   * React-Native + [Native Base](https://nativebase.io/)
   * Vue
   * [Quasar-framework](http://quasar-framework.org/components/)
* State management
   * None until needed, otherwise: [RxJS](http://reactivex.io/rxjs/), [Vue Event Bus](https://vuejs.org/v2/style-guide/#Non-flux-state-management-use-with-caution) or Flux-like pattern ([Redux](https://redux.js.org/), [vuex](https://vuex.vuejs.org/en/), [MobX](https://mobx.js.org/), ...)
* Code generators
   * [BashJS](https://github.com/vuematerial/vue-material/blob/dev/build/new-component.js) scripts
   * Scaffold and Snippets tools ([Vetur](https://github.com/vuejs/vetur), [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets), [React native tools](http://www.reactnative.com/react-native-tools-extension-for-visual-studio-code/))
* Extra
   * [JAM Stack](https://jamstack.org/)
   * Use [CDNs](https://bunnycdn.com/)
   * PWA **techniques**

## What does the developer need to know?
* Git basics + Git Flow flow, one bundler (when needed), how to type something on the keyboard, how to read, how to test simple stuff and a JavaScript framework.

### What to expect from frontend apps like these?
* [Fast] Due to BashJS scripts, Scaffolding and Snippets, with a single command line code will be spitted out, ready to use;
* [Fast, Quality] Due to a common Softbox NPM organization repository, developers can now install/import components and structures directly from somewhere safe, speeding up the development;
* [Fast, Quality, Simplicity] Using CSS preprocessors like SASS will reduce coding time when CSS is needed and make it optimal, since SASS will output the best CSS solution based on what you wrote;
* [Quality] Jest and simple unit testing and automated code coverage report will guarantee the code will run. Since Jest can create [Snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html), developers across company can run the exact same test and compare it to what was originally defined (no more "It's working on my machine" shit);
* [Quality] Using flows like Git Flow will guarantee a pattern on branch naming, making it easy to fix/find anything on Gitlab;
* [Quality] Using Git hooks and generating changelogs will make it easier to people see what changed and how the project is going;
* [Quality, Consistency, Simplicity, Fast] Using Linters as IDE extensions, the code will look more consistent across projects, will train people to do what is right, will avoid errors, will avoid code duplications, dead code and so on. It so simple! All you need to do is install the extensions and 3 packages as development dependency;
* [Scalability] Hosting the frontend on CDNs servers will make sure our client gets the application as fast as it can be. Always;
* [Scalability] Applying PWA techniques on frontend applications will create cache of it on any of the client's device. The application will be there for them working even with no internet connection;
* [Scalability] Using JAM Stack will decrease the issue Frontend developers has, because they can focus on their job: **frontend development**;
* [Fast, Quality, Scalability, Simplicity] One word: webpack. It's all there. Configured and ready to use. Do you want to change it and perf it? Call someone who knows what they are doing first, please. Would you facelift with a dentist?

Nothing written above should work if **people are not trained to know what to use, how to use and when to use ANY technology**. It doesn't really matter if we are using Vanilla Javascrit, Angular 1.5 or React/Vue latest. It doesn't really matter if we are using Vanilla CSS, SASS or JSCSS. **Nothing** will matter, because we have a human fator on the equation. We can reduce the technology friction, speed up development, enhance organization and architecture, but nothing will matter if people don't understand and see value on what they are doing.

# Disclaimer
Each technology will have ramifications. E.G.: If React is used, a second CSS/Component framework can be used, just like an application state manager, a resource manager, validators, etc.