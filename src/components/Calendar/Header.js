import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const _Header = ({
  month,
  year,
  headerStyle,
  onNext,
  onPrev,
  iconNext,
  iconPrev,
}) => {
  return (
    <View>
      <View style={[styles.yearMonth, headerStyle]}>
        {iconPrev ? (
          iconPrev
        ) : (
          <MaterialIcons
            style={{transform: [{rotate: '180deg'}]}}
            size={32}
            color="white"
            name="navigate-next"
            onPress={onPrev}
          />
        )}
        <Text style={styles.yearMonthText}>
          {month} {year}
        </Text>
        {iconNext ? (
          iconNext
        ) : (
          <MaterialIcons
            onPress={onNext}
            color="white"
            size={32}
            name="navigate-next"
          />
        )}
      </View>
    </View>
  );
};

export const Header = React.memo(_Header);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: -1,
    paddingVertical: 10,
  },
  yearMonth: {
    paddingVertical: 10,
    backgroundColor: '#79afc1',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#dbeede',
  },
  yearMonthText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'white',
  },
});
