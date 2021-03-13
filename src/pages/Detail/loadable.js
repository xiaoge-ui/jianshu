import Loadable from 'react-loadable';
import React from 'react'

const LoadableComponent = Loadable({
    loader:()=>import('./'),
    loading:()=><div> <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3253441216,1530207645&fm=26&gp=0.jpg" alt=""/> </div>
})

export default  ()=><LoadableComponent/>