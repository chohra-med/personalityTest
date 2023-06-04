import {
    NavigationContainer,
    NavigationContainerRef,
  } from '@react-navigation/native'
  import * as React from 'react'
import AppNavigation from './AppNavigation'
import Logger from '~/utils/helpers/Logger'
import LinkingConfiguration from './LinkingConfiguration'
  
  
  export default function Navigation() {
    const navigationContainerRef = React.useRef<NavigationContainerRef<any>>(null)
  
    React.useEffect(() => {
      async function initialize() {
        /*We initialise our app here.
          for example: event calls or App tracking popup..
        */
      }
      initialize()
    }, [])
  
    const handleNavigationStateChange = async () => {
      const currentRouteName = navigationContainerRef?.current?.getCurrentRoute()?.name
      try {
        Logger.logEvent(`Screen:${currentRouteName}` || 'Screen:Unknown')
      } catch (e) {
        console.error(e)
      }
    }
  
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        onStateChange={handleNavigationStateChange}
        ref={navigationContainerRef}
      >
        <AppNavigation />
      </NavigationContainer>
    )
  }
  
