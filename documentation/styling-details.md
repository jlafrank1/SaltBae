# Details on Styling Challenges

It was a risk, but we decided to lean into Alex's confidence to add tailwind to our styling. Using tailwind with npm/express turned out to offer a lot of great learning opportunities and we think looked great!

> For me the struggle was all about learning a new syntax and setting up the proper dependencies for Tailwind. After doing a little homework on what different CSS libraries had to offer I was really struck by the sleekness and modernity that tailwind offered. 

*-Alex*

It was a challenge to bring something new into this, but being able to string together tons of commands and even media queries turned out to be really fun and rewarding. The ability to be able to seamlessly string in vanilla CSS was a very welcome treat as well.


*example code, working with tailwind*
```css
.header {
    @apply flex flex-row items-center justify-between h-12 px-2;
    @apply lg:min-w-0 lg:w-1/2 lg:mx-auto mt-8;
    @apply text-gray-50 bg-blue-400 bg-opacity-30 border border-blue-900 font-bold;
    @apply rounded-lg shadow-lg drop-shadow-lg;
    animation-name: fadeIn;
    animation-duration: 1s;
}
```



---
[**HOME**](../README.md)