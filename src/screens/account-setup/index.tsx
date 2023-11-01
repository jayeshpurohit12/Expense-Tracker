import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useEffect} from 'react';
import * as Yup from 'yup';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Images from '../../Images';
import CustomTextInput from '../../components/text-input';
import {BlurView} from '@react-native-community/blur';
import {Formik} from 'formik';
import {useSignup} from './hooks';
import colors from '../constants/colors';

interface IValues {
  fullName: string;
  userName: string;
  totalBalance: string;
  incomePerMonth: string;
}

interface IAccountSetup {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  userName: Yup.string().min(3).required('User Name is required'),
  totalBalance: Yup.number().required('Total Balance is required'),
  incomePerMonth: Yup.number().required('Income per month is required'),
});

const AccountSetup = ({setIsAuth}: IAccountSetup) => {
  const insets = useSafeAreaInsets();

  const initialValues = {
    fullName: '',
    userName: '',
    totalBalance: '',
    incomePerMonth: '',
  };

  const {mutateAsync, isSuccess, error, isError, isLoading} = useSignup();

  useEffect(() => {
    if (isSuccess) {
      setIsAuth(true);
    }
  }, [setIsAuth, isSuccess]);

  const handleInfoSubmit = (values: IValues) => {
    mutateAsync({
      name: values.fullName,
      username: values.userName,
      balance: Number(values.totalBalance),
      income: Number(values.incomePerMonth),
    });
  };

  return (
    <ImageBackground
      source={Images.Started}
      style={[styles.backgroundImage, {paddingTop: insets.top}]}
      defaultSource={Images.Started}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <Text style={styles.nameText}>Piggypouch</Text>
        <Text style={styles.awayStepText}>You are just one step away!</Text>

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
                    placeholder="userName"
                    error={errors.userName}
                    handleBlur={handleBlur('userName')}
                    handleChange={handleChange('userName')}
                    value={values.userName}
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

              {isError && <Text style={styles.error}>{error as string}</Text>}

              <TouchableOpacity
                style={styles.buttonContainer}
                activeOpacity={0.9}
                onPress={() => handleSubmit()}>
                {isLoading ? (
                  <ActivityIndicator size={30} color={colors.blue.dark} />
                ) : (
                  <Text style={styles.startedButtonText}>Let's go</Text>
                )}
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default AccountSetup;
