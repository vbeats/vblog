## react router

`BrowserRouter` `HashRouter` `Link` `NavLink` `Switch` `Route` `Redirect` `withRouter`

```jsx
// 精确匹配
<Route path="/xx" component={xxx} exact={true}>

<Link to="/xx/:id" to={{pathname:'/oo',state:{xx:oo}}}/>

// 重定向
<Redirect>

// 普通组件

export default withRouter(xxx)
```

## redux

![redux](./images/redux.gif)

`action` `store` `reducer`
