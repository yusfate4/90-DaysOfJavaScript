# Hello, world!

### This part of the tutorial is about core JavaScript, the language itself.

<p> But we need a working environment to run our scripts and, since this book is online, the browser is a good choice. We’ll keep the amount of browser-specific commands (like alert) to a minimum so that you don’t spend time on them if you plan to concentrate on another environment (like Node.js). We’ll focus on JavaScript in the browser in the next part of the tutorial.
</p>

```js So first, let’s see how we attach a script to a webpage. For server-side environments (like Node.js), you can execute the script with a command like "node my.js". 

The “script” tag
JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.

For instance:
``` html
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>
```


### You can run the example by clicking the “Play” button in the right-top corner of the box above.



![Day01](https://github.com/yusfate4/90-DaysOfJavaScript/assets/65573250/826286cd-c119-4239-ae9c-d7db308e4510)
