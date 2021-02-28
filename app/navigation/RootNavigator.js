import React from 'react';
import { Lightbox, Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import {
  NewsScreen,
  SearchScreen,
  StockScreen,
  WatchlistScreen,
} from '../screens';
import { BottomNavigation } from './BottomNavigation';

export function RootNavigator() {
  return (
    <Router>
      <Lightbox key="comingSoonOverlay">
        <Stack key="rootNavigation" headerMode="none">
          <Tabs
            key="bottomNavigation"
            tabBarComponent={BottomNavigation}
            headerMode="none">
            <Scene
              key="newsScreen"
              icon="ios-megaphone"
              title="News"
              tabNav
              component={NewsScreen}
            />
            <Scene
              key="watchlistScreen"
              title="Watchlist"
              icon="eye"
              tabNav
              component={WatchlistScreen}
            />
            <Scene
              key="searchScreen"
              icon="search"
              title="Search"
              tabNav
              component={SearchScreen}
            />
            <Scene
              key="stockScreen"
              title="Stock"
              icon="area-chart"
              iconType="FontAwesome"
              component={StockScreen}
            />
          </Tabs>
        </Stack>
      </Lightbox>
    </Router>
  );
}
