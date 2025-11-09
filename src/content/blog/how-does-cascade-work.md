---
title: "How does Cascade work"
description: "How does Cascade work"
author: "Matteo Gobbo"
tags: ["astro", "blogging", "learning in public"]
language: "en"
publishedDate: null
---

# How does Cascade work

Recently, I was following a course to refresh the knowledge I have about the web and what is related to it.
One of the questions was about Specificity in CSS, the algorithm used by the browsers to determine which CSS value applies to HTML elements.
So I stopped and went back to the documentation, and this is to be a clear explication of multiple concepts; maybe you will find something you don't know or don't remember.

## The Cascade Algorithm

Browsers have basic stylesheets that give default styles to any document. To align the basic style inside different browsers, you should use something that sets common property values for all browsers, such as https://github.com/necolas/normalize.css.

If you use something like TailwindCSS and not CSS classes directly, it uses Preflight, which is a set of base styles. It’s built on top of https://github.com/sindresorhus/modern-normalize. As you can imagine by the name, it’s similar to normalize.css, but, for example, it’s smaller and includes only normalizations for the latest Chrome, Firefox, and Safari.

That said, we can deep dive into what Cascade is. By its name, it’s evident the relevance it has inside the CSS, which means Cascading StyleSheets.

The cascade order is based on origin type. The cascade within each origin type is based on the declaration order of cascade layers within that type. Styles can be declared within or outside of named or anonymous layers, and styles declared outside of a layer are treated as being part of an anonymous last-declared layer.

<br >

Let’s look at what the steps inside the cascading algorithm:
1. **Relevance:** filters the rules whose selector matches the given element
2. **Origin and importance:** sorts these rules according to their importance.
3. **Specificity:** if two selectors have the same origin, the rule with the highest specificity will win
4. **Scoping proximity:** two selectors in the origin layer have the same specificity; the winning declaration is the one whose scoped rule is nearest to the scope root, so the rule that requires the fewest steps up the DOM to reach the scope root
5. **Order of appearance:** the last declaration in the style order is applied
