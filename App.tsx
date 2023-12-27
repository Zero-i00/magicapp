import {PersistGate} from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './app/navigation/Navigation'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider style={{flex: 1}}>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App
