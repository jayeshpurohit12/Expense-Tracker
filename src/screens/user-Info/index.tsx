import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React from 'react';
import Images from '../../Images';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import {BlurView} from '@react-native-community/blur';
import CustomTextInput from '../../components/text-input';
import * as Yup from 'yup';
import {useUpdateInfo} from './hooks';
import {storage} from '../../storage';
import colors from '../constants/colors';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  totalBalance: Yup.string().required('Total Balance is required'),
  incomePerMonth: Yup.string().required('Income per month is required'),
});

interface IValues {
  fullName: string;
  totalBalance: string;
  incomePerMonth: string;
}

const UserInfo = () => {
  const insets = useSafeAreaInsets();

  const userInfo = JSON.parse(storage.getString('userInfo') as string);

  const initialValues = {
    fullName: userInfo?.name,
    totalBalance: String(userInfo?.balance),
    incomePerMonth: String(userInfo?.income),
  };

  const {mutate, isLoading} = useUpdateInfo();

  const handleInfoSubmit = (values: IValues) => {
    mutate({
      name: values.fullName,
      balance: Number(values.totalBalance),
      income: Number(values.incomePerMonth),
      userId: userInfo?.id,
    });
  };

  return (
    <ImageBackground
      source={Images.Started}
      defaultSource={Images.Started}
      style={[styles.container, {paddingTop: insets.top}]}>
      <Text style={styles.headerText}>Update Information</Text>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleInfoSubmit}>
          {({errors, values, handleBlur, handleChange, handleSubmit}) => (
            <>
              <View style={styles.inputAllContainer}>
                <BlurView
                  style={styles.blurView}
                  blurAmount={20}
                  blurType="light"
                />
                <View>
                  <CustomTextInput
                    placeholder="Full Name"
                    error={errors.fullName}
                    handleBlur={handleBlur('fullName')}
                    handleChange={handleChange('fullName')}
                    value={values.fullName}
                  />
                  <CustomTextInput
                    placeholder="Total Balance"
                    isNumber
                    error={errors.totalBalance}
                    handleBlur={handleBlur('totalBalance')}
                    handleChange={handleChange('totalBalance')}
                    value={values.totalBalance}
                  />
                  <CustomTextInput
                    placeholder="Income per month"
                    isNumber
                    error={errors.incomePerMonth}
                    handleBlur={handleBlur('incomePerMonth')}
                    handleChange={handleChange('incomePerMonth')}
                    value={values.incomePerMonth}
                  />
                </View>
              </View>

              <TouchableOpacity
                style={styles.buttonContainer}
                activeOpacity={0.9}
                onPress={() => handleSubmit()}>
                {isLoading ? (
                  <ActivityIndicator size={30} color={colors.blue.dark} />
                ) : (
                  <Text style={styles.startedButtonText}>Update</Text>
                )}
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default UserInfo;
