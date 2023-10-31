import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{flex: 1}}>
          <SafeAreaView style={styles.container}>
            <RootNavigation />
          </SafeAreaView>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
