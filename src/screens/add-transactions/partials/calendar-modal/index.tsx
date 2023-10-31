import {View} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import colors from '../../../constants/colors';

interface ICalendarModal {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

const CalendarModal = ({selectedDate, setSelectedDate}: ICalendarModal) => {
  return (
    <View>
      <Calendar
        onDayPress={day => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: colors.blue.light1,
            selectedTextColor: '#ffffff',
          },
        }}
        maxDate={new Date().toISOString().split('T')[0]}
      />
    </View>
  );
};

export default CalendarModal;
