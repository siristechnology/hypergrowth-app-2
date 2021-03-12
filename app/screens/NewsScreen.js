import React from 'react';
import { Container, Tab, Text } from 'native-base';
import { StockNews } from '../components/Stock/tabs/StockNews';
import { StyleSheet } from 'react-native';
import theme from '../theme';

function NewsScreen(props) {
  return <Container />;
}

const styles = StyleSheet.create({
  negative: {
    color: theme.dark.red,
  },
  tabBarContainer: {
    borderWidth: 0,
  },
  tabBar: {
    backgroundColor: theme.dark.blue2,
  },
  tabsContainer: {
    marginTop: 15,
    // height: 40,
  },
  tabHeading: {
    flex: 1,
    height: 40,
    backgroundColor: theme.dark.blue2,
  },
  tabHeadingText: { color: theme.dark.textColor },
  tabHeadingUnderline: {
    backgroundColor: theme.dark.orange,
  },
  tab: {
    padding: 15,
  },
});

export default NewsScreen;
