# Recipe Keeper - Landing Page

This repo contains the folders and files that make the landing page for Recipe Keeper.

## Technologies

* HTML/CSS
* TailwindCSS

## Run the development server 

1. Clone the repo 

```
git clone https://github.com/juanzenn/recipe-keeper-landing
```

2. Install the dependencies
```
yarn
```

3. Run the postcss-cli for watching changes
```
postcss styles/main.css -o dist/main.css
```

Now you can make changes to styles/main.css. PostCSS will compile any Tailwind directives you add.

## WIP 

I'm working on minifying every file. Looking to use Webpack or Gulp for the tasks. Also, need to read about using the purge of Tailwind for bundle size.