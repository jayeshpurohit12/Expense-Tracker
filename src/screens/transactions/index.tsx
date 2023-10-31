import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../Images';
import {styles} from './styles';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {scale} from '../constants/Layout';
import colors from '../constants/colors';
import {BlurView} from '@react-native-community/blur';
import {useTransaction} from '../home/partials/recent-transaction/hooks';
import {storage} from '../../storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Transactions = () => {
  const userId = JSON.parse(storage.getString('userInfo') as string)?.id;

  const paymentTypeEnum = {
    DEBITED: 'debited',
    CREDITED: 'credited',
  };

  const insets = useSafeAreaInsets();

  const [selectedType, setSelectedType] = useState(paymentTypeEnum.DEBITED);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);

  const formattedDate = moment(selectedDate).format('MMM YYYY');

  const {data, isLoading} = useTransaction({
    userId,
    date: String(selectedDate),
    type: selectedType,
  });

  const handleConfirm = date => {
    setSelectedDate(date);
    setIsModalVisible(false);
  };

  const EmptyComponent = () => {
    return <Text>No Transactions</Text>;
  };

  const renderTransactions = ({item}) => {
    const date = moment(item?.date)?.format('DD MMM');
    return (
      <>
        <View style={styles.transactionsContainer}>
          <View style={styles.allTransaction}>
            <View
              style={{
                backgroundColor: colors.white.light6,
                padding: scale(8),
                borderRadius: scale(20),
              }}>
              <FastImage
                source={
                  item?.type === paymentTypeEnum.DEBITED
                    ? Images.Debited
                    : Images.Credited
                }
                style={styles.transactionHighLow}
                resizeMode="contain"
              />
            </View>

            <View style={styles.transactionWrap}>
              <Text style={styles.transactionName}>{item?.name}</Text>
              <Text style={styles.transactionCategory}>{item?.category}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.transactionAmount}>$ {item?.amount}</Text>
            <Text style={styles.transactionDate}>{date}</Text>
          </View>
        </View>
        <View style={styles.lineBreaker} />
      </>
    );
  };

  return (
    <ImageBackground source={Images.Started} style={styles.backgroundImage}>
      <SafeAreaView style={styles.safeView} edges={['bottom', 'left', 'right']}>
        <Text style={[styles.transactionHeading, {paddingTop: insets.top}]}>
          Transactions
        </Text>

        <View style={styles.headerContainer}>
          <View style={styles.debitCreditContainer}>
            <TouchableOpacity
              style={[
                styles.toggleStyle,
                selectedType === paymentTypeEnum.DEBITED &&
                  styles.selectedToggle,
              ]}
              onPress={() => setSelectedType(paymentTypeEnum.DEBITED)}>
              <FastImage
                source={Images.Debited}
                style={styles.debitCredit}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleStyle,
                selectedType === paymentTypeEnum.CREDITED &&
                  styles.selectedToggle,
              ]}
              onPress={() => setSelectedType(paymentTypeEnum.CREDITED)}>
              <FastImage
                source={Images.Credited}
                style={[styles.debitCredit]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.dateContainer}
            activeOpacity={0.9}
            onPress={() => setIsModalVisible(true)}>
            <Text style={styles.date}>{formattedDate}</Text>
            <Ionicons
              name={isModalVisible ? 'caret-up' : 'caret-down'}
              size={24}
              color={colors.white.default}
              style={{marginLeft: scale(5)}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.allTransactionView}>
          <BlurView style={styles.blurView} blurAmount={20} blurType="light" />

          <FlatList
            data={data?.Transactions}
            renderItem={renderTransactions}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.transactionContentContainer}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyComponent />}
          />
        </View>
      </SafeAreaView>

      <DateTimePickerModal
        isVisible={isModalVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setIsModalVisible(false)}
        textColor={colors.blue.dark}
        themeVariant="light"
        date={selectedDate || new Date()}
        maximumDate={new Date()}
      />
    </ImageBackground>
  );
};

export default Transactions;
