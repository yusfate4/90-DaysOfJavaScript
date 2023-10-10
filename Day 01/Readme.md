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
You can run the example by clicking the “Play” button in the right-top corner of the box above.

The <script> tag contains JavaScript code which is automatically executed when the browser processes the tag.

Modern markup
The <script> tag has a few attributes that are rarely used nowadays but can still be found in old code:

The type attribute: <script type=…>
The old HTML standard, HTML4, required a script to have a type. Usually it was type="text/javascript". It’s not required anymore. Also, the modern HTML standard totally changed the meaning of this attribute. Now, it can be used for JavaScript modules. But that’s an advanced topic, we’ll talk about modules in another part of the tutorial.

The language attribute: <script language=…>
This attribute was meant to show the language of the script. This attribute no longer makes sense because JavaScript is the default language. There is no need to use it.


![Day01](https://github.com/yusfate4/90-DaysOfJavaScript/assets/65573250/826286cd-c119-4239-ae9c-d7db308e4510)
