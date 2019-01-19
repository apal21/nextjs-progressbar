# Next.js Progressbar
A simple Next.js progressbar component using [NProgress](http://ricostacruz.com/nprogress/).

## How to install?
```
npm i nextjs-progressbar
```

## How to use?
After installing the package, import this in your `pages/_app.js` file.
```
import NextNprogress from 'nextjs-progressbar';
```
And for rendering add `<NextNProgress />` inside `Container` component.

### Default Config
```
<NextNProgress
  color="#29D"
  startPosition="0.3"
  stopDelayMs="200"
  height="3"
/>
```
* `color`: to change the default color of progressbar. You can also use `rgb(,,)` or `rgba(,,,)`.  
* `startPosition`: to set the default starting position : `0.3 = 30%`.
* `stopDelayMs`: time for delay to stop progressbar in `ms`.  
* `height`: height of progressbar in `px`.  

### Advanced Config
You can use [other configurations](https://github.com/rstacruz/nprogress#configuration) which NProgress provides by adding a JSON in `options` props.
```
<NextNProgress
  options={{ easing: 'ease', speed: 500 }}
/>
```
