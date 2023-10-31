import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {MutableRefObject} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';
import colors from '../../../constants/colors';
import FastImage from 'react-native-fast-image';
import Images from '../../../../Images';
import {scale} from '../../../constants/Layout';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {useRecentTransaction} from './hooks';
import {storage} from '../../../../storage';
import moment from 'moment';

interface IRecentTransaction {
  bottomSheetRef: MutableRefObject<BottomSheet | null>;
}

const RecentTransaction = ({bottomSheetRef}: IRecentTransaction) => {
  const navigation = useNavigation();

  const userId = JSON.parse(storage.getString('userInfo') as string)?.id;

  const {data, isLoading} = useRecentTransaction(userId);

  const currentDate = moment(data?.date, 'MM YYYY')
    .format('MMM YYYY')
    .toUpperCase();

  const paymentTypeEnum = {
    CREDITED: 'credited',
    DEBITED: 'debited',
  };

  const handleAllTransaction = () => {
    navigation.navigate('Transactions');
  };

  const handleAddTransaction = () => {
    bottomSheetRef.current?.expand();
  };

  const EmptyComponent = () => {
    return <Text>No Transactions</Text>;
  };

  const renderTransactions = ({item}) => {
    const date = moment(item?.date)?.format('DD MMM');
    return (
      <>
        <View style={styles.transactionsContainer}>
          <View style={styles.recentTransactions}>
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

            <View style={{alignSelf: 'center', marginLeft: scale(10)}}>
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
    <View style={styles.container}>
      <Text style={styles.transactionHeading}>Transactions</Text>

      <View style={styles.transactionContainer}>
        <BlurView style={styles.blurView} blurAmount={20} blurType="light" />
        <View style={styles.dateContainer}>
          <Text style={styles.recentTransactionDate}>{currentDate}</Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleAllTransaction}>
            <MaterialCommunityIcons
              name="arrow-expand"
              size={19}
              color={colors.white.default}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={data?.Transactions}
          renderItem={renderTransactions}
          keyExtractor={item => item.id}
          ListEmptyComponent={<EmptyComponent />}
          contentContainerStyle={styles.transactionContentContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        style={styles.addExpenses}
        activeOpacity={0.9}
        onPress={handleAddTransaction}>
        <Entypo
          name="plus"
          color={colors.white.default}
          size={40}
          style={{padding: scale(7)}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RecentTransaction;
