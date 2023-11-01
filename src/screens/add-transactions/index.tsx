import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import * as Yup from 'yup';
import {useRoute} from '@react-navigation/native';
import Images from '../../Images';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';
import {scale} from '../constants/Layout';
import colors from '../constants/colors';
import {BlurView} from '@react-native-community/blur';
import {useAddTransaction} from './hooks';
import {storage} from '../../storage';
import CalendarModal from './partials/calendar-modal';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import moment from 'moment';
import {Keyboard} from 'react-native';

interface IParams {
  paymentType: string;
}

interface IValues {
  amount: string;
  name: string;
  category: string;
}

const validationSchema = Yup.object().shape({
  amount: Yup.number().required('Amount is required'),
  name: Yup.string().required('Name is required'),
  category: Yup.string().required('Category is required'),
});

const AddTransactions = () => {
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const {mutate, isLoading} = useAddTransaction();

  const userId = JSON.parse(storage.getString('userInfo') as string)?.id;

  const {paymentType} = (route.params as IParams) || {};

  const currentDate = moment().format('YYYY-MM-DD');

  const [selectedDate, setSelectedDate] = React.useState(currentDate);

  const formattedDate = moment(selectedDate, 'YYYY-MM-DD').format(
    'DD MMM YYYY',
  );

  const paymentTypeEnum = {
    DEBITED: 'debited',
    CREDITED: 'credited',
  };

  const initialValues = {
    amount: '',
    name: '',
    category: '',
  };

  const initialSnapPoints = useMemo(() => ['45%'], []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  const onSubmit = (values: IValues) => {
    mutate({
      amount: Number(values.amount),
      name: values.name,
      category: values.category,
      date: formattedDate,
      type: paymentType,
      userId,
    });
  };

  const handleCalendar = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <ImageBackground
      source={Images.Started}
      defaultSource={Images.Started}
      style={[styles.ImageBackground, {paddingTop: insets.top}]}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <View style={styles.headerContainer}>
          <Text style={styles.creditDebitText}>{`Add ${
            paymentType === paymentTypeEnum.DEBITED ? 'Expense' : 'Income'
          }`}</Text>
          <FastImage
            source={
              paymentType === paymentTypeEnum.DEBITED
                ? Images.Debited
                : Images.Credited
            }
            style={styles.creditDebitImage}
            resizeMode="contain"
          />
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({errors, handleChange, values, handleSubmit, handleBlur}) => (
            <View style={{marginTop: scale(50)}}>
              <View style={styles.flexView}>
                <BlurView
                  style={styles.blurView}
                  blurAmount={20}
                  blurType="light"
                />
                <TextInput
                  placeholder="Amount"
                  placeholderTextColor={colors.white.default}
                  style={styles.textInput}
                  onChangeText={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                  value={values.amount}
                  keyboardType="number-pad"
                />
              </View>
              <Text style={styles.error}>{errors.amount}</Text>

              <View style={styles.flexView}>
                <BlurView
                  style={styles.blurView}
                  blurAmount={20}
                  blurType="light"
                />
                <TextInput
                  placeholder="Name"
                  placeholderTextColor={colors.white.default}
                  style={styles.textInput}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
              </View>
              <Text style={styles.error}>{errors.name}</Text>

              <View style={styles.flexView}>
                <BlurView
                  style={styles.blurView}
                  blurAmount={20}
                  blurType="light"
                />
                <TextInput
                  placeholder="Category"
                  placeholderTextColor={colors.white.default}
                  style={styles.textInput}
                  onChangeText={handleChange('category')}
                  onBlur={handleBlur('category')}
                  value={values.category}
                />
              </View>
              <Text style={styles.error}>{errors.category}</Text>

              <TouchableOpacity
                style={styles.flexView}
                activeOpacity={0.9}
                onPress={handleCalendar}>
                <BlurView
                  style={styles.blurView}
                  blurAmount={20}
                  blurType="light"
                />
                <TextInput
                  placeholder="Transaction Date"
                  placeholderTextColor={colors.white.default}
                  style={styles.textInput}
                  value={formattedDate}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <Text style={styles.error}>{errors.transactionDate}</Text>

              <TouchableOpacity
                style={styles.buttonContainer}
                activeOpacity={0.9}
                onPress={() => handleSubmit()}>
                <Text style={styles.submitText}>{`Submit ${
                  paymentType === paymentTypeEnum.DEBITED ? 'Expense' : 'Income'
                }`}</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={initialSnapPoints}
        handleIndicatorStyle={styles.handleIndicator}
        enablePanDownToClose
        backdropComponent={renderBackdrop}>
        <CalendarModal
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </BottomSheet>
    </ImageBackground>
  );
};

export default AddTransactions;
