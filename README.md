# Next.js Progressbar

A simple Next.js progressbar component using [NProgress](http://ricostacruz.com/nprogress/).

> [I've created this Blog to help you create your own progressbar](https://gosink.in/next-js-make-your-own-progress-bar-indicator-component-easily/)

**Demo**: [https://demo-nextjs-progressbar.vercel.app](https://demo-nextjs-progressbar.vercel.app/)

## How to install?

```bash
npm i nextjs-progressbar
```

## How to use?

After installing the package, import `NextNProgress` in your `pages/_app.js` file:

```js
import NextNProgress from 'nextjs-progressbar';
```

And for rendering add `<NextNProgress />` to your `return()` in `MyApp()`:

```js
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />;
    </>
  );
}
```

### Default Config

If no props are passed to `<NextNProgress />`, below is the default configuration applied.

```jsx
<NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
```

- `color`: to change the default color of progressbar. You can also use `rgb(,,)` or `rgba(,,,)`.
- `startPosition`: to set the default starting position : `0.3 = 30%`.
- `stopDelayMs`: time for delay to stop progressbar in `ms`.
- `height`: height of progressbar in `px`.
- `showOnShallow`: You can choose whether you want the progressbar to be displayed if you're using shallow routing. It takes a boolean. Learn more about shallow routing [in Next.js docs](https://nextjs.org/docs/routing/shallow-routing).

### Advanced Config

#### Adding nonce

We use internal css in this package. If you are using csp, you can add nonce to the `<style>` tag by providing `nonce` prop to `<NextNProgress />` component.

```jsx
<NextNProgress nonce="my-nonce" />
```

#### Custom CSS

You can use `transformCSS` prop to pass custom css.
**Note:** You must return a `JSX.Element` from the function.

```jsx
<NextNProgress
  transformCSS={(css) => {
    // css is the default css string. You can modify it and return it or return your own css.
    return <style>{css}</style>;
  }}
/>
```

#### Other Configs

You can use [other configurations](https://github.com/rstacruz/nprogress#configuration) which NProgress provides by adding a JSON in `options` props.

```jsx
<NextNProgress options={{ easing: 'ease', speed: 500 }} />
```
