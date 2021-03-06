### Installation

```
$ yarn add react-native-vector-icons
$ yarn add react-native-hijiri-calendar
```

[Expo Link](https://snack.expo.io/@dev-ahmed/hcalender-example)

### Usage

```javascript
import React,  from 'react';
import { StyleSheet, View } from 'react-native';
import { HCalendar } from 'react-native-hijiri-calendar';

export default ({}) => {

  return (
    <View style={styles.container}>
        <HCalendar
        onDaySelect={(day) => {
          console.log(day);
        }}
        calendarType="hijiri" //also you can pass gregorian.
        selectedDates={[
          {
            from: '1441/9/1',
            to: '1441/9/5',
            style: { borderColor: 'blue' },
          },
          {
            from: '1441/9/4',
            to: '1441/9/12',
            style: { borderColor: 'green' },
          },
        ]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

| Prop                 | Type       | default   |
| -------------------- | ---------- | --------- |
| containerStyle       | `Style`    | {}        |
| headerStyle          | `Style`    | {}        |
| headerFontStyle      | `Style`    | {}        |
| fontStyle            | `Style`    | {}        |
| weekDaysStyle        | `Style`    | {}        |
| currentDayStyle      | `Style`    | {}        |
| headerStyle          | `Style`    | {}        |
| dayNameFontStyle     | `Style`    | {}        |
| markedDatesTextStyle | `Style`    | {}        |
| onPrev               | `Function` | Undefined |
| onNext               | `Function` | Undefined |
| onDaySelect,         | `Callback` | Undefined |
| locale               | `String`   | "en"      |
| selectedDates        | `Object`   | "[]"      |
| iconNext             | `Element`  |           |
| iconPrev             | `Element`  |           |
| calendarType         | `String`   | 'hijiri'  |

### Contributing

Pull requests are very welcome.
