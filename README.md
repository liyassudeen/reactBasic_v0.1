Component types:
----------------
1. Class component
2. Stateless component
3. Functional component
NOTE: Styled component is an additional npm package
Limitations:
------------
1. Component name should starts with capital letter
2. Return component should have parent DOM. <React.Fragment> can use for avoid parent DOM
Component Accessibility:
------------------------
-> import & export used to access the components anywhere
-> default, named export are the types
spread operator(...):
---------------------
-> For accessing remainingProps.
-> Need to install (babel --plugins transform-object-rest-spread script.js).
-> 3 ways to config the plugins.
   1. Create a .babelrc file and paste the following.
        {
            "plugins": ["transform-object-rest-spread"]
        }
   2. If we have webpack.config file, then paste the following inside the rules/loaders
        query: {
            plugins: ["transform-object-rest-spread"]
        }
   3. In package.json file, paste the following
        "babel": {
            "plugins": [
                "transform-object-rest-spread"
            ]
        }