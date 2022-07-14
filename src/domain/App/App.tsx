import { FC } from 'react'
import cn from 'classnames'

import env from 'constants/env'
import withRenderingTest from 'hocs/withRenderingTest'

import { StyledApp } from './App.style'

const App: FC = () => {
  return (
    <StyledApp className={cn({ __App__: env.debugClassNameEnabled })}>
      <h1>App</h1>
    </StyledApp>
  )
}

export const testContent = 'app test content'
export default withRenderingTest(App, testContent)
