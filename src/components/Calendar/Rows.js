import React from 'react';
import moment from 'moment-hijri';
import {StyleSheet, View} from 'react-native';
import {
  generateMatrix,
  generateSelectedDatesMatrix,
  castHijiriDate,
} from '../../utils';
import {Col} from './Col';

const _Rows = ({
  month,
  firstDay,
  currentDay,
  year,
  fontStyle,
  weekDaysStyle,
  currentDayStyle,
  dayNameFontStyle,
  selectedDates,
  calendarType,
  markedDatesTextStyle,
  onPress,
}) => {
  const matrix = generateMatrix({month, firstDay, year, calendarType});
  const currentMonth = moment().iMonth();
  const currentYear = moment().iYear();

  const markedDates =
    selectedDates &&
    selectedDates.map((item) => {
      const startingDay = castHijiriDate(item.from).iDate();
      const endingDay = castHijiriDate(item.to).iDate();

      return {
        selectedDays: generateSelectedDatesMatrix({
          startDate: startingDay,
          endDate: endingDay,
          monthMatrix: matrix,
        }),
        months: [
          castHijiriDate(item.from).iMonth(),
          castHijiriDate(item.to).iMonth(),
        ],
        style: item.style,
      };
    });

  const isCurrentDay =
    currentMonth == month && currentYear == year && currentDay;

  const weekDaysBackground = {backgroundColor: '#bcced6'};

  return (
    <View style={styles.container}>
      {matrix.map((row, rowIndex) => {
        return (
          <Col
            onPress={onPress}
            key={rowIndex.toString()}
            containerStyle={[
              rowIndex == 0 && weekDaysBackground,
              rowIndex == 0 && weekDaysStyle,
            ]}
            currentDay={isCurrentDay}
            rowData={row}
            index={rowIndex}
            activeMonth={month}
            year={year}
            fontStyle={fontStyle}
            currentDayStyle={currentDayStyle}
            dayNameFontStyle={dayNameFontStyle}
            markedDays={markedDates}
            markedDatesTextStyle={markedDatesTextStyle}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export const Rows = React.memo(_Rows);
